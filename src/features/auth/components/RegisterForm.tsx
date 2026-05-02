import { Link } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

import { Button, Input, Label } from '@/shared/components';

interface RegisterFormProps {
  readonly onLoginClick: string;
}

export const RegisterForm = ({ onLoginClick }: RegisterFormProps) => (
  <form
    className="space-y-6"
    onSubmit={(e) => {
      e.preventDefault();
    }}
  >
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="space-y-2">
        <Label htmlFor="firstName" className="text-xs font-semibold tracking-wider uppercase">
          First Name
        </Label>
        <Input
          id="firstName"
          placeholder="John"
          required
          autoComplete="given-name"
          className="bg-background/50 focus:ring-primary/20 h-11 transition-all focus:ring-2"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="lastName" className="text-xs font-semibold tracking-wider uppercase">
          Last Name
        </Label>
        <Input
          id="lastName"
          placeholder="Doe"
          required
          autoComplete="family-name"
          className="bg-background/50 focus:ring-primary/20 h-11 transition-all focus:ring-2"
        />
      </div>
    </div>

    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-xs font-semibold tracking-wider uppercase">
          Work Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john@company.com"
          required
          autoComplete="email"
          className="bg-background/50 focus:ring-primary/20 h-11 transition-all focus:ring-2"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-xs font-semibold tracking-wider uppercase">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          required
          autoComplete="new-password"
          className="bg-background/50 focus:ring-primary/20 h-11 transition-all focus:ring-2"
        />
      </div>
    </div>

    <Button
      type="submit"
      className="shadow-primary/20 h-11 w-full text-base font-bold shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99]"
    >
      <UserPlus className="mr-2 size-4" />
      Create Account
    </Button>

    <div className="mt-8 text-center">
      <p className="text-muted-foreground text-sm">
        Already have an account?{' '}
        <Link to={onLoginClick} className="text-primary font-bold hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  </form>
);
