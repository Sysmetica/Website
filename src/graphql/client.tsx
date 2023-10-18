import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
    },
  }
});

export default client;