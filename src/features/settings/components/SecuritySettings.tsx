import { KeyRound, Mail, Phone } from 'lucide-react';

import { PasswordDialog } from './PasswordDialog';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Separator,
} from '@/shared/components';

export const SecuritySettings = () => (
  <Card className="bg-card/50 border-white/10 backdrop-blur-xl">
    <CardHeader>
      <div className="flex items-center gap-2">
        <div className="bg-primary/10 flex size-8 items-center justify-center rounded-lg">
          <KeyRound className="text-primary size-4" />
        </div>
        <CardTitle id="security-title" className="text-xl font-bold">
          Account Security
        </CardTitle>
      </div>
      <CardDescription>Update your login credentials and contact information.</CardDescription>
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-xs font-bold tracking-wider uppercase opacity-70">
          Email Address
        </Label>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Mail className="text-muted-foreground absolute top-1/2 left-3.5 size-4 -translate-y-1/2" />
            <Input
              id="email"
              type="email"
              defaultValue="john@pulse.io"
              readOnly
              className="bg-background/50 focus:ring-primary/20 h-11 pl-10 transition-all focus:ring-2"
            />
          </div>
          <Button type="button" variant="outline" className="h-11 border-white/10 px-6 font-bold">
            Change
          </Button>
        </div>
      </div>

      <Separator className="bg-white/5" />

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-xs font-bold tracking-wider uppercase opacity-70">
          Phone Number
        </Label>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Phone className="text-muted-foreground absolute top-1/2 left-3.5 size-4 -translate-y-1/2" />
            <Input
              id="phone"
              type="tel"
              defaultValue="+7 (900) 000-00-00"
              readOnly
              className="bg-background/50 focus:ring-primary/20 h-11 pl-10 transition-all focus:ring-2"
            />
          </div>
          <Button type="button" variant="outline" className="h-11 border-white/10 px-6 font-bold">
            Change
          </Button>
        </div>
      </div>

      <Separator className="bg-white/5" />

      <div className="flex items-center justify-between py-2">
        <div className="space-y-0.5">
          <p className="text-sm font-bold">Password</p>
          <p className="text-muted-foreground text-xs">Last changed 3 months ago</p>
        </div>
        <PasswordDialog />
      </div>
    </CardContent>
  </Card>
);
