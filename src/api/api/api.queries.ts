import { useQuery } from '@tanstack/react-query';
import { ApiApis } from './api.api';

export const ApiKeys = {
  exampleRequest: ['exampleRequest']
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useGetExampleRequest = () => {
  return useQuery({
    queryKey: ApiKeys.exampleRequest,
    queryFn: () => ApiApis.getExampleRequest(),
    refetchOnWindowFocus: false
  });
};
