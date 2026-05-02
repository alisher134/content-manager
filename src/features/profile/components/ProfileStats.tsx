import type { ProfileStat } from '../types/profileTypes';

import { Card, CardContent } from '@/shared/components';

interface ProfileStatsProps {
  readonly stats: ProfileStat[];
}

export const ProfileStats = ({ stats }: ProfileStatsProps) => (
  <section aria-label="User statistics" className="grid grid-cols-2 gap-4 md:grid-cols-4">
    {stats.map((stat, i) => (
      <Card key={i} className="bg-card/50 border-white/10 backdrop-blur-xl">
        <CardContent className="pt-6">
          <div className="space-y-1 text-center">
            <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
            <div className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
              {stat.label}
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </section>
);
