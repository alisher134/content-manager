import { Link } from 'react-router-dom';
import { Edit3, FileText, Settings } from 'lucide-react';

import { ROUTES } from '@app/Routes';

import {
  type ActivityItem,
  ProfileHeader,
  type ProfileStat,
  ProfileStats,
  RecentActivity,
  type UserProfile,
} from '@features/profile';
import { Button, Separator } from '@shared/components';

const MOCK_PROFILE: UserProfile = {
  name: 'John Doe',
  role: 'Senior Content Editor',
  location: 'New York, NY',
  joinDate: 'March 2024',
  email: 'john@pulse.io',
  bio: 'Passionate about digital storytelling and high-performance content systems. Leading the editorial team at Pulse to redefine how modern platforms manage and deliver digital experiences. Expert in SEO, editorial strategy, and team scaling.',
};

const MOCK_STATS: ProfileStat[] = [
  { label: 'Total Posts', value: '1,284', color: 'text-primary' },
  { label: 'Avg. Views', value: '45.2k', color: 'text-secondary' },
  { label: 'Comments', value: '8.4k', color: 'text-accent' },
  { label: 'Followers', value: '12.1k', color: 'text-foreground' },
];

const MOCK_ACTIVITIES: ActivityItem[] = [
  {
    id: '1',
    type: 'publish',
    title: 'Published new post: "State of Content 2026"',
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    type: 'publish',
    title: 'Published new post: "The Future of Content Management"',
    timestamp: '1 day ago',
  },
  {
    id: '3',
    type: 'publish',
    title: 'Published new post: "Designing for the Digital Pulse"',
    timestamp: '3 days ago',
  },
];

export const Profile = () => {
  return (
    <div className="bg-background relative min-h-screen w-full pb-20">
      <div className="bg-primary/5 absolute top-0 left-0 h-96 w-96 rounded-full blur-[100px]" />

      <nav className="bg-background/80 sticky top-0 z-50 w-full border-b border-white/5 px-6 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 flex size-10 items-center justify-center rounded-xl">
              <FileText className="text-primary size-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold">Profile View</h2>
              <p className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
                Public Portfolio
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm" className="font-bold">
              <Link to={ROUTES.PROFILE_SETTINGS}>
                <Settings className="mr-2 size-4" />
                Settings
              </Link>
            </Button>
            <Button asChild size="sm" className="font-bold">
              <Link to={ROUTES.PROFILE_SETTINGS}>
                <Edit3 className="mr-2 size-4" />
                Edit Profile
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 mx-auto mt-12 max-w-4xl space-y-12 px-6">
        <ProfileHeader
          profile={MOCK_PROFILE}
          editHref={ROUTES.PROFILE_SETTINGS}
          settingsHref={ROUTES.PROFILE_SETTINGS}
        />

        <ProfileStats stats={MOCK_STATS} />

        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-8">
            <section aria-labelledby="bio-title" className="space-y-4">
              <h3 id="bio-title" className="text-xl font-bold tracking-tight">
                Biography
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{MOCK_PROFILE.bio}</p>
            </section>

            <Separator className="bg-white/5" />

            <RecentActivity activities={MOCK_ACTIVITIES} />
          </div>
        </div>
      </main>

      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(var(--border) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />
    </div>
  );
};
