export const PostEditor = () => {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-8 text-3xl font-bold">Edit Content</h1>
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="bg-muted h-4 w-20 rounded" />
          <div className="border-muted h-12 w-full rounded-lg border-2 border-dashed" />
        </div>
        <div className="space-y-2">
          <div className="bg-muted h-4 w-32 rounded" />
          <div className="border-muted h-64 w-full rounded-lg border-2 border-dashed" />
        </div>
        <div className="flex gap-4">
          <div className="border-primary bg-primary/20 h-10 w-32 rounded border-2 border-dashed" />
          <div className="border-muted bg-muted h-10 w-32 rounded border-2 border-dashed" />
        </div>
      </div>
    </div>
  );
};
