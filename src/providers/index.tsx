import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './ThemeProvider';
import { RouterProvider } from './RouterProvider';
import { setupI18n } from '@/i18';

setupI18n(localStorage.getItem('i18nextLng') ?? '');
const queryClient = new QueryClient();

export default function Providers() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <RouterProvider />
        <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]"></div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
