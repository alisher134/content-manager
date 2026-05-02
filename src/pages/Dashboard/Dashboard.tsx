import { Link } from 'react-router-dom';
import { Layers, MessageSquare, Plus, TrendingUp, Users } from 'lucide-react';

import { ROUTES } from '@app/Routes';

import { AudienceChart, Distribution, StatCard, TopContent } from '@features/dashboard';
import { Button } from '@shared/components';

export const Dashboard = () => {
  return (
    <div className="bg-background relative min-h-screen w-full px-6 py-10">
      <div className="bg-primary/10 absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full blur-[120px]" />
      <div className="bg-secondary/10 absolute -right-24 -bottom-24 h-[500px] w-[500px] rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-10">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold tracking-tight">Pulse Analytics</h1>
            <p className="text-muted-foreground text-lg italic">
              Good morning, Alisher. Your content is reaching new heights today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-bold">
                <time dateTime="2024-03-24">March 24, 2024</time>
              </p>
              <p className="text-muted-foreground text-xs tracking-widest uppercase">
                Real-time tracking
              </p>
            </div>
            <Button asChild className="shadow-primary/20 h-11 px-6 font-bold shadow-lg">
              <Link to={ROUTES.POST_NEW}>
                <Plus className="mr-2 size-5" />
                New Post
              </Link>
            </Button>
          </div>
        </header>

        <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-4">
          <section
            className="md:col-span-2 lg:col-span-2 lg:row-span-2"
            aria-labelledby="growth-title"
          >
            <AudienceChart />
          </section>

          <section aria-labelledby="views-title">
            <StatCard
              id="views-title"
              title="Total Views"
              value="45.2k"
              growth="+12.5%"
              Icon={TrendingUp}
              variant="primary"
            />
          </section>

          <section aria-labelledby="users-title">
            <StatCard
              id="users-title"
              title="Active Users"
              value="12.1k"
              growth="+8.4%"
              Icon={Users}
              variant="secondary"
            />
          </section>

          <section className="lg:col-start-3 lg:row-start-2" aria-labelledby="comments-title">
            <StatCard
              id="comments-title"
              title="Total Comments"
              value="8.4k"
              growth="+2.1%"
              Icon={MessageSquare}
              variant="accent"
            />
          </section>

          <section className="lg:col-start-4 lg:row-start-2" aria-labelledby="posts-count-title">
            <StatCard
              id="posts-count-title"
              title="Posts Created"
              value="124"
              growth="+4"
              Icon={Layers}
              variant="foreground"
            />
          </section>

          <section className="lg:col-span-3 lg:row-span-2" aria-labelledby="top-content-title">
            <TopContent viewAllHref={ROUTES.POSTS} />
          </section>

          <section className="lg:col-span-1 lg:row-span-2" aria-labelledby="distribution-title">
            <Distribution />
          </section>
        </main>
      </div>

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
