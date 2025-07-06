import { AppSidebar } from '@/components/layout/sidebar/AppSidebar';
import TopNavigation from '@/components/TopNavigation';
import { SidebarProvider } from '@/components/ui/sidebar';
import { type ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="col-start-2 row-start-2 w-full bg-background p-2 text-foreground sm:p-4">
        <TopNavigation />
        {children}
      </main>
    </SidebarProvider>
  );
}
