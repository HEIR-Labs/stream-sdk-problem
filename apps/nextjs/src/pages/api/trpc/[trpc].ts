import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter, createContext } from '@heir/api';

export default createNextApiHandler({
  router: appRouter,
  createContext: createContext,
});
