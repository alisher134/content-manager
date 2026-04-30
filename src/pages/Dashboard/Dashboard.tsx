export const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
      <p className="text-muted-foreground mt-2">Welcome to Pulse. Tracking real-time metrics.</p>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="border-muted flex h-32 animate-pulse items-center justify-center rounded-xl border-2 border-dashed"
          >
            Metric Widget {i}
          </div>
        ))}
      </div>
    </div>
  );
};
