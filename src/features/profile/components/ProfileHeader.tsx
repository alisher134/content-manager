import { Link } from 'react-router-dom';
import { Calendar, Edit3, Mail, MapPin, Settings, Users } from 'lucide-react';

import type { UserProfile } from '../types/profileTypes';

import { Button } from '@/shared/components';

interface ProfileHeaderProps {
  readonly profile: UserProfile;
  readonly editHref: string;
  readonly settingsHref: string;
}

export const ProfileHeader = ({ profile, editHref, settingsHref }: ProfileHeaderProps) => (
  <header className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
    <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
      <div className="bg-muted ring-offset-background ring-primary/20 flex size-32 items-center justify-center rounded-3xl border border-white/10 shadow-2xl ring-2">
        <Users className="text-muted-foreground size-12" />
      </div>
      <div className="space-y-4 text-center md:text-left">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight">{profile.name}</h1>
          <p className="text-primary font-medium tracking-wide">{profile.role}</p>
        </div>
        <div className="text-muted-foreground flex flex-wrap justify-center gap-4 text-sm md:justify-start">
          <div className="flex items-center gap-1.5">
            <MapPin className="size-4" />
            {profile.location}
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="size-4" />
            Joined <time dateTime={profile.joinDate}>{profile.joinDate}</time>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail className="size-4" />
            {profile.email}
          </div>
        </div>
      </div>
    </div>

    <div className="flex gap-3">
      <Button asChild size="lg" className="shadow-primary/20 h-11 px-8 font-bold shadow-lg">
        <Link to={editHref}>
          <Edit3 className="mr-2 size-4" />
          Edit Profile
        </Link>
      </Button>
      <Button asChild variant="outline" size="icon" className="h-11 w-11 border-white/10">
        <Link to={settingsHref} aria-label="Go to settings">
          <Settings className="size-5" />
        </Link>
      </Button>
    </div>
  </header>
);
