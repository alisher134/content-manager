import { ChevronDown, Globe, ImageIcon } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle, Input, Label } from '@/shared/components';

export const EditorSidebar = () => (
  <aside className="space-y-6 lg:col-span-4" aria-label="Publishing settings">
    <Card className="bg-card/50 border-white/10 backdrop-blur-xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-xs font-bold tracking-wider uppercase">Featured Image</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className="bg-muted group hover:border-primary/50 flex aspect-video w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/10 transition-colors"
          role="button"
          aria-label="Upload featured image"
        >
          <ImageIcon
            className="text-muted-foreground size-8 transition-transform group-hover:scale-110"
            aria-hidden="true"
          />
          <p className="text-muted-foreground mt-2 text-xs">Drop image or click to upload</p>
        </div>
      </CardContent>
    </Card>

    <Card className="bg-card/50 border-white/10 backdrop-blur-xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-xs font-bold tracking-wider uppercase">Post Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label
            htmlFor="category-select"
            className="text-[10px] font-bold tracking-widest uppercase opacity-50"
          >
            Category
          </Label>
          <button
            id="category-select"
            type="button"
            className="bg-background/50 border-input hover:border-primary/50 flex h-10 w-full items-center justify-between rounded-md border px-3 text-left text-sm transition-colors"
          >
            Technology
            <ChevronDown className="size-4 opacity-50" aria-hidden="true" />
          </button>
        </div>

        <div className="space-y-2">
          <span className="block text-[10px] font-bold tracking-widest uppercase opacity-50">
            Visibility
          </span>
          <div
            className="flex items-center gap-2 pt-1"
            role="radiogroup"
            aria-label="Select post visibility"
          >
            <button
              type="button"
              role="radio"
              aria-checked="true"
              className="bg-primary/10 text-primary border-primary/20 flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold tracking-wider uppercase"
            >
              <Globe className="size-3" aria-hidden="true" />
              Public
            </button>
            <button
              type="button"
              role="radio"
              aria-checked="false"
              className="text-muted-foreground flex items-center gap-1.5 rounded-full border border-transparent px-3 py-1 text-[10px] font-bold tracking-wider uppercase transition-colors hover:bg-white/5"
            >
              Private
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="tags-input"
            className="text-[10px] font-bold tracking-widest uppercase opacity-50"
          >
            Tags
          </Label>
          <Input
            id="tags-input"
            placeholder="Add tag..."
            className="bg-background/50 h-10 border-white/5 text-xs"
          />
        </div>
      </CardContent>
    </Card>
  </aside>
);
