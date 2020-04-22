import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};
console.log('process.env.REACT_APP_GRAPH_API_URI:', process.env.REACT_APP_GRAPH_API_URI)

const link = createHttpLink({ uri: process.env.REACT_APP_GRAPH_API_URI });
const cache = new InMemoryCache({
  dataIdFromObject: ({ id }) => id,
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    'x-api-key': process.env.REACT_APP_API_KEY || '',
  },
}));


export default new ApolloClient({
  link: authLink.concat(link),
  cache,
  defaultOptions,
});

