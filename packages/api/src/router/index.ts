import { t } from '../trpc';

import { postRouter } from './post';
import { randomRouter } from './random';

export const appRouter = t.router({
  random: randomRouter,
  post: postRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
