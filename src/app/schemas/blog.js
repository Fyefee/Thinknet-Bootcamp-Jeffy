import blogController from '../controllers/blogController'
import blogService from '../services/blogService'

const typeDefs = `
  enum Categories {
    ART
    BUSINESS
    HISTORY
    JOURNAL
    MATH
    REVIEW
    SPORT
  }

  interface Media {
    _id: ID!
    title: String!
    category: Categories
    categoryValue: String
    description: String
  }

  type Blog implements Media { 
    _id: ID!
    title: String!
    category: Categories
    categoryValue: String
    description: String
    author: String
    estimatedReadTime: Int
  }

  type Book implements Media {
    _id: ID!
    title: String!
    category: Categories
    categoryValue: String
    description: String
    totalPage: Int
    ISBN: String
  }

  type Video implements Media {
    _id: ID!
    title: String!
    category: Categories
    categoryValue: String
    description: String
    owner: String
    totalTime: Int
  }

  type BlogListPayload {
    data: [Blog]
  }

  type BlogPayload {
    data: Blog
  }

  input CreateBlogInput {
    title: String!
    categories: [Categories]
    description: String
  }

  type ResponseUpdatingPayload {
    httpCode: String
    message: String
  }

  type CategoryListPayload {
    ART: String
    BUSINESS: String
    HISTORY: String
    JOURNAL: String
    REVIEW: String
    SPORT: String
  }

  type CategoryPayload {
    value: String
  }

  type BlogListInterfacePayload {
    data: [Media]
  }
`

const queries = `
  getAllMedia: BlogListInterfacePayload
`

const mutations = `
  createBlog(input: CreateBlogInput!): BlogPayload
  updateBlog(_id: ID!, input: CreateBlogInput!): ResponseUpdatingPayload
  deleteBlog(_id: ID!): ResponseUpdatingPayload
`

const resolvers = {
  Query: {
    getAllMedia: (_, args) => blogController.getBlogList(),
  },
  Mutation: {
    createBlog: (_, args) => blogController.createBlog(args.input),
    updateBlog: (_, args) => blogController.updateBlog(args._id, args.input),
    deleteBlog: (_, args) => blogController.deleteBlog(args._id)
  },
  Blog: {
    categoryValue: async (data) => {
      const getCategory = await blogService.getCategoryByENUM(data.category)
      return getCategory.data.value
    },
  },
  Media: {
    __resolveType(response) {
      if (response.author) {
        return 'Blog'
      }
      if (response.ISBN) {
        return 'Book'
      }
      if (response.totalTime) {
        return 'Video'
      }
      return null
    }
  }
}


export default {
  typeDefs,
  queries,
  mutations,
  resolvers,
}
