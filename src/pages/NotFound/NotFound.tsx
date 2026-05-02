import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, Rocket } from 'lucide-react';

import { ROUTES } from '@app/Routes';

import { Button } from '@shared/components';

export const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    void navigate(-1);
  };

  return (
    <main className="bg-background relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6">
      <div className="bg-primary/20 absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />
      <div className="bg-secondary/10 absolute top-1/4 -right-24 h-96 w-96 rounded-full blur-[100px] transition-all duration-1000" />
      <div className="bg-accent/5 absolute bottom-1/4 -left-24 h-80 w-80 rounded-full blur-[80px]" />

      <div className="relative z-10 flex flex-col items-center">
        <header className="relative mb-4 flex flex-col items-center">
          <div className="relative">
            <h1 className="from-primary/20 to-secondary/20 bg-gradient-to-b bg-clip-text font-serif text-[12rem] leading-none font-black text-transparent md:text-[18rem]">
              404
            </h1>
            <div
              className="bg-primary absolute inset-0 opacity-10 blur-[60px]"
              aria-hidden="true"
            />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-card/30 flex items-center gap-3 rounded-2xl border border-white/10 px-6 py-3 shadow-2xl backdrop-blur-2xl">
              <Rocket className="text-primary size-6" aria-hidden="true" />
              <h2 className="text-2xl font-bold tracking-tight whitespace-nowrap md:text-3xl">
                Mission Failed
              </h2>
            </div>
          </div>
        </header>

        <div className="max-w-xl space-y-10 text-center">
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
              Oops! It looks like you&apos;ve drifted too far into the void. The signal for this
              coordinate has been lost.
            </p>
          </div>

          <nav
            className="flex flex-col items-center justify-center gap-5 sm:flex-row"
            aria-label="Recovery actions"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary shadow-primary/25 h-14 min-w-[200px] px-8 text-base font-bold shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              <Link to={ROUTES.DASHBOARD}>
                <Home className="mr-2 size-5" aria-hidden="true" />
                Return to Base
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleGoBack}
              className="bg-card/40 hover:bg-card/60 h-14 min-w-[200px] border-white/10 px-8 text-base font-bold backdrop-blur-xl transition-all hover:scale-105 active:scale-95"
            >
              <ArrowLeft className="mr-2 size-5" aria-hidden="true" />
              Go Back
            </Button>
          </nav>
        </div>

        <footer className="mt-20 flex flex-col items-center gap-4 opacity-40 transition-opacity hover:opacity-100">
          <div className="flex items-center gap-3">
            <span className="text-primary font-serif text-3xl font-black tracking-tighter italic">
              PULSE
            </span>
          </div>
        </footer>
      </div>

      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage: `
            radial-gradient(var(--primary) 1.5px, transparent 1.5px),
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 80px 80px, 80px 80px',
          backgroundPosition: 'center center',
        }}
        aria-hidden="true"
      />

      <div
        className="bg-primary/5 absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full blur-[100px]"
        aria-hidden="true"
      />
    </main>
  );
};
