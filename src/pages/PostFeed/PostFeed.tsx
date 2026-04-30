import { Link } from 'react-router-dom';
import { Clock, Filter, MessageSquare, Plus, Search, ThumbsUp, TrendingUp } from 'lucide-react';

import { ROUTES } from '@app/Routes';

import { Button } from '@components/ui/Button';
import { Card, CardContent, CardFooter, CardHeader } from '@components/ui/Card';
import { Input } from '@components/ui/Input';

export const PostFeed = () => {
  return (
    <div className="bg-background relative min-h-screen w-full overflow-hidden px-6 py-10">
      {/* Background Glows */}
      <div className="bg-primary/5 absolute top-0 left-1/4 h-96 w-96 rounded-full blur-[100px]" />
      <div className="bg-secondary/5 absolute right-1/4 bottom-0 h-96 w-96 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-10">
        {/* Header & Controls */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold tracking-tight">Content Feed</h1>
            <p className="text-muted-foreground text-lg">
              Discover and manage the pulse of your platform.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative w-full sm:w-80">
              <Search className="text-muted-foreground absolute top-1/2 left-3.5 size-4 -translate-y-1/2" />
              <Input
                placeholder="Search articles..."
                className="bg-card/50 focus:ring-primary/20 h-11 border-white/10 pl-10 backdrop-blur-sm transition-all focus:ring-2"
              />
            </div>
            <Button
              variant="outline"
              className="bg-card/50 h-11 border-white/10 px-5 backdrop-blur-sm"
            >
              <Filter className="mr-2 size-4" />
              Filters
            </Button>
            <Button asChild className="shadow-primary/20 h-11 px-6 font-bold shadow-lg">
              <Link to={ROUTES.POST_NEW}>
                <Plus className="mr-2 size-5" />
                New Post
              </Link>
            </Button>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto pb-2">
          {['All Posts', 'Design', 'Technology', 'Strategy', 'Development', 'Marketing'].map(
            (cat, i) => (
              <button
                key={cat}
                className={`rounded-full px-4 py-1.5 text-sm font-bold whitespace-nowrap transition-all ${
                  i === 0
                    ? 'bg-primary shadow-primary/20 text-white shadow-lg'
                    : 'bg-card/50 text-muted-foreground hover:bg-card/80 hover:text-foreground border border-white/10 backdrop-blur-sm'
                }`}
              >
                {cat}
              </button>
            ),
          )}
        </div>

        {/* Posts Grid (UI-UX Pro Max) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card
              key={i}
              className="bg-card/50 group hover:border-primary/30 border-white/10 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <CardHeader className="p-0">
                <div className="bg-muted relative aspect-video w-full overflow-hidden rounded-t-xl">
                  {/* Fake Image Placeholder */}
                  <div className="from-primary/20 to-secondary/20 absolute inset-0 flex items-center justify-center bg-linear-to-br">
                    <TrendingUp className="text-primary/40 size-12" />
                  </div>
                  <div className="absolute top-3 left-3 rounded-lg bg-black/40 px-2 py-1 text-[10px] font-bold tracking-widest text-white uppercase backdrop-blur-md">
                    Technology
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 p-6">
                <div className="text-muted-foreground flex items-center gap-2 text-xs">
                  <div className="bg-primary size-2 rounded-full" />
                  <span>5 min read</span>
                  <span>•</span>
                  <span>March 24, 2024</span>
                </div>
                <h3 className="group-hover:text-primary line-clamp-2 text-xl leading-tight font-bold tracking-tight transition-colors">
                  The Future of Content Management: A Pulse Perspective
                </h3>
                <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                  Explore how AI and edge computing are redefining the way we create, manage, and
                  distribute content across the digital universe.
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t border-white/5 px-6 py-4">
                <div className="flex items-center gap-2 text-xs font-medium">
                  <div className="bg-muted size-6 rounded-full border border-white/10" />
                  <span>John Doe</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="size-3" />
                    <span className="text-[10px]">1.2k</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="size-3" />
                    <span className="text-[10px]">84</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More Section */}
        <div className="flex justify-center pt-10">
          <Button
            variant="outline"
            className="h-12 border-white/10 px-10 font-bold backdrop-blur-sm hover:bg-white/5"
          >
            Load More Content
            <Clock className="ml-2 size-4 opacity-50" />
          </Button>
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
