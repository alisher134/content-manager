import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, Layout, Rocket, Save, Type } from 'lucide-react';

import { ROUTES } from '@app/Routes';

import { EditorSidebar } from '@features/posts';
import { Button, Separator } from '@shared/components';

export const PostEditor = () => {
  return (
    <div className="bg-background relative min-h-screen w-full overflow-hidden pb-20">
      <div className="bg-primary/5 absolute top-0 left-0 h-96 w-96 rounded-full blur-[100px]" />

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <nav
          className="bg-background/80 sticky top-0 z-50 w-full border-b border-white/5 px-6 py-4 backdrop-blur-md"
          aria-label="Editor controls"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-muted-foreground"
                aria-label="Back to posts"
              >
                <Link to={ROUTES.POSTS}>
                  <ArrowLeft className="size-5" />
                </Link>
              </Button>
              <div className="h-6 w-px bg-white/10" aria-hidden="true" />
              <span className="text-muted-foreground text-sm font-medium">Draft in Technology</span>
            </div>

            <div className="flex items-center gap-3">
              <Button type="button" variant="ghost" size="sm" className="font-semibold">
                <Eye className="mr-2 size-4" />
                Preview
              </Button>
              <Button
                type="submit"
                variant="outline"
                size="sm"
                className="border-white/10 font-semibold"
              >
                <Save className="mr-2 size-4" />
                Save Draft
              </Button>
              <Button
                type="submit"
                size="sm"
                className="bg-primary shadow-primary/20 font-bold shadow-lg"
              >
                <Rocket className="mr-2 size-4" />
                Publish Post
              </Button>
            </div>
          </div>
        </nav>

        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
          <main className="space-y-10 lg:col-span-8">
            <div className="space-y-4">
              <textarea
                className="placeholder:text-muted-foreground/30 w-full resize-none border-none bg-transparent font-serif text-5xl font-black tracking-tight outline-none md:text-6xl"
                placeholder="Title of your story..."
                aria-label="Post title"
                rows={2}
                required
              />
              <div className="text-primary/60 flex items-center gap-4 text-xs font-bold tracking-widest uppercase">
                <div className="flex items-center gap-1">
                  <Type className="size-3" aria-hidden="true" />
                  <span>Article</span>
                </div>
                <div className="flex items-center gap-1">
                  <Layout className="size-3" aria-hidden="true" />
                  <span>Editorial Flow</span>
                </div>
              </div>
            </div>

            <Separator className="bg-white/5" />

            <textarea
              className="placeholder:text-muted-foreground/20 min-h-[500px] w-full resize-none border-none bg-transparent font-sans text-xl leading-relaxed outline-none"
              placeholder="Tell your story..."
              aria-label="Post content"
              required
            />
          </main>

          <EditorSidebar />
        </div>
      </form>

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
