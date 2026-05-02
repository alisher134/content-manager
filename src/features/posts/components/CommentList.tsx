import { MessageSquare, ThumbsUp, User } from 'lucide-react';

import { Button } from '@/shared/components';

interface Comment {
  readonly id: number;
  readonly name: string;
  readonly time: string;
  readonly text: string;
  readonly likes: number;
  readonly isLiked: boolean;
  readonly replies?: readonly {
    readonly name: string;
    readonly time: string;
    readonly text: string;
    readonly likes: number;
  }[];
  readonly showReplyInput?: boolean;
}

interface CommentListProps {
  readonly comments: readonly Comment[];
}

export const CommentList = ({ comments }: CommentListProps) => (
  <div className="space-y-8">
    {comments.map((comment, i) => (
      <article key={i} className="space-y-4">
        <div className="group relative flex gap-4 rounded-3xl border border-transparent p-4 transition-all hover:border-white/10 hover:bg-white/5">
          <div className="bg-muted flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 shadow-lg">
            <User className="text-muted-foreground size-5" />
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-bold">{comment.name}</span>
                <span className="bg-muted-foreground/10 size-1 rounded-full" />
                <span className="text-muted-foreground text-xs">{comment.time}</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">{comment.text}</p>
            <div className="flex items-center gap-6 pt-1">
              <button
                className={`flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase transition-colors ${
                  comment.isLiked ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
                aria-label={`Like comment by ${comment.name}`}
              >
                <ThumbsUp className={`size-3.5 ${comment.isLiked ? 'fill-primary/20' : ''}`} />
                {comment.likes}
              </button>
              <button className="text-muted-foreground hover:text-secondary flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase transition-colors">
                <MessageSquare className="size-3.5" />
                Reply
              </button>
            </div>
          </div>
        </div>

        {comment.showReplyInput === true && (
          <div className="ml-14 flex gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur-md">
            <div className="bg-muted flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10">
              <User className="text-muted-foreground size-4" />
            </div>
            <div className="flex-1 space-y-3">
              <textarea
                className="bg-background/50 border-input focus:ring-primary/20 min-h-[80px] w-full rounded-xl border px-3 py-2 text-xs transition-all focus:ring-2"
                placeholder="Write your reply..."
                aria-label="Your reply"
              />
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="sm" className="h-8 px-4 text-xs font-bold">
                  Cancel
                </Button>
                <Button size="sm" className="h-8 px-4 text-xs font-bold">
                  Reply
                </Button>
              </div>
            </div>
          </div>
        )}

        {comment.replies?.map((reply, j) => (
          <article
            key={j}
            className="group relative ml-14 flex gap-4 rounded-3xl border border-transparent p-4 transition-all hover:border-white/10 hover:bg-white/5"
          >
            <div className="bg-muted flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 shadow-md">
              <User className="text-muted-foreground size-4" />
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold">{reply.name}</span>
                <span className="bg-muted-foreground/10 size-1 rounded-full" />
                <span className="text-muted-foreground text-[10px]">{reply.time}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{reply.text}</p>
              <div className="flex items-center gap-4 pt-1">
                <button
                  className="text-muted-foreground hover:text-primary flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase transition-colors"
                  aria-label={`Like reply by ${reply.name}`}
                >
                  <ThumbsUp className="size-3" />
                  {reply.likes}
                </button>
                <button className="text-muted-foreground hover:text-secondary flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase transition-colors">
                  <MessageSquare className="size-3" />
                  Reply
                </button>
              </div>
            </div>
          </article>
        ))}
      </article>
    ))}
  </div>
);
