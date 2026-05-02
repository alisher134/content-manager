import { Check, ChevronRight, Globe, Languages, Monitor, Moon, Sun } from 'lucide-react';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Label,
} from '@/shared/components';

export const PreferencesSettings = () => (
  <Card className="bg-card/50 border-white/10 backdrop-blur-xl">
    <CardHeader>
      <div className="flex items-center gap-2">
        <div className="bg-primary/10 flex size-8 items-center justify-center rounded-lg">
          <Globe className="text-primary size-4" />
        </div>
        <CardTitle id="preferences-title" className="text-xl font-bold">
          Preferences
        </CardTitle>
      </div>
      <CardDescription>Personalize your experience and interface.</CardDescription>
    </CardHeader>
    <CardContent className="space-y-8">
      <div className="space-y-4">
        <Label className="text-xs font-bold tracking-wider uppercase opacity-70">
          Appearance Mode
        </Label>
        <div
          className="grid grid-cols-3 gap-3"
          role="radiogroup"
          aria-label="Choose appearance mode"
        >
          <Button
            variant="outline"
            className="group flex h-24 flex-col gap-2 border-white/10 bg-white/5 hover:bg-white/10"
            aria-checked="false"
            role="radio"
          >
            <Sun className="size-5 transition-transform group-hover:scale-110" />
            <span className="text-xs font-bold">Light</span>
          </Button>
          <Button
            variant="outline"
            className="group border-primary/20 bg-primary/10 ring-primary/50 flex h-24 flex-col gap-2 ring-2"
            aria-checked="true"
            role="radio"
          >
            <Moon className="text-primary size-5 transition-transform group-hover:scale-110" />
            <span className="text-primary text-xs font-bold">Dark</span>
            <div className="bg-primary absolute top-2 right-2 flex size-4 items-center justify-center rounded-full">
              <Check className="size-2 text-white" />
            </div>
          </Button>
          <Button
            variant="outline"
            className="group flex h-24 flex-col gap-2 border-white/10 bg-white/5 hover:bg-white/10"
            aria-checked="false"
            role="radio"
          >
            <Monitor className="size-5 transition-transform group-hover:scale-110" />
            <span className="text-xs font-bold">System</span>
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-xs font-bold tracking-wider uppercase opacity-70">Language</Label>
          <Languages className="text-muted-foreground size-4" />
        </div>
        <nav className="space-y-2" aria-label="Language selection">
          <Button
            variant="outline"
            className="hover:border-primary/50 bg-background/50 h-12 w-full justify-between border-white/10 px-4 font-medium transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg" aria-hidden="true">
                🇷🇺
              </span>
              <span>Russian (Русский)</span>
            </div>
            <ChevronRight className="text-muted-foreground size-4" />
          </Button>
          <Button
            variant="outline"
            className="hover:border-primary/50 bg-background/50 h-12 w-full justify-between border-white/10 px-4 font-medium transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg" aria-hidden="true">
                🇺🇸
              </span>
              <span>English (United States)</span>
            </div>
            <ChevronRight className="text-muted-foreground size-4" />
          </Button>
        </nav>
      </div>
    </CardContent>
  </Card>
);
