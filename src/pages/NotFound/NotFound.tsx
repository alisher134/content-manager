import { Link, useNavigate } from 'react-router-dom';
import { Home, MoveLeft } from 'lucide-react';

import { ROUTES } from '@app/Routes';

import { Button } from '@components/ui/Button';

export const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    void navigate(-1);
  };

  return (
    <div className="bg-background relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6">
      <div className="bg-primary/10 absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />
      <div className="bg-secondary/5 absolute -top-24 -right-24 h-96 w-96 rounded-full blur-[100px]" />

      <div className="relative z-10 text-center">
        <div className="relative mb-8">
          <h1 className="text-muted/10 font-serif text-[15rem] leading-none font-black md:text-[20rem]">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            <h2 className="font-serif text-5xl font-black tracking-tight italic md:text-7xl">
              Lost in Space
            </h2>
          </div>
        </div>

        <div className="max-w-md space-y-8">
          <p className="text-muted-foreground text-lg leading-relaxed">
            The page you are looking for has been moved or doesn&apos;t exist. <br />
            Let&apos;s get you back to safety.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="shadow-primary/20 h-12 px-8 text-base font-bold shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Link to={ROUTES.DASHBOARD}>
                <Home className="mr-2 size-5" />
                Go Dashboard
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-card/50 h-12 border-white/10 px-8 text-base font-bold backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-white/5 active:scale-[0.98]"
              onClick={handleGoBack}
            >
              <MoveLeft className="mr-2 size-5" />
              Go Back
            </Button>
          </div>
        </div>

        <div className="mt-24 flex items-center gap-3 opacity-30">
          <span className="text-primary font-serif text-2xl font-black tracking-tighter italic">
            PULSE
          </span>
          <div className="bg-muted h-5 w-px" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Security Core</span>
        </div>
      </div>

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
