import { ArrowUpRight, type LucideIcon } from 'lucide-react';

import { Card, CardContent } from '@/shared/components';

interface StatCardProps {
  readonly title: string;
  readonly value: string;
  readonly growth: string;
  readonly Icon: LucideIcon;
  readonly variant: 'primary' | 'secondary' | 'accent' | 'foreground';
  readonly id: string;
}

const variants = {
  primary: {
    bg: 'bg-primary/10',
    text: 'text-primary',
    border: 'hover:border-primary/30',
  },
  secondary: {
    bg: 'bg-secondary/10',
    text: 'text-secondary',
    border: 'hover:border-secondary/30',
  },
  accent: {
    bg: 'bg-accent/10',
    text: 'text-accent',
    border: 'hover:border-accent/30',
  },
  foreground: {
    bg: 'bg-foreground/10',
    text: 'text-foreground',
    border: 'hover:border-foreground/30',
  },
} as const;

export const StatCard = ({ title, value, growth, Icon, variant, id }: StatCardProps) => {
  const styles = variants[variant];

  return (
    <Card
      className={`bg-card/50 group h-full border-white/10 backdrop-blur-xl transition-all ${styles.border}`}
    >
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div className={`${styles.bg} flex size-10 items-center justify-center rounded-xl`}>
            <Icon className={`${styles.text} size-5`} />
          </div>
          <span className={`${styles.text} flex items-center text-xs font-bold`}>
            {growth} <ArrowUpRight className="ml-1 size-3" />
          </span>
        </div>
        <div className="mt-4 space-y-1">
          <div id={id} className="text-3xl font-black">
            {value}
          </div>
          <div className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
            {title}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
