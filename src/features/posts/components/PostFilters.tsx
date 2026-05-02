import { Check, Search } from 'lucide-react';

import type { PostAuthor, PostStatus } from '../types/postTypes';

import { Button, Separator } from '@/shared/components';

interface PostFiltersProps {
  readonly selectedStatus: PostStatus[];
  readonly onStatusChange: (status: PostStatus) => void;
  readonly authors: PostAuthor[];
  readonly onAuthorSearch: (query: string) => void;
  readonly onReset: () => void;
}

const STATUSES: PostStatus[] = ['Published', 'Draft', 'Scheduled'];

export const PostFilters = ({
  selectedStatus,
  onStatusChange,
  authors,
  onAuthorSearch,
  onReset,
}: PostFiltersProps) => (
  <aside className="scrollbar-hide sticky top-3 h-fit max-h-screen w-full self-start overflow-y-auto lg:w-64">
    <div className="space-y-10 pb-10">
      <div className="space-y-6">
        <section className="space-y-4">
          <h4 className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">Status</h4>
          <div className="space-y-3">
            {STATUSES.map((status) => (
              <label key={status} className="group flex cursor-pointer items-center gap-3">
                <div
                  role="checkbox"
                  aria-checked={selectedStatus.includes(status)}
                  tabIndex={0}
                  className={`flex size-5 items-center justify-center rounded-md border transition-all ${
                    selectedStatus.includes(status)
                      ? 'border-primary bg-primary shadow-[0_0_10px_rgba(var(--primary),0.3)]'
                      : 'bg-card/50 group-hover:border-primary/50 border-white/20'
                  }`}
                  onClick={() => {
                    onStatusChange(status);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onStatusChange(status);
                    }
                  }}
                >
                  {selectedStatus.includes(status) && (
                    <Check className="size-3 text-white" strokeWidth={4} />
                  )}
                </div>
                <span
                  className={`text-sm font-medium transition-colors ${
                    selectedStatus.includes(status)
                      ? 'text-foreground'
                      : 'text-muted-foreground group-hover:text-foreground'
                  }`}
                >
                  {status}
                </span>
              </label>
            ))}
          </div>
        </section>

        <Separator className="bg-white/5" />

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
              Authors
            </h4>
            <span className="text-muted-foreground/30 text-[10px] font-bold">
              {authors.length} Total
            </span>
          </div>
          <div className="relative">
            <Search className="text-muted-foreground absolute top-1/2 left-2.5 size-3 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Find author..."
              onChange={(e) => {
                onAuthorSearch(e.target.value);
              }}
              className="bg-background/40 focus:border-primary/30 focus:ring-primary/20 h-8 w-full rounded-lg border border-white/10 pl-8 text-[10px] transition-all outline-none focus:ring-1"
            />
          </div>
          <div className="space-y-3 pr-1">
            {authors.slice(0, 5).map((author) => (
              <div
                key={author.name}
                className="group flex cursor-pointer items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-muted size-7 rounded-full border border-white/10" />
                  <span className="text-muted-foreground group-hover:text-foreground text-xs font-medium transition-colors">
                    {author.name}
                  </span>
                </div>
                <span className="text-muted-foreground/20 text-[10px] font-bold">
                  {author.posts}
                </span>
              </div>
            ))}
          </div>
          <Button
            variant="ghost"
            className="text-primary hover:bg-primary/5 h-8 w-full justify-start px-2 text-[10px] font-bold"
          >
            View more
          </Button>
        </section>

        <Separator className="bg-white/5" />

        <Button
          variant="ghost"
          onClick={onReset}
          className="text-muted-foreground hover:text-foreground h-9 w-full text-xs font-bold"
        >
          Reset All Filters
        </Button>
      </div>
    </div>
  </aside>
);
