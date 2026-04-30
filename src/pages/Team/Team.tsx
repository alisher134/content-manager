import { Mail, MoreHorizontal, Plus, Search, Shield, User, UserPlus } from 'lucide-react';

import { Button } from '@components/ui/Button';
import { Card, CardContent, CardHeader } from '@components/ui/Card';
import { Input } from '@components/ui/Input';

export const Team = () => {
  return (
    <div className="bg-background relative min-h-screen w-full overflow-hidden px-6 py-10">
      {/* Background Glows */}
      <div className="bg-primary/5 absolute top-0 right-0 h-96 w-96 rounded-full blur-[100px]" />
      <div className="bg-secondary/5 absolute bottom-0 left-0 h-96 w-96 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-10">
        {/* Header Section */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold tracking-tight">Team Management</h1>
            <p className="text-muted-foreground text-lg">
              Collaborate and manage permissions for your organization.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="bg-card/50 h-11 border-white/10 px-5 backdrop-blur-sm"
            >
              <Shield className="text-primary mr-2 size-4" />
              Role Permissions
            </Button>
            <Button className="shadow-primary/20 h-11 px-6 font-bold shadow-lg">
              <UserPlus className="mr-2 size-5" />
              Invite Member
            </Button>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-96">
            <Search className="text-muted-foreground absolute top-1/2 left-3.5 size-4 -translate-y-1/2" />
            <Input
              placeholder="Search by name or email..."
              className="bg-card/50 focus:ring-primary/20 h-11 border-white/10 pl-10 backdrop-blur-sm focus:ring-2"
            />
          </div>
          <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto">
            {['All Members', 'Admins', 'Editors', 'Viewers'].map((filter, i) => (
              <button
                key={filter}
                className={`rounded-lg px-4 py-2 text-sm font-bold whitespace-nowrap transition-all ${
                  i === 0
                    ? 'bg-primary/10 text-primary border-primary/20 border'
                    : 'text-muted-foreground hover:bg-white/5'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid (UI-UX Pro Max) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { name: 'John Doe', role: 'Administrator', email: 'john@pulse.io', status: 'online' },
            {
              name: 'Sarah Wilson',
              role: 'Senior Editor',
              email: 'sarah@pulse.io',
              status: 'online',
            },
            { name: 'Mike Chen', role: 'Editor', email: 'mike@pulse.io', status: 'offline' },
            { name: 'Elena Rodriguez', role: 'Editor', email: 'elena@pulse.io', status: 'online' },
            { name: 'Alex Thompson', role: 'Viewer', email: 'alex@pulse.io', status: 'offline' },
            { name: 'Lisa Wang', role: 'Administrator', email: 'lisa@pulse.io', status: 'online' },
          ].map((member, i) => (
            <Card
              key={i}
              className="bg-card/50 group hover:border-primary/30 border-white/10 backdrop-blur-xl transition-all hover:-translate-y-1"
            >
              <CardHeader className="pt-6 pb-0">
                <div className="flex items-center justify-between">
                  <div className="relative">
                    <div className="bg-muted flex size-14 items-center justify-center rounded-2xl border border-white/10 shadow-lg transition-transform group-hover:scale-105">
                      <User className="text-muted-foreground size-7" />
                    </div>
                    {member.status === 'online' && (
                      <div className="absolute -top-1 -right-1">
                        <span className="relative flex size-4">
                          <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                          <span className="bg-primary border-card relative inline-flex size-4 rounded-full border-2" />
                        </span>
                      </div>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-8 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <MoreHorizontal className="size-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-6 pb-6">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold tracking-tight">{member.name}</h3>
                  <div className="bg-primary/10 text-primary w-fit rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase">
                    {member.role}
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="text-muted-foreground flex items-center gap-2">
                    <Mail className="size-3.5" />
                    {member.email}
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    variant="outline"
                    className="hover:bg-primary h-9 w-full border-white/5 bg-white/5 text-xs font-bold transition-all hover:text-white"
                  >
                    Manage Access
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Add New Member Card (Placeholders) */}
          <button className="group border-muted/20 hover:border-primary/50 hover:bg-primary/5 flex min-h-[240px] flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed bg-transparent transition-all">
            <div className="bg-muted/50 group-hover:bg-primary/20 flex size-12 items-center justify-center rounded-2xl transition-colors">
              <Plus className="text-muted-foreground group-hover:text-primary size-6" />
            </div>
            <div className="text-center">
              <p className="font-bold">Add Member</p>
              <p className="text-muted-foreground text-xs">Invite your colleagues</p>
            </div>
          </button>
        </div>
      </div>

      {/* Decorative Grid */}
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
