import React, { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { Header } from '@/components/layout/Header';
// import { Sidebar } from '@/components/layout/Sidebar';
import { ThemeProvider } from '@/providers/ThemeProvider';

const queryClient = new QueryClient();

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] min-h-screen">
          {/* <Header className="col-span-2" />  */}
          <header className="col-span-2">
            <h1>HEADER</h1>
          </header>

          {/* <Sidebar className="row-start-2" /> */}

          <aside className="row-start-2">
            <h2>ASIDE</h2>
          </aside>

          {/* Sidebar takes first column of second row */}
          <main className="col-start-2 row-start-2 p-4 md:p-8 bg-background text-foreground">
            {children}
          </main>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
