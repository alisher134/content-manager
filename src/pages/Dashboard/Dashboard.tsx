import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Calendar,
  ExternalLink,
  Layers,
  Layout,
  MessageSquare,
  Plus,
  TrendingUp,
  Users,
} from 'lucide-react';

import { ROUTES } from '@app/Routes';

import { Button } from '@components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/ui/Card';
import { Separator } from '@components/ui/Separator';

export const Dashboard = () => {
  return (
    <div className="bg-background relative min-h-screen w-full overflow-hidden px-6 py-10">
      {/* Background Glows (UI-UX Pro Max) */}
      <div className="bg-primary/10 absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full blur-[120px]" />
      <div className="bg-secondary/10 absolute -right-24 -bottom-24 h-[500px] w-[500px] rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-10">
        {/* Welcome Section */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold tracking-tight">Pulse Analytics</h1>
            <p className="text-muted-foreground text-lg italic">
              Good morning, Alisher. Your content is reaching new heights today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-bold">March 24, 2024</p>
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
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-4">
          {/* Main Analytics Chart (lg:col-span-2 lg:row-span-2) */}
          <Card className="bg-card/50 border-white/10 backdrop-blur-xl md:col-span-2 lg:col-span-2 lg:row-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="space-y-1">
                <CardTitle className="text-xl font-bold">Audience Growth</CardTitle>
                <CardDescription>Total views across all platforms</CardDescription>
              </div>
              <Button variant="ghost" size="icon" className="size-8">
                <ExternalLink className="size-4" />
              </Button>
            </CardHeader>
            <CardContent className="flex h-[300px] flex-col justify-end gap-4">
              <div className="flex h-full items-end justify-between gap-2 pt-8">
                {[40, 60, 45, 90, 65, 80, 100, 70, 85, 95, 60, 75].map((h, i) => (
                  <div
                    key={i}
                    className="bg-primary/20 hover:bg-primary/40 w-full rounded-t-sm transition-all"
                    style={{ height: `${String(h)}%` }}
                  />
                ))}
              </div>
              <div className="text-muted-foreground flex justify-between text-[10px] font-bold tracking-tighter uppercase">
                <span>Jan</span>
                <span>Apr</span>
                <span>Jul</span>
                <span>Oct</span>
                <span>Dec</span>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats (1x1) */}
          <Card className="bg-card/50 group hover:border-primary/30 border-white/10 backdrop-blur-xl transition-all">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="bg-primary/10 flex size-10 items-center justify-center rounded-xl">
                  <TrendingUp className="text-primary size-5" />
                </div>
                <span className="text-primary flex items-center text-xs font-bold">
                  +12.5% <ArrowUpRight className="ml-1 size-3" />
                </span>
              </div>
              <div className="mt-4 space-y-1">
                <div className="text-3xl font-black">45.2k</div>
                <div className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
                  Total Views
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 group hover:border-secondary/30 border-white/10 backdrop-blur-xl transition-all">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="bg-secondary/10 flex size-10 items-center justify-center rounded-xl">
                  <Users className="text-secondary size-5" />
                </div>
                <span className="text-secondary flex items-center text-xs font-bold">
                  +8.4% <ArrowUpRight className="ml-1 size-3" />
                </span>
              </div>
              <div className="mt-4 space-y-1">
                <div className="text-3xl font-black">12.1k</div>
                <div className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
                  Active Users
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Engagement Card (1x1) - lg:row-start-2 */}
          <Card className="bg-card/50 border-white/10 backdrop-blur-xl lg:col-start-3 lg:row-start-2">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="bg-accent/10 flex size-10 items-center justify-center rounded-xl">
                  <MessageSquare className="text-accent size-5" />
                </div>
                <span className="text-accent flex items-center text-xs font-bold">
                  +2.1% <ArrowUpRight className="ml-1 size-3" />
                </span>
              </div>
              <div className="mt-4 space-y-1">
                <div className="text-3xl font-black">8.4k</div>
                <div className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
                  Total Comments
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-white/10 backdrop-blur-xl lg:col-start-4 lg:row-start-2">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="bg-foreground/10 flex size-10 items-center justify-center rounded-xl">
                  <Layers className="text-foreground size-5" />
                </div>
                <span className="text-foreground flex items-center text-xs font-bold">
                  +4 <ArrowUpRight className="ml-1 size-3" />
                </span>
              </div>
              <div className="mt-4 space-y-1">
                <div className="text-3xl font-black">124</div>
                <div className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
                  Posts Created
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Posts Section (lg:col-span-3 lg:row-span-2) */}
          <Card className="bg-card/50 border-white/10 backdrop-blur-xl lg:col-span-3 lg:row-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-bold">Top Performing Content</CardTitle>
              <Button asChild variant="ghost" size="sm" className="font-bold">
                <Link to={ROUTES.POSTS}>View All</Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: 'The Future of Content Management', views: '12.4k', growth: '+24%' },
                { title: 'Designing for the Digital Pulse', views: '8.2k', growth: '+12%' },
                { title: 'Why Performance is the New UI', views: '5.1k', growth: '+8%' },
                { title: 'The Rise of Agentic Coding', views: '4.8k', growth: '+15%' },
              ].map((post, i) => (
                <div
                  key={i}
                  className="group flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-white/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-muted flex size-10 items-center justify-center rounded-lg text-xs font-bold">
                      0{i + 1}
                    </div>
                    <div>
                      <p className="group-hover:text-primary text-sm font-semibold transition-colors">
                        {post.title}
                      </p>
                      <p className="text-muted-foreground text-xs tracking-tighter uppercase">
                        Last edited 2 days ago
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">{post.views}</p>
                    <p className="text-primary text-[10px] font-black">{post.growth}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions / Platforms (lg:col-span-1 lg:row-span-2) */}
          <Card className="bg-card/50 border-white/10 backdrop-blur-xl lg:col-span-1 lg:row-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-bold tracking-wider uppercase">
                Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { label: 'Medium', value: 75 },
                { label: 'Twitter', value: 90 },
                { label: 'Substack', value: 45 },
              ].map((p, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold">{p.label}</span>
                    <span className="text-muted-foreground">{p.value}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <div
                      className="bg-primary h-full transition-all"
                      style={{ width: `${String(p.value)}%` }}
                    />
                  </div>
                </div>
              ))}
              <Separator className="bg-white/5" />
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="h-10 w-full border-white/10 bg-white/5 text-xs font-bold"
                >
                  <Layout className="mr-2 size-4" />
                  Customize Dashboard
                </Button>
                <Button
                  variant="outline"
                  className="h-10 w-full border-white/10 bg-white/5 text-xs font-bold"
                >
                  <Calendar className="mr-2 size-4" />
                  Schedule Post
                </Button>
              </div>
            </CardContent>
          </Card>
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
