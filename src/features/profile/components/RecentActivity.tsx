import { Edit3 } from 'lucide-react';

import type { ActivityItem } from '../types/profileTypes';

interface RecentActivityProps {
  readonly activities: ActivityItem[];
}

export const RecentActivity = ({ activities }: RecentActivityProps) => (
  <section aria-labelledby="activity-title" className="space-y-6">
    <h3 id="activity-title" className="text-xl font-bold tracking-tight">
      Recent Activity
    </h3>
    <div className="space-y-4">
      {activities.map((activity) => (
        <article
          key={activity.id}
          className="bg-card/30 hover:bg-card/50 flex items-center gap-4 rounded-2xl border border-white/5 p-4 backdrop-blur-sm transition-colors"
        >
          <div className="bg-primary/10 flex size-10 items-center justify-center rounded-xl">
            <Edit3 className="text-primary size-5" />
          </div>
          <div className="flex-1 space-y-1">
            <h4 className="text-sm font-semibold">{activity.title}</h4>
            <p className="text-muted-foreground text-xs">
              <time dateTime={activity.timestamp}>{activity.timestamp}</time>
            </p>
          </div>
        </article>
      ))}
    </div>
  </section>
);
