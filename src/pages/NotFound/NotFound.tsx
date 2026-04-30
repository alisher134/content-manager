export const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center p-6 text-center">
      <h1 className="text-muted/20 text-9xl font-black">404</h1>
      <h2 className="-mt-12 text-3xl font-bold">Lost in space?</h2>
      <p className="text-muted-foreground mt-4 max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved to another galaxy.
      </p>
      <button className="bg-primary text-primary-foreground mt-8 rounded-full px-8 py-3 font-bold transition-transform hover:scale-105">
        Back to Dashboard
      </button>
    </div>
  );
};
