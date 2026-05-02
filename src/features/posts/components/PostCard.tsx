import { MessageSquare, ThumbsUp, TrendingUp } from 'lucide-react';

import type { Post } from '../types/postTypes';

import { CardContent, CardFooter, CardHeader } from '@/shared/components';

interface PostCardProps {
  readonly post: Post;
  readonly onClick?: (post: Post) => void;
}

export const PostCard = ({ post, onClick }: PostCardProps) => (
  <div
    onClick={() => onClick?.(post)}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        onClick?.(post);
      }
    }}
    tabIndex={0}
    role="button"
    className="bg-card/30 group hover:border-primary/30 cursor-pointer overflow-hidden rounded-xl border border-white/10 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
  >
    <CardHeader className="border-none p-0">
      <div className="bg-muted relative aspect-video w-full overflow-hidden">
        <div className="from-primary/20 to-secondary/20 absolute inset-0 flex items-center justify-center bg-linear-to-br">
          <TrendingUp className="text-primary/40 size-12" />
        </div>
        <div className="absolute top-4 left-4 rounded-lg bg-black/40 px-3 py-1.5 text-[10px] font-bold tracking-widest text-white uppercase backdrop-blur-md">
          {post.category}
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-4 p-6">
      <div className="text-muted-foreground flex items-center gap-2 text-xs">
        <div className="bg-primary size-2 rounded-full" />
        <span>{post.readTime}</span>
        <span>•</span>
        <time dateTime={post.date}>{post.date}</time>
      </div>
      <h3 className="group-hover:text-primary line-clamp-2 text-2xl leading-tight font-bold tracking-tight transition-colors">
        {post.title}
      </h3>
      <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">{post.excerpt}</p>
    </CardContent>
    <CardFooter className="flex items-center justify-between border-t border-white/5 bg-black/5 px-6 py-5">
      <div className="flex items-center gap-3 text-xs font-medium">
        <div className="bg-muted size-8 rounded-full border border-white/10" />
        <span>{post.author.name}</span>
      </div>
      <div className="text-muted-foreground flex items-center gap-4">
        <div className="group/like flex cursor-pointer items-center gap-1.5">
          <ThumbsUp className="group-hover/like:text-primary size-4 transition-colors" />
          <span className="text-xs">{post.likes}</span>
        </div>
        <div className="group/comment flex cursor-pointer items-center gap-1.5">
          <MessageSquare className="group-hover/comment:text-primary size-4 transition-colors" />
          <span className="text-xs">{post.comments}</span>
        </div>
      </div>
    </CardFooter>
  </div>
);
