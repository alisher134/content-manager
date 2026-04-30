import { Link } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

import { ROUTES } from '@app/Routes';

import { Button } from '@components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/ui/Card';
import { Input } from '@components/ui/Input';
import { Label } from '@components/ui/Label';

export const Register = () => {
  return (
    <div className="bg-background relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6">
      <div className="bg-secondary/10 absolute -top-24 -right-24 h-96 w-96 rounded-full blur-[100px]" />
      <div className="bg-primary/10 absolute -bottom-24 -left-24 h-96 w-96 rounded-full blur-[100px]" />

      <Card className="bg-card/50 relative z-10 w-full max-w-lg border-white/10 shadow-2xl backdrop-blur-xl">
        <CardHeader className="space-y-4 pt-10 pb-8 text-center">
          <Link
            to="/"
            className="inline-block transition-transform hover:scale-105 active:scale-95"
          >
            <span className="text-primary font-serif text-5xl font-black tracking-tighter italic">
              PULSE
            </span>
          </Link>
          <div className="space-y-1.5">
            <CardTitle className="text-2xl font-bold tracking-tight">Create your account</CardTitle>
            <CardDescription className="text-muted-foreground text-sm">
              Join the future of content management today
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 pb-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-xs font-semibold tracking-wider uppercase">
                First Name
              </Label>
              <Input
                id="firstName"
                placeholder="John"
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
                className="bg-background/50 focus:ring-primary/20 h-11 transition-all focus:ring-2"
              />
            </div>
          </div>

          <Button className="shadow-primary/20 h-11 w-full text-base font-bold shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99]">
            <UserPlus className="mr-2 size-4" />
            Create Account
          </Button>

          <div className="text-muted-foreground text-center text-sm">
            Already have an account?{' '}
            <Link to={ROUTES.LOGIN} className="text-primary font-bold hover:underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>

      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(var(--border) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />
    </div>
  );
};
