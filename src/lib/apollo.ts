import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'https://your-wordpress-site.com/graphql', // Replace with your WordPress GraphQL endpoint
  }),
  cache: new InMemoryCache(),
});

export default client;
