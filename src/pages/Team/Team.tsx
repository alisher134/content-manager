export const Team = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Team Management</h1>
      <p className="text-muted-foreground mt-2">Manage roles and permissions for your team.</p>

      <div className="mt-8 space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="border-muted flex h-16 items-center gap-4 rounded-xl border-2 border-dashed px-6"
          >
            <div className="bg-muted h-10 w-10 rounded-full" />
            <div className="bg-muted h-4 w-32 rounded" />
            <div className="border-muted ml-auto h-8 w-20 rounded border border-dashed" />
          </div>
        ))}
      </div>
    </div>
  );
};
