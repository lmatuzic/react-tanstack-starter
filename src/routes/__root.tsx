import type { AuthState } from '@/features/auth/types';
import AppLayout from '@/layouts/AppLayout';
import type { QueryClient } from '@tanstack/react-query';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

interface RouterContext {
  auth: AuthState;
}

export const Route = createRootRouteWithContext<{
  routerContext: RouterContext;
  queryClient: QueryClient;
}>()({
  component: () => (
    <>
      <AppLayout>
        <Outlet />
      </AppLayout>

      <TanStackRouterDevtools position="bottom-left" />
    </>
  ),
  errorComponent: () => (
    <div className="p-4">
      <h1>Error page</h1>
    </div>
  ),
});
