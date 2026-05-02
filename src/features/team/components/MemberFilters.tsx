import { Search } from 'lucide-react';

import { Input } from '@/shared/components';

interface MemberFiltersProps {
  readonly activeFilter: string;
  readonly onFilterChange: (filter: string) => void;
  readonly onSearchChange: (search: string) => void;
}

const FILTERS = ['All Members', 'Admins', 'Editors', 'Viewers'];

export const MemberFilters = ({
  activeFilter,
  onFilterChange,
  onSearchChange,
}: MemberFiltersProps) => (
  <nav className="flex flex-col gap-4 sm:flex-row sm:items-center" aria-label="Member filters">
    <div className="relative w-full sm:w-96">
      <Search className="text-muted-foreground absolute top-1/2 left-3.5 size-4 -translate-y-1/2" />
      <Input
        placeholder="Search by name or email..."
        aria-label="Search team members"
        className="bg-card/50 focus:ring-primary/20 h-11 border-white/10 pl-10 backdrop-blur-sm focus:ring-2"
        onChange={(e) => {
          onSearchChange(e.target.value);
        }}
      />
    </div>
    <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => {
            onFilterChange(filter);
          }}
          className={`rounded-lg px-4 py-2 text-sm font-bold whitespace-nowrap transition-all ${
            activeFilter === filter
              ? 'bg-primary/10 text-primary border-primary/20 border'
              : 'text-muted-foreground hover:bg-white/5'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  </nav>
);
