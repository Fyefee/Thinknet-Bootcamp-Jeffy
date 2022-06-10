import productController from '../controllers/productController'
import productService from '../services/productService'

const typeDefs = `
  scalar Date

  enum BookCategories {
    SPORT
    ENTERTAINMENT
    NEWS
  }

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
    producedDate: Date
    weight: Float
    tisiCertificate: String
  }

  type Book implements Product { 
    _id: ID!
    productName: String!
    quantity: Int!
    category: BookCategories
    categoryValue: String
    pageNumber: Int
    isbnNumber: String
    publisher: String
  }

  type Consumable implements Product { 
    _id: ID!
    productName: String!
    quantity: Int!
    producedDate: Date
    expireddate: Date
    description: String
    producer: String
    distributor: String
    fdaCertificate: String
  }

  type ProductListInterfacePayload {
    data: [Product]
  }

  type ProductPayload {
    data: Product
  }

  type ProductResponseUpdatingPayload {
    status: String!
    message: String
    data: Product
  }

  type ProductResponseDeletingPayload {
    status: String!
    message: String
  }

  type BuyProductResponsePayload {
    status: String!
    message: String
    sameCategoryProduct: [Product]
  }

  input CreateProductInput {
    productName: String
    quantity: Int
    producedDate: Date
    weight: Float
    tisiCertificate: String
    category: BookCategories
    categoryValue: String
    pageNumber: Int
    isbnNumber: String
    publisher: String
    expireddate: Date
    description: String
    producer: String
    distributor: String
    fdaCertificate: String
  }

`

const queries = `
  getAllProducts: ProductListInterfacePayload
`

const mutations = `
  createProduct(input: CreateProductInput!): ProductResponseUpdatingPayload
  updateProduct(_id: ID!, input: CreateProductInput!): ProductResponseUpdatingPayload
  deleteProduct(_id: ID!): ProductResponseDeletingPayload
  buyProduct(_id: ID!, amount: Int!): BuyProductResponsePayload
`

const resolvers = {
  Query: {
    getAllProducts: (_, args) => productController.getAllProducts(),
  },
  Mutation: {
    createProduct: (_, args) => productController.createProduct(args.input),
    updateProduct: (_, args) => productController.updateProduct(args._id, args.input),
    deleteProduct: (_, args) => productController.deleteProduct(args._id),
    buyProduct: (_, args) => productController.buyProduct(args._id, args.amount)
  },
  Book: {
    categoryValue: async (data) => {
      const getCategory = productService.getSportCategoryByENUM(data.category)
      return getCategory.data.value
    },
  },
  Product: {
    __resolveType(response) {
      if (response.tisiCertificate) {
        return 'HomeDevice'
      }
      if (response.fdaCertificate) {
        return 'Consumable'
      }
      if (response.isbnNumber) {
        return 'Book'
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
