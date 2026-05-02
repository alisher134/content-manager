import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Plus, Search } from 'lucide-react';

import { ROUTES } from '@app/Routes';

import {
  type Post,
  type PostAuthor,
  PostCard,
  PostFilters,
  type PostStatus,
} from '@features/posts';
import { Button, Input } from '@shared/components';

const MOCK_POSTS: Post[] = [1, 2, 3, 4, 5, 6].map((i) => ({
  id: String(i),
  title: 'The Future of Content Management: A Pulse Perspective',
  excerpt:
    'Explore how AI and edge computing are redefining the way we create, manage, and distribute content across the digital universe.',
  category: 'Technology',
  author: { name: 'John Doe' },
  readTime: '5 min read',
  date: 'March 24, 2024',
  status: 'Published',
  likes: 1200,
  comments: 84,
}));

const MOCK_AUTHORS: PostAuthor[] = [
  { name: 'John Doe', posts: 124 },
  { name: 'Elena Gilbert', posts: 84 },
  { name: 'Stefan Salvatore', posts: 56 },
  { name: 'Bonnie Bennett', posts: 42 },
  { name: 'Damon Salvatore', posts: 31 },
];

export const PostFeed = () => {
  const [selectedStatus, setSelectedStatus] = useState<PostStatus[]>(['Published']);

  const handleStatusChange = (status: PostStatus) => {
    setSelectedStatus((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status],
    );
  };

  return (
    <div className="bg-background relative min-h-screen w-full px-6 py-10">
      <div className="bg-primary/5 pointer-events-none absolute top-0 left-1/4 h-96 w-96 rounded-full blur-[100px]" />
      <div className="bg-secondary/5 pointer-events-none absolute right-1/4 bottom-0 h-96 w-96 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <header className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tight">Content Feed</h1>
            <p className="text-muted-foreground text-lg">
              Discover and manage the pulse of your platform.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative w-full sm:w-80">
              <Search className="text-muted-foreground absolute top-1/2 left-3.5 size-4 -translate-y-1/2" />
              <Input
                placeholder="Search articles..."
                className="bg-card/30 focus:ring-primary/20 h-12 border-white/10 pl-10 backdrop-blur-sm transition-all focus:ring-2"
              />
            </div>
            <Button asChild className="shadow-primary/20 h-12 px-8 font-bold shadow-lg">
              <Link to={ROUTES.POST_NEW}>
                <Plus className="mr-2 size-5" />
                New Post
              </Link>
            </Button>
          </div>
        </header>

        <div className="flex flex-col gap-16 lg:flex-row">
          <PostFilters
            selectedStatus={selectedStatus}
            onStatusChange={handleStatusChange}
            authors={MOCK_AUTHORS}
            onAuthorSearch={() => {
              /* Author search logic to be implemented */
            }}
            onReset={() => {
              setSelectedStatus([]);
            }}
          />

          <main className="flex-1 space-y-8">
            <nav className="scrollbar-hide flex items-center gap-2 overflow-x-auto pb-2">
              {['All Posts', 'Design', 'Technology', 'Strategy', 'Development', 'Marketing'].map(
                (cat, i) => (
                  <button
                    key={cat}
                    className={`rounded-full px-6 py-2 text-sm font-bold whitespace-nowrap transition-all ${
                      i === 0
                        ? 'bg-primary shadow-primary/20 text-white shadow-lg'
                        : 'bg-card/50 text-muted-foreground hover:bg-card/80 hover:text-foreground border border-white/10 backdrop-blur-sm'
                    }`}
                  >
                    {cat}
                  </button>
                ),
              )}
            </nav>

            <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {MOCK_POSTS.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </section>

            <div className="flex justify-center pt-12">
              <Button
                variant="outline"
                className="h-14 border-white/10 px-12 text-base font-bold backdrop-blur-sm transition-all hover:bg-white/5"
              >
                Load More Content
                <Clock className="ml-2 size-5 opacity-50" />
              </Button>
            </div>
          </main>
        </div>
      </div>

      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(var(--border) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />
    </div>
  );
};
