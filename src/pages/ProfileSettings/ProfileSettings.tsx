import { Link } from 'react-router-dom';
import { Camera, Mail, Save, User } from 'lucide-react';

import { ROUTES } from '@app/Routes';

import { Button } from '@components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/ui/Card';
import { Input } from '@components/ui/Input';
import { Label } from '@components/ui/Label';

export const ProfileSettings = () => {
  return (
    <div className="bg-background relative min-h-screen w-full overflow-hidden px-6 py-12">
      <div className="bg-primary/5 absolute top-0 -left-24 h-96 w-96 rounded-full blur-[100px]" />
      <div className="bg-secondary/5 absolute -right-24 bottom-0 h-96 w-96 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl space-y-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>
            <p className="text-muted-foreground">Manage your profile and account preferences.</p>
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
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            <Card className="bg-card/50 border-white/10 backdrop-blur-xl">
              <CardContent className="pt-8">
                <div className="flex flex-col items-center text-center">
                  <div className="group relative mb-4">
                    <div className="bg-muted group-hover:border-primary/50 flex size-24 items-center justify-center rounded-2xl border-2 border-dashed border-white/10 transition-colors">
                      <User className="text-muted-foreground size-10" />
                    </div>
                    <button className="bg-primary absolute -right-2 -bottom-2 flex size-8 items-center justify-center rounded-lg shadow-lg transition-transform hover:scale-110 active:scale-90">
                      <Camera className="size-4 text-white" />
                    </button>
                  </div>
                  <h3 className="text-lg font-bold">John Doe</h3>
                  <p className="text-muted-foreground text-sm tracking-wider uppercase">
                    Senior Editor
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-white/10 backdrop-blur-xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold tracking-wider uppercase">
                  Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p className="text-muted-foreground">Password last changed 3 months ago.</p>
                <Button variant="outline" size="sm" className="w-full border-white/10">
                  Change Password
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-card/50 border-white/10 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Personal Information</CardTitle>
                <CardDescription>Update your personal details and public profile.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="text-xs font-bold tracking-wider uppercase"
                    >
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      defaultValue="John"
                      className="bg-background/50 focus:ring-primary/20 h-11 transition-all focus:ring-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="text-xs font-bold tracking-wider uppercase"
                    >
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      defaultValue="Doe"
                      className="bg-background/50 focus:ring-primary/20 h-11 transition-all focus:ring-2"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-bold tracking-wider uppercase">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="text-muted-foreground absolute top-1/2 left-3.5 size-4 -translate-y-1/2" />
                    <Input
                      id="email"
                      defaultValue="john@pulse.io"
                      className="bg-background/50 focus:ring-primary/20 h-11 pl-10 transition-all focus:ring-2"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-xs font-bold tracking-wider uppercase">
                    Biography
                  </Label>
                  <textarea
                    id="bio"
                    className="bg-background/50 border-input focus:ring-primary/20 flex min-h-[120px] w-full rounded-md border px-3 py-2 text-sm transition-all focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us a little bit about yourself..."
                    defaultValue="Passionate content manager and senior editor at Pulse."
                  />
                </div>
              </CardContent>
            </Card>

            <div className="mt-8">
              <Card className="border-destructive/20 bg-destructive/5 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-destructive text-lg font-bold">Danger Zone</CardTitle>
                  <CardDescription>Irreversible actions for your account.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="destructive"
                    className="shadow-destructive/10 h-10 px-6 font-bold shadow-lg"
                  >
                    Delete Account
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
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
