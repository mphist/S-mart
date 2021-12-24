import 'dotenv/config'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { resolvers } from '../resolvers'
import loadDbRoute from '../routes/api/loadDb'
import { typeDefs } from '../typeDefs'
import { context } from './context'
import stripeRoute from '../routes/api/stripe'
import cors from 'cors'
import { nudgeDyno } from './nudgeDyno'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'

export const startServer = async () => {
  const app = express()
  // const port =
  //   process.env.NODE_ENV === 'production' ? 'replace with prod port' : 4000
  const port = process.env.PORT || 4000

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    introspection: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  })

  const corsOptions = {
    origin: ['http://localhost:3000', process.env.CLIENT_URL!], //add prod url
    credentials: true,
  }
  //middleware
  app.use(cors(corsOptions))
  app.use(express.json())

  //routes
  const router = express.Router()
  app.use('/api/loadDb', loadDbRoute(router))
  app.use('/api/stripe', stripeRoute(router))

  await server.start()
  server.applyMiddleware({ app })

  app.listen(port, () => {
    // if (process.env.NODE_ENV === 'production') nudgeDyno()
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}')`
    )
  })
}
