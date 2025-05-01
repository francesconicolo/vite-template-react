import axios from 'axios';
import { validateObjectSchema } from 'src/config/zod';
import { jokeSchema } from './validators/schema';
import { Joke } from 'src/model/joke';
import { z } from 'zod';
import { FromJokeResponseDtoToJokeModel } from './mapper/mapper';

export const JokeApis = {
  async getAll(): Promise<Joke[]> {
    const res = await axios.get(
      'https://official-joke-api.appspot.com/random_joke'
    );

    const validRes = validateObjectSchema(z.array(jokeSchema), res.data);

    return validRes.map((example) => FromJokeResponseDtoToJokeModel(example));
  },

  async getRandom(): Promise<Joke> {
    const res = await axios.get(
      'https://official-joke-api.appspot.com/random_joke'
    );

    const validRes = validateObjectSchema(jokeSchema, res.data);

    return FromJokeResponseDtoToJokeModel(validRes);
  }
};
