import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { ROUTES } from '@app/Routes';

import { ForgotPasswordForm } from '@features/auth/components/ForgotPasswordForm';
import { Card, CardContent, CardDescription, CardTitle } from '@shared/components';

export const ForgotPassword = () => {
  return (
    <main className="bg-background relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6">
      <div className="bg-primary/10 absolute -top-24 -left-24 h-96 w-96 rounded-full blur-[100px]" />
      <div className="bg-secondary/10 absolute -right-24 -bottom-24 h-96 w-96 rounded-full blur-[100px]" />

      <Card className="bg-card/50 relative z-10 w-full max-w-md border-white/10 shadow-2xl backdrop-blur-xl">
        <header className="px-6 pt-10 pb-8 text-center">
          <Link
            to={ROUTES.DASHBOARD}
            className="inline-block transition-transform hover:scale-105 active:scale-95"
          >
            <span className="text-primary font-serif text-5xl font-black tracking-tighter italic">
              PULSE
            </span>
          </Link>
          <div className="mt-4 space-y-1.5">
            <CardTitle className="text-2xl font-bold tracking-tight">Forgot password?</CardTitle>
            <CardDescription className="text-muted-foreground text-sm">
              Enter your email and we&apos;ll send you a link to reset your password.
            </CardDescription>
          </div>
        </header>

        <CardContent className="pb-8">
          <ForgotPasswordForm />

          <div className="mt-8 text-center">
            <Link
              to={ROUTES.LOGIN}
              className="text-muted-foreground hover:text-primary inline-flex items-center text-sm font-medium transition-colors"
            >
              <ArrowLeft className="mr-2 size-4" />
              Back to login
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
    </main>
  );
};
