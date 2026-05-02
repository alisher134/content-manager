import { Mail, MoreHorizontal, User } from 'lucide-react';

import type { TeamMember } from '../types/teamTypes';

import { Button, CardContent, CardHeader } from '@/shared/components';

interface MemberCardProps {
  readonly member: TeamMember;
  readonly onManageAccess?: (member: TeamMember) => void;
}

export const MemberCard = ({ member, onManageAccess }: MemberCardProps) => (
  <article className="bg-card/50 group hover:border-primary/30 overflow-hidden rounded-xl border border-white/10 backdrop-blur-xl transition-all hover:-translate-y-1">
    <CardHeader className="border-none bg-transparent pt-6 pb-0">
      <div className="flex items-center justify-between">
        <div className="relative">
          <div className="bg-muted flex size-14 items-center justify-center rounded-2xl border border-white/10 shadow-lg transition-transform group-hover:scale-105">
            <User className="text-muted-foreground size-7" />
          </div>
          {member.status === 'online' && (
            <div className="absolute -top-1 -right-1" aria-label="Online status">
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
          aria-label={`Settings for ${member.name}`}
        >
          <MoreHorizontal className="size-4" />
        </Button>
      </div>
    </CardHeader>
    <CardContent className="space-y-4 border-none bg-transparent pt-6 pb-6">
      <div className="space-y-1">
        <h3 className="text-lg font-bold tracking-tight">{member.name}</h3>
        <div className="bg-primary/10 text-primary w-fit rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase">
          {member.role}
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="text-muted-foreground flex items-center gap-2">
          <Mail className="size-3.5" aria-hidden="true" />
          {member.email}
        </div>
      </div>

      <div className="pt-2">
        <Button
          variant="outline"
          className="hover:bg-primary h-9 w-full border-white/5 bg-white/5 text-xs font-bold transition-all hover:text-white"
          onClick={() => onManageAccess?.(member)}
        >
          Manage Access
        </Button>
      </div>
    </CardContent>
  </article>
);
