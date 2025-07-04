import { type ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] min-h-screen">
      <header className="col-span-2">
        <h1>HEADER</h1>
      </header>

      <aside className="row-start-2">
        <h2>ASIDE</h2>
      </aside>

      <main className="col-start-2 row-start-2 p-4 md:p-8 bg-background text-foreground">
        {children}
      </main>
    </div>
  );
}
