export const PostFeed = () => {
  return (
    <div className="p-6">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold">Content Feed</h1>
          <p className="text-muted-foreground mt-2">Manage and explore all published content.</p>
        </div>
        <div className="border-muted h-10 w-64 rounded-lg border-2 border-dashed" />
      </div>

      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="border-muted flex h-48 animate-pulse items-center justify-center rounded-xl border-2 border-dashed"
          >
            Post Card {i}
          </div>
        ))}
      </div>
    </div>
  );
};
