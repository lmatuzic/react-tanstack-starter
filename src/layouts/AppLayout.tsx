import { ThemeToggle } from '@/components/ThemeToggle';
import { type ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <main className="col-start-2 row-start-2 bg-background p-4 text-foreground">
      <ThemeToggle />
      {children}
    </main>
  );
}
