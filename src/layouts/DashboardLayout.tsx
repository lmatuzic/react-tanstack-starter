import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { containerMode } = useTheme();

  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <header className="col-span-2">
        <h1>HEADER</h1>
      </header>

      <aside className="row-start-2">
        <h2>ASIDE</h2>
      </aside>

      <main
        className={cn(
          `col-start-2 row-start-2 bg-background p-2 text-foreground sm:p-4 md:p-8`,
          containerMode === 'container' ? 'container mx-auto' : 'w-full',
        )}
      >
        {children}
      </main>
    </div>
  );
}
