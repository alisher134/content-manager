export const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-black tracking-tighter italic">PULSE</h1>
          <p className="text-muted-foreground mt-2">Sign in to manage your content</p>
        </div>
        <div className="border-muted space-y-4 rounded-2xl border-2 border-dashed p-8">
          <div className="bg-muted h-12 w-full animate-pulse rounded" />
          <div className="bg-muted h-12 w-full animate-pulse rounded" />
          <div className="bg-primary/30 border-primary h-12 w-full rounded border-2 border-dashed" />
        </div>
      </div>
    </div>
  );
};
