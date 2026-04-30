export const PostDetails = () => {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="border-muted mb-8 flex h-[400px] items-center justify-center rounded-2xl border-2 border-dashed">
        Hero Image Placeholder
      </div>
      <h1 className="mb-4 text-4xl font-bold italic">Post Title Placeholder</h1>
      <div className="space-y-4">
        <div className="bg-muted h-4 w-full animate-pulse rounded" />
        <div className="bg-muted h-4 w-[90%] animate-pulse rounded" />
        <div className="bg-muted h-4 w-[95%] animate-pulse rounded" />
      </div>
    </div>
  );
};
