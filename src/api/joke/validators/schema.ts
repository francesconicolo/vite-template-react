import { z } from 'zod';

export const jokeSchema = z.object({
  id: z.number(),
  type: z.string(),
  setup: z.string(),
  punchline: z.string()
});
