import { type ComponentProps, forwardRef, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

import { cn } from '@shared/utils';

import { Button } from '../Button';
import { Input } from '../Input';

const PasswordInput = forwardRef<HTMLInputElement, ComponentProps<typeof Input>>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="relative">
        <Input
          type={showPassword ? 'text' : 'password'}
          className={cn('pr-10', className)}
          ref={ref}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="text-muted-foreground absolute top-0 right-0 h-full w-10 hover:bg-transparent"
          onClick={togglePassword}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? (
            <EyeOff className="size-4" aria-hidden="true" />
          ) : (
            <Eye className="size-4" aria-hidden="true" />
          )}
        </Button>
      </div>
    );
  },
);

// eslint-disable-next-line sonarjs/no-hardcoded-passwords
PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
