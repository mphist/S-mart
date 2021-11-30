import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri:
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_SERVER_URL + '/graphql'
      : 'http://localhost:4000/graphql',
})
