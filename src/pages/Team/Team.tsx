import { useState } from 'react';
import { Plus, Shield, UserPlus } from 'lucide-react';

import { MemberCard, MemberFilters, type TeamMember } from '@features/team';
import { Button } from '@shared/components';

const INITIAL_MEMBERS: TeamMember[] = [
  { name: 'John Doe', role: 'Administrator', email: 'john@pulse.io', status: 'online' },
  {
    name: 'Sarah Wilson',
    role: 'Senior Editor',
    email: 'sarah@pulse.io',
    status: 'online',
  },
  { name: 'Mike Chen', role: 'Editor', email: 'mike@pulse.io', status: 'offline' },
  {
    name: 'Elena Rodriguez',
    role: 'Editor',
    email: 'elena@pulse.io',
    status: 'online',
  },
  { name: 'Alex Thompson', role: 'Viewer', email: 'alex@pulse.io', status: 'offline' },
  {
    name: 'Lisa Wang',
    role: 'Administrator',
    email: 'lisa@pulse.io',
    status: 'online',
  },
];

export const Team = () => {
  const [activeFilter, setActiveFilter] = useState('All Members');

  return (
    <div className="bg-background relative min-h-screen w-full px-6 py-10">
      <div className="bg-primary/5 absolute top-0 right-0 h-96 w-96 rounded-full blur-[100px]" />
      <div className="bg-secondary/5 absolute bottom-0 left-0 h-96 w-96 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-10">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
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
        </header>

        <main className="space-y-10">
          <MemberFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            onSearchChange={() => {
              /* Search logic to be implemented */
            }}
          />

          <section
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            aria-label="Team members list"
          >
            {INITIAL_MEMBERS.map((member, i) => (
              <MemberCard key={i} member={member} />
            ))}

            <button
              className="group border-muted/20 hover:border-primary/50 hover:bg-primary/5 flex min-h-[240px] flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed bg-transparent transition-all"
              aria-label="Invite new team member"
            >
              <div className="bg-muted/50 group-hover:bg-primary/20 flex size-12 items-center justify-center rounded-2xl transition-colors">
                <Plus className="text-muted-foreground group-hover:text-primary size-6" />
              </div>
              <div className="text-center">
                <p className="font-bold">Add Member</p>
                <p className="text-muted-foreground text-xs">Invite your colleagues</p>
              </div>
            </button>
          </section>
        </main>
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
