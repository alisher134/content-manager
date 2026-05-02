import { ExternalLink } from 'lucide-react';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components';

export const AudienceChart = () => {
  return (
    <Card className="bg-card/50 h-full border-white/10 backdrop-blur-xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-1">
          <CardTitle id="growth-title" className="text-xl font-bold">
            Audience Growth
          </CardTitle>
          <CardDescription>Total views across all platforms</CardDescription>
        </div>
        <Button variant="ghost" size="icon" className="size-8" aria-label="View external analytics">
          <ExternalLink className="size-4" />
        </Button>
      </CardHeader>
      <CardContent className="flex h-[300px] flex-col justify-end gap-4">
        <div className="flex h-full items-end justify-between gap-2 pt-8">
          {[40, 60, 45, 90, 65, 80, 100, 70, 85, 95, 60, 75].map((h, i) => (
            <div
              key={i}
              className="bg-primary/20 hover:bg-primary/40 w-full rounded-t-sm transition-all"
              style={{ height: `${String(h)}%` }}
            />
          ))}
        </div>
        <div className="text-muted-foreground flex justify-between text-[10px] font-bold tracking-tighter uppercase">
          <span>Jan</span>
          <span>Apr</span>
          <span>Jul</span>
          <span>Oct</span>
          <span>Dec</span>
        </div>
      </CardContent>
    </Card>
  );
};
