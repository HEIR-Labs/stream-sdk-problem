import { t } from '../trpc';
import { z } from 'zod';

export const randomRouter = t.router({
  number: t.procedure
    .input(
      z.object({
        min: z.number({ description: 'The min number' }),
        max: z.number({ description: 'The max number' }),
      })
    )
    .query(({ input }) => ({
      max: input.max,
      min: input.min,
      specialNumber: Math.random(),
    })),
});
