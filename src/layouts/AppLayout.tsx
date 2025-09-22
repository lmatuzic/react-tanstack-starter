import { AppSidebar } from '@/components/layout/sidebar/AppSidebar';
import TopNavigation from '@/components/TopNavigation';
import { SidebarProvider } from '@/components/ui/sidebar';
import { type ReactNode } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout(props: AppLayoutProps) {
  const { children } = props;
  const { containerMode } = useTheme();

  return (
    <SidebarProvider>
      <div
        className={cn(
          `${containerMode === 'container' ? 'container md:mx-auto' : 'w-full'} flex gap-x-4 overflow-hidden bg-background p-2 text-foreground sm:p-4`,
        )}
      >
        <AppSidebar
          containerMode={containerMode}
          className={
            containerMode === 'container' ? 'fixed top-0 h-screen' : ''
          }
        />

        <div className="flex h-screen flex-1 flex-col overflow-y-auto">
          <TopNavigation />
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
}
