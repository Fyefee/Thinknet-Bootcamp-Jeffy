import productController from '../controllers/productController'
import blogService from '../services/blogService'

const typeDefs = `
  scalar Date

  interface Product {
    _id: ID!
    productName: String!
    quantity: Int!
  }

  type ProductDefault implements Product { 
    _id: ID!
    productName: String!
    quantity: Int!
  }

  type HomeDevice implements Product { 
    _id: ID!
    productName: String!
    quantity: Int!
    createdDate: Date
    weight: Float
    tisiNumber: String!
  }

  type ProductListInterfacePayload {
    data: [Product]
  }

`

const queries = `
  getAllProducts: ProductListInterfacePayload
`

const mutations = `
`

const resolvers = {
  Query: {
    getAllProducts: (_, args) => productController.getProductList(),
  },
  Mutation: {
  },
  Product: {
    __resolveType(response) {
      if (response.tisiNumber) {
        return 'HomeDevice'
      }
      return 'ProductDefault'
    }
  }
}


export default {
  typeDefs,
  queries,
  mutations,
  resolvers,
}
