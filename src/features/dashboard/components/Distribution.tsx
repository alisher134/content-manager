import { Calendar, Layout } from 'lucide-react';

import { Button, Card, CardContent, CardHeader, CardTitle, Separator } from '@/shared/components';

export const Distribution = () => {
  return (
    <Card className="bg-card/50 h-full border-white/10 backdrop-blur-xl">
      <CardHeader>
        <CardTitle id="distribution-title" className="text-sm font-bold tracking-wider uppercase">
          Distribution
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {[
          { label: 'Medium', value: 75 },
          { label: 'Twitter', value: 90 },
          { label: 'Substack', value: 45 },
        ].map((p, i) => (
          <div key={i} className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold">{p.label}</span>
              <span className="text-muted-foreground">{p.value}%</span>
            </div>
            <div
              className="h-1.5 w-full overflow-hidden rounded-full bg-white/5"
              role="progressbar"
              aria-valuenow={p.value}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="bg-primary h-full transition-all"
                style={{ width: `${String(p.value)}%` }}
              />
            </div>
          </div>
        ))}
        <Separator className="bg-white/5" />
        <nav className="space-y-4">
          <Button
            variant="outline"
            className="h-10 w-full border-white/10 bg-white/5 text-xs font-bold"
          >
            <Layout className="mr-2 size-4" />
            Customize Dashboard
          </Button>
          <Button
            variant="outline"
            className="h-10 w-full border-white/10 bg-white/5 text-xs font-bold"
          >
            <Calendar className="mr-2 size-4" />
            Schedule Post
          </Button>
        </nav>
      </CardContent>
    </Card>
  );
};
