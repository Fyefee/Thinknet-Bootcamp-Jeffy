import { gql } from 'apollo-server-express'
import { merge } from 'lodash'
import blog from './blog'
import product from './product'

const moduleTypeDefs = [
  blog.typeDefs,
  product.typeDefs
]

const moduleQueries = [
  blog.queries,
  product.queries
]

const moduleMutations = [
  blog.mutations,
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
  blog.resolvers,
  product.resolvers
)

export {
  typeDefs,
  resolvers,
}