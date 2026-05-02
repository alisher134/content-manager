import { Link } from 'react-router-dom';

import { ROUTES } from '@app/Routes';

import { RegisterForm } from '@features/auth';
import { Card, CardContent, CardDescription, CardTitle } from '@shared/components';

export const Register = () => {
  return (
    <main className="bg-background relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6">
      <div className="bg-secondary/10 absolute -top-24 -right-24 h-96 w-96 rounded-full blur-[100px]" />
      <div className="bg-primary/10 absolute -bottom-24 -left-24 h-96 w-96 rounded-full blur-[100px]" />

      <Card className="bg-card/50 relative z-10 w-full max-w-lg border-white/10 shadow-2xl backdrop-blur-xl">
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
            <CardTitle className="text-2xl font-bold tracking-tight">Create your account</CardTitle>
            <CardDescription className="text-muted-foreground text-sm">
              Join the future of content management today
            </CardDescription>
          </div>
        </header>

        <CardContent className="pb-12">
          <RegisterForm onLoginClick={ROUTES.LOGIN} />
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
