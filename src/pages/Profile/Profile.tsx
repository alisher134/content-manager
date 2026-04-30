export const Profile = () => {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="mb-12 flex items-center gap-6">
        <div className="border-muted bg-muted h-24 w-24 animate-pulse rounded-full border-4 border-dashed" />
        <div>
          <h1 className="text-3xl font-bold">User Profile</h1>
          <p className="text-muted-foreground">Manage your account and posts</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="border-muted h-64 rounded-2xl border-2 border-dashed" />
        <div className="border-muted h-64 rounded-2xl border-2 border-dashed" />
      </div>
    </div>
  );
};
