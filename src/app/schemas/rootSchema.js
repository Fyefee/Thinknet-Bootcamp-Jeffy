import { gql } from 'apollo-server-express'
import { merge } from 'lodash'
import product from './product'

const moduleTypeDefs = [
  product.typeDefs
]

const moduleQueries = [
  product.queries
]

const moduleMutations = [
  product.mutations
]

const typeDefs = gql`
  ${moduleTypeDefs.join('\n')}

  type Query {
    ${moduleQueries.join('\n')}
  }

  type Mutation {
    ${moduleMutations.join('\n')}
  }

  schema {
    query: Query,
    mutation: Mutation,
  }
`
const resolvers = merge(
  product.resolvers
)

export {
  typeDefs,
  resolvers,
}