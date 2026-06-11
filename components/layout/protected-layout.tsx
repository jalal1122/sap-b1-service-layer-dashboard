import { Sidebar } from "./sidebar";

export function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />
      <main className="flex-1 ml-64 p-8 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
