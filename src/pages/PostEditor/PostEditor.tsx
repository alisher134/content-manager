import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronDown,
  Eye,
  Globe,
  ImageIcon,
  Layout,
  Rocket,
  Save,
  Type,
} from 'lucide-react';

import { ROUTES } from '@app/Routes';

import { Button } from '@components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/Card';
import { Input } from '@components/ui/Input';
import { Label } from '@components/ui/Label';
import { Separator } from '@components/ui/Separator';

export const PostEditor = () => {
  return (
    <div className="bg-background relative min-h-screen w-full overflow-hidden pb-20">
      {/* Background Glows */}
      <div className="bg-primary/5 absolute top-0 left-0 h-96 w-96 rounded-full blur-[100px]" />

      {/* Editor Top Bar (Sticky) */}
      <div className="bg-background/80 sticky top-0 z-50 w-full border-b border-white/5 px-6 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="icon" className="text-muted-foreground">
              <Link to={ROUTES.POSTS}>
                <ArrowLeft className="size-5" />
              </Link>
            </Button>
            <div className="h-6 w-px bg-white/10" />
            <span className="text-muted-foreground text-sm font-medium">Draft in Technology</span>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="font-semibold">
              <Eye className="mr-2 size-4" />
              Preview
            </Button>
            <Button variant="outline" size="sm" className="border-white/10 font-semibold">
              <Save className="mr-2 size-4" />
              Save Draft
            </Button>
            <Button size="sm" className="bg-primary shadow-primary/20 font-bold shadow-lg">
              <Rocket className="mr-2 size-4" />
              Publish Post
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
        {/* Main Writing Area (lg:col-span-8) */}
        <div className="space-y-10 lg:col-span-8">
          <div className="space-y-4">
            <textarea
              className="placeholder:text-muted-foreground/30 w-full resize-none border-none bg-transparent font-serif text-5xl font-black tracking-tight outline-none md:text-6xl"
              placeholder="Title of your story..."
              rows={2}
            />
            <div className="text-primary/60 flex items-center gap-4 text-xs font-bold tracking-widest uppercase">
              <div className="flex items-center gap-1">
                <Type className="size-3" />
                <span>Article</span>
              </div>
              <div className="flex items-center gap-1">
                <Layout className="size-3" />
                <span>Editorial Flow</span>
              </div>
            </div>
          </div>

          <Separator className="bg-white/5" />

          <textarea
            className="placeholder:text-muted-foreground/20 min-h-[500px] w-full resize-none border-none bg-transparent font-sans text-xl leading-relaxed outline-none"
            placeholder="Tell your story..."
          />
        </div>

        {/* Sidebar Settings (lg:col-span-4) */}
        <aside className="space-y-6 lg:col-span-4">
          <Card className="bg-card/50 border-white/10 backdrop-blur-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-xs font-bold tracking-wider uppercase">
                Featured Image
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted group hover:border-primary/50 flex aspect-video w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/10 transition-colors">
                <ImageIcon className="text-muted-foreground size-8 transition-transform group-hover:scale-110" />
                <p className="text-muted-foreground mt-2 text-xs">Drop image or click to upload</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-white/10 backdrop-blur-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-xs font-bold tracking-wider uppercase">
                Post Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label className="text-[10px] font-bold tracking-widest uppercase opacity-50">
                  Category
                </Label>
                <div className="bg-background/50 border-input flex h-10 w-full items-center justify-between rounded-md border px-3 text-sm">
                  Technology
                  <ChevronDown className="size-4 opacity-50" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-bold tracking-widest uppercase opacity-50">
                  Visibility
                </Label>
                <div className="flex items-center gap-2 pt-1">
                  <div className="bg-primary/10 text-primary flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase">
                    <Globe className="size-3" />
                    Public
                  </div>
                  <div className="text-muted-foreground flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase transition-colors hover:bg-white/5">
                    Private
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-bold tracking-widest uppercase opacity-50">
                  Tags
                </Label>
                <Input
                  placeholder="Add tag..."
                  className="bg-background/50 h-10 border-white/5 text-xs"
                />
              </div>
            </CardContent>
          </Card>
        </aside>
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
