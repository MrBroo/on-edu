import { useQuery as useApolloQuery } from '@apollo/client';

export default function useQuery(...args: any) {
  const queryProps = useApolloQuery(args[0], {
    ...args[1],
    fetchPolicy: 'cache-and-network',
  });

  return queryProps;
}
