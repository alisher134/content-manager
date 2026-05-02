import { Link } from 'react-router-dom';
import { Save } from 'lucide-react';

import { ROUTES } from '@app/Routes';

import { PreferencesSettings, SecuritySettings } from '@features/settings';
import { Button } from '@shared/components';

export const ProfileSettings = () => {
  return (
    <main className="bg-background relative min-h-screen w-full px-6 py-12">
      <div className="bg-primary/5 absolute top-0 -left-24 h-96 w-96 rounded-full blur-[100px]" />
      <div className="bg-secondary/5 absolute -right-24 bottom-0 h-96 w-96 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl space-y-8">
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            <p className="text-muted-foreground">
              Manage your account security and application preferences.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild className="font-bold">
              <Link to={ROUTES.PROFILE}>Cancel</Link>
            </Button>
            <Button className="shadow-primary/20 font-bold shadow-lg">
              <Save className="mr-2 size-4" />
              Save Changes
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <section className="space-y-6 lg:col-span-7" aria-labelledby="security-title">
            <SecuritySettings />
          </section>

          <section className="space-y-6 lg:col-span-5" aria-labelledby="preferences-title">
            <PreferencesSettings />
          </section>
        </div>
      </div>

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
