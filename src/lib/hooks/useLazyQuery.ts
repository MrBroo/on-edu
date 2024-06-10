import { useLazyQuery as useApolloLazyQuery } from '@apollo/client';

export default function useQuery(...args) {
  const queryProps = useApolloLazyQuery(args[0], {
    ...args[1],
    fetchPolicy: 'cache-and-network',
  });

  return queryProps;
}
