import { Link } from 'react-router-dom';
import { Calendar, Edit3, FileText, Mail, MapPin, Settings, Users } from 'lucide-react';

import { ROUTES } from '@app/Routes';

import { Button } from '@components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/Card';
import { Separator } from '@components/ui/Separator';

export const Profile = () => {
  return (
    <div className="bg-background relative min-h-screen w-full overflow-hidden pb-20">
      <div className="bg-primary/5 absolute top-0 left-0 h-96 w-96 rounded-full blur-[100px]" />

      <div className="bg-background/80 sticky top-0 z-50 w-full border-b border-white/5 px-6 py-4 backdrop-blur-md">
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
      </div>

      <div className="relative z-10 mx-auto mt-12 max-w-4xl space-y-12 px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            <div className="bg-muted ring-offset-background ring-primary/20 flex size-32 items-center justify-center rounded-3xl border border-white/10 shadow-2xl ring-2">
              <Users className="text-muted-foreground size-12" />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <div className="space-y-1">
                <h1 className="text-4xl font-bold tracking-tight">John Doe</h1>
                <p className="text-primary font-medium tracking-wide">Senior Content Editor</p>
              </div>
              <div className="text-muted-foreground flex flex-wrap justify-center gap-4 text-sm md:justify-start">
                <div className="flex items-center gap-1.5">
                  <MapPin className="size-4" />
                  New York, NY
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="size-4" />
                  Joined March 2024
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="size-4" />
                  john@pulse.io
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button asChild size="lg" className="shadow-primary/20 h-11 px-8 font-bold shadow-lg">
              <Link to={ROUTES.PROFILE_SETTINGS}>
                <Edit3 className="mr-2 size-4" />
                Edit Profile
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon" className="h-11 w-11 border-white/10">
              <Link to={ROUTES.PROFILE_SETTINGS}>
                <Settings className="size-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Bento Grid (UI-UX Pro Max) */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: 'Total Posts', value: '1,284', color: 'text-primary' },
            { label: 'Avg. Views', value: '45.2k', color: 'text-secondary' },
            { label: 'Comments', value: '8.4k', color: 'text-accent' },
            { label: 'Followers', value: '12.1k', color: 'text-foreground' },
          ].map((stat, i) => (
            <Card key={i} className="bg-card/50 border-white/10 backdrop-blur-xl">
              <CardContent className="pt-6">
                <div className="space-y-1 text-center">
                  <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
                  <div className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
                    {stat.label}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content: Bio & Activity */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight">Biography</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Passionate about digital storytelling and high-performance content systems. Leading
                the editorial team at Pulse to redefine how modern platforms manage and deliver
                digital experiences. Expert in SEO, editorial strategy, and team scaling.
              </p>
            </div>

            <Separator className="bg-white/5" />

            <div className="space-y-6">
              <h3 className="text-xl font-bold tracking-tight">Recent Activity</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-card/30 hover:bg-card/50 flex items-center gap-4 rounded-2xl border border-white/5 p-4 backdrop-blur-sm transition-colors"
                  >
                    <div className="bg-primary/10 flex size-10 items-center justify-center rounded-xl">
                      <Edit3 className="text-primary size-5" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-semibold">
                        Published new post: &quot;State of Content 2026&quot;
                      </p>
                      <p className="text-muted-foreground text-xs">2 hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-1">
            <Card className="bg-card/50 border-white/10 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-sm font-bold tracking-wider uppercase">
                  Connected Platforms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {['Medium', 'Substack', 'Twitter'].map((platform) => (
                  <div key={platform} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{platform}</span>
                    <span className="text-primary font-medium">Linked</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Decorative Grid */}
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
