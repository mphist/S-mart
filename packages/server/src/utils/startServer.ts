import 'dotenv/config'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { resolvers } from '../resolvers'
import loadDbRoute from '../routes/api/loadDb'
import { typeDefs } from '../typeDefs'
import { context } from './context'
import stripeRoute from '../routes/api/stripe'
import cors from 'cors'

export const startServer = async () => {
  const app = express()
  const port =
    process.env.NODE_ENV === 'production' ? 'replace with prod port' : 4000

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
  })

  const corsOptions = {
    origin: ['http://localhost:3000'], //add prod url
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
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}')`
    )
  })
}
