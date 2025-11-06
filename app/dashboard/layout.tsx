export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-3xl">Dashboard Layout</h1>
      {children}
    </div>
  );
}
