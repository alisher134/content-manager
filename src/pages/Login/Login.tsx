import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';

import { ROUTES } from '@app/Routes';

import { Button } from '@components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/ui/Card';
import { Input } from '@components/ui/Input';
import { Label } from '@components/ui/Label';

export const Login = () => {
  return (
    <div className="bg-background relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6">
      <div className="bg-primary/10 absolute -top-24 -left-24 h-96 w-96 rounded-full blur-[100px]" />
      <div className="bg-secondary/10 absolute -right-24 -bottom-24 h-96 w-96 rounded-full blur-[100px]" />

      <Card className="bg-card/50 relative z-10 w-full max-w-md border-white/10 shadow-2xl backdrop-blur-xl">
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
            <CardTitle className="text-2xl font-bold tracking-tight">Welcome back</CardTitle>
            <CardDescription className="text-muted-foreground text-sm">
              Enter your email to sign in to your account
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 pb-12">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-semibold tracking-wider uppercase">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="bg-background/50 focus:ring-primary/20 h-11 transition-all focus:ring-2"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="password"
                  className="text-xs font-semibold tracking-wider uppercase"
                >
                  Password
                </Label>
                <Link to="#" className="text-primary text-xs font-medium hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                className="bg-background/50 focus:ring-primary/20 h-11 transition-all focus:ring-2"
              />
            </div>
          </div>
          <Button className="shadow-primary/20 h-11 w-full text-base font-bold shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99]">
            <LogIn className="mr-2 size-4" />
            Sign In
          </Button>
          <p className="text-muted-foreground text-sm">
            Don&apos;t have an account?{' '}
            <Link to={ROUTES.REGISTER} className="text-primary font-bold hover:underline">
              Register
            </Link>
          </p>
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
