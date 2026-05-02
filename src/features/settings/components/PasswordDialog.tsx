import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from '@/shared/components';

export const PasswordDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" className="border-white/10 font-bold">
        Update Password
      </Button>
    </DialogTrigger>
    <DialogContent className="bg-card/95 border-white/10 backdrop-blur-2xl">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Change Password</DialogTitle>
          <DialogDescription>Enter your current password and choose a new one.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="current-password" className="text-xs font-bold uppercase opacity-70">
              Current Password
            </Label>
            <Input
              id="current-password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              className="bg-background/50 h-11"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password" className="text-xs font-bold uppercase opacity-70">
              New Password
            </Label>
            <Input
              id="new-password"
              type="password"
              autoComplete="new-password"
              placeholder="••••••••"
              className="bg-background/50 h-11"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password" className="text-xs font-bold uppercase opacity-70">
              Confirm New Password
            </Label>
            <Input
              id="confirm-password"
              type="password"
              autoComplete="new-password"
              placeholder="••••••••"
              className="bg-background/50 h-11"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full font-bold sm:w-auto">
            Save New Password
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
);
