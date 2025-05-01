import { useQuery } from '@tanstack/react-query';
import { JokeApis } from './example.api';

export const ExampleKeys = {
  all: ['example'] as const,
  random: () => [...ExampleKeys.all, 'random'] as const
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useGetAllJokesQuery = () => {
  return useQuery({
    queryKey: ExampleKeys.all,
    queryFn: () => JokeApis.getAll(),
    refetchOnWindowFocus: false
  });
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useGetRandomJokeQuery = () => {
  return useQuery({
    queryKey: ExampleKeys.random(),
    queryFn: () => JokeApis.getRandom()
  });
};

//TODO: Mutation example
