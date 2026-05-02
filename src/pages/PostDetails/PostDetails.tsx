import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Bookmark, MessageSquare, Share2, ThumbsUp, User } from 'lucide-react';

import { ROUTES } from '@app/Routes';

import { CommentList } from '@features/posts';
import { Button, Separator } from '@shared/components';

const MOCK_COMMENTS = [
  {
    id: 1,
    name: 'Elena Gilbert',
    time: '3 hours ago',
    text: 'This is exactly what I was looking for. The transition to intelligent edge is going to be massive for real-time applications.',
    likes: 12,
    isLiked: true,
    replies: [
      {
        name: 'Damon Salvatore',
        time: '2 hours ago',
        text: 'Agreed. Especially with the new latency benchmarks we saw last week.',
        likes: 4,
      },
    ],
  },
  {
    id: 2,
    name: 'Stefan Salvatore',
    time: '5 hours ago',
    text: 'The point about MEANINGFUL connections between data points is so underrated. Great perspective!',
    likes: 8,
    isLiked: false,
    showReplyInput: true,
  },
  {
    id: 3,
    name: 'Bonnie Bennett',
    time: 'Yesterday',
    text: 'How do you see the role of edge computing in mobile-first experiences? Would love to see a follow-up on that.',
    likes: 24,
    isLiked: false,
  },
];

export const PostDetails = () => {
  useParams();

  return (
    <div className="bg-background relative min-h-screen w-full pb-20">
      <div className="bg-primary/5 absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-[100px]" />

      <nav className="bg-background/80 sticky top-0 z-50 w-full border-b border-white/5 px-6 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground font-bold"
          >
            <Link to={ROUTES.POSTS}>
              <ArrowLeft className="mr-2 size-4" />
              Back to Feed
            </Link>
          </Button>
        </div>
      </nav>

      <main className="relative z-10 mx-auto max-w-3xl px-6 pt-12 md:pt-20">
        <article>
          <header className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                Technology
              </span>
              <span className="text-muted-foreground text-xs font-medium italic">8 min read</span>
            </div>

            <h1 className="text-foreground font-serif text-4xl leading-[1.1] font-black tracking-tight md:text-6xl">
              The Future of Content Management: A Pulse Perspective
            </h1>

            <div className="flex items-center justify-between py-6">
              <div className="flex items-center gap-4">
                <div className="bg-muted flex size-12 items-center justify-center rounded-2xl border border-white/10">
                  <User className="text-muted-foreground size-6" />
                </div>
                <div>
                  <p className="text-foreground font-bold">Alisher Rakhmanov</p>
                  <p className="text-muted-foreground text-xs tracking-wider uppercase">
                    Lead Developer • <time dateTime="2024-03-24">Mar 24, 2024</time>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center">
                  <span className="text-lg font-black">1.2k</span>
                  <span className="text-muted-foreground text-[10px] font-bold tracking-tighter uppercase">
                    Likes
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-black">84</span>
                  <span className="text-muted-foreground text-[10px] font-bold tracking-tighter uppercase">
                    Comments
                  </span>
                </div>
              </div>
            </div>
          </header>

          <figure className="my-12 overflow-hidden rounded-[2rem] border border-white/5 shadow-2xl">
            <div className="from-primary/20 via-background to-secondary/20 flex aspect-video w-full items-center justify-center bg-linear-to-br">
              <div className="text-muted-foreground/20 font-serif text-4xl font-black italic">
                HERO IMAGE
              </div>
            </div>
          </figure>

          <section className="prose prose-invert max-w-none space-y-8">
            <p className="text-foreground/90 first-letter:text-primary text-xl leading-relaxed first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8] first-letter:font-black">
              Artificial intelligence is not just a trend; it&apos;s a fundamental shift in how we
              approach content architecture. As we look towards 2026, the boundaries between
              creation and distribution are blurring, giving rise to systems that are not just
              reactive, but proactive in their delivery.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              In this deep dive, we explore the core pillars of the Pulse ecosystem: performance,
              scalability, and user-centric design. We believe that the best content management
              systems are those that vanish into the background, allowing creativity to take the
              front seat.
            </p>
          </section>

          <footer className="mt-20 space-y-8">
            <Separator className="bg-white/5" />
            <div className="flex items-center justify-center gap-10 py-4">
              <button
                className="group flex flex-col items-center gap-2 transition-all"
                aria-label="Like post"
              >
                <div className="bg-primary/10 group-hover:bg-primary/20 border-primary/20 flex size-14 items-center justify-center rounded-2xl border transition-colors">
                  <ThumbsUp className="text-primary size-6" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase">Like</span>
              </button>
              <button
                className="group flex flex-col items-center gap-2 transition-all"
                aria-label="Write a comment"
              >
                <div className="bg-secondary/10 group-hover:bg-secondary/20 border-secondary/20 flex size-14 items-center justify-center rounded-2xl border transition-colors">
                  <MessageSquare className="text-secondary size-6" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase">Comment</span>
              </button>
              <button
                className="group flex flex-col items-center gap-2 transition-all"
                aria-label="Bookmark post"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors group-hover:bg-white/10">
                  <Bookmark className="text-foreground size-6" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase">Save</span>
              </button>
              <button
                className="group flex flex-col items-center gap-2 transition-all"
                aria-label="Share post"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors group-hover:bg-white/10">
                  <Share2 className="text-foreground size-6" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase">Share</span>
              </button>
            </div>
            <Separator className="bg-white/5" />
          </footer>
        </article>

        <section className="mt-16 space-y-12" aria-labelledby="discussion-title">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 flex size-10 items-center justify-center rounded-xl">
                <MessageSquare className="text-primary size-5" />
              </div>
              <h3 id="discussion-title" className="text-2xl font-bold tracking-tight">
                Discussion (84)
              </h3>
            </div>
          </div>

          <CommentList comments={MOCK_COMMENTS} />

          <div className="flex justify-center pt-8">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground font-bold"
            >
              View all 84 comments
            </Button>
          </div>
        </section>
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
