import { createTRPCReact } from '@trpc/react';
import type { AppRouter } from '@heir/api';
import Constants from 'expo-constants';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { transformer } from '@heir/api/transformer';
/**
 * A set of typesafe hooks for consuming your API.
 */
export const trpc = createTRPCReact<AppRouter>();

const getBaseUrl = () => {
  /**
   * Gets the IP address of your host-machine. If it cannot automatically find it,
   * you'll have to manually set it. NOTE: Port 3000 should work for most but confirm
   * you don't have anything else running on it, or you'd have to change it.
   */
  const localhost = Constants.manifest?.debuggerHost?.split(':')[0];
  // if (!localhost)
  //   throw new Error('failed to get localhost, configure it manually');
  return `http://${localhost}:3000`;
};

export const TRPCProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [queryClient] = React.useState(() => new QueryClient());
  const [trpcClient] = React.useState(() =>
    trpc.createClient({
      transformer,
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
