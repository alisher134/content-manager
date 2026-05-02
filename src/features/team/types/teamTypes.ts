export type MemberStatus = 'online' | 'offline';

export interface TeamMember {
  readonly name: string;
  readonly role: string;
  readonly email: string;
  readonly status: MemberStatus;
}
