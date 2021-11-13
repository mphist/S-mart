import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { resolvers } from '../resolvers'
import { typeDefs } from '../typeDefs'

export const startServer = async () => {
  const app = express()
  const port =
    process.env.NODE_ENV === 'production' ? 'replace with prod port' : 4000
  const server = new ApolloServer({ typeDefs, resolvers })
  await server.start()
  server.applyMiddleware({ app })

  //middleware

  //routes
  const router = express.Router()

  app.listen(port, () => {
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}')`
    )
  })
}
