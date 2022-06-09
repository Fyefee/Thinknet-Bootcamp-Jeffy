import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from './app/schemas/rootSchema'
import { APP_ENV } from './app/config'
import dateScalar from './app/schemas/dateScalar'

const app = express()
const env = APP_ENV || 'development'
const isNotProduction = env !== 'production'

const apolloServer = new ApolloServer({ 
  typeDefs,
  resolvers: {
    ...resolvers, 
    Date: dateScalar,
  },
})

apolloServer.applyMiddleware({ app: app, path: '/graphql' })

export {
  apolloServer,
}
export default app
