import { z } from 'zod';
import { jokeSchema as jokeSchema } from '../validators/schema';

export type JokeResponseDTO = z.infer<typeof jokeSchema>;
