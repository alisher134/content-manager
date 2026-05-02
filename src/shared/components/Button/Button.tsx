import type * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '@shared/utils';

import { buttonVariants } from './Button.variants';

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export const Button = ({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: ButtonProps): React.ReactNode => {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};
