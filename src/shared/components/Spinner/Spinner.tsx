import type * as React from 'react';

import { cn } from '@shared/utils';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

export const Spinner = ({ className, size = 'md', ...props }: SpinnerProps) => {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-3',
    lg: 'h-12 w-12 border-4',
  };

  return (
    <div
      className={cn(
        'border-primary animate-spin rounded-full border-t-transparent',
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
};
