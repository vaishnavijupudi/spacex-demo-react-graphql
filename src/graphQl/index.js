import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://spacex-production.up.railway.app/', //URL of our GraphQL server.
    cache: new InMemoryCache(), //an instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them.
});
