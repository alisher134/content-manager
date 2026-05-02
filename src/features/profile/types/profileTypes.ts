export interface UserProfile {
  readonly name: string;
  readonly role: string;
  readonly location: string;
  readonly joinDate: string;
  readonly email: string;
  readonly bio: string;
  readonly avatarUrl?: string;
}

export interface ProfileStat {
  readonly label: string;
  readonly value: string;
  readonly color: string;
}

export interface ActivityItem {
  readonly id: string;
  readonly type: 'publish' | 'edit' | 'comment';
  readonly title: string;
  readonly timestamp: string;
}
