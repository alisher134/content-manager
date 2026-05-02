import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';

import { Button, Input, Label } from '@/shared/components';

interface LoginFormProps {
  readonly onRegisterClick: string;
}

export const LoginForm = ({ onRegisterClick }: LoginFormProps) => (
  <form
    className="space-y-6"
    onSubmit={(e) => {
      e.preventDefault();
    }}
  >
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-xs font-semibold tracking-wider uppercase">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="name@example.com"
          autoComplete="email"
          required
          className="bg-background/50 focus:ring-primary/20 h-11 transition-all focus:ring-2"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="text-xs font-semibold tracking-wider uppercase">
            Password
          </Label>
          <Link to="#" className="text-primary text-xs font-medium hover:underline">
            Forgot password?
          </Link>
        </div>
        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          required
          className="bg-background/50 focus:ring-primary/20 h-11 transition-all focus:ring-2"
        />
      </div>
    </div>
    <Button
      type="submit"
      className="shadow-primary/20 h-11 w-full text-base font-bold shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99]"
    >
      <LogIn className="mr-2 size-4" />
      Sign In
    </Button>
    <div className="mt-6">
      <p className="text-muted-foreground text-center text-sm">
        Don&apos;t have an account?{' '}
        <Link to={onRegisterClick} className="text-primary font-bold hover:underline">
          Register
        </Link>
      </p>
    </div>
  </form>
);
