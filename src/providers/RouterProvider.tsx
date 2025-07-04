import { QueryClient } from '@tanstack/react-query';
import {
  RouterProvider as TanstackRouterProvider,
  createRouter,
} from '@tanstack/react-router';

import { routeTree } from '@/routeTree.gen';

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  context: {
    routerContext: {
      auth: {},
    },
    queryClient,
  },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export function RouterProvider() {
  return <TanstackRouterProvider router={router} />;
}
