/* @flow */
import dotenv from 'dotenv'

dotenv.config({ path: `.env.graphql` })

export const {
  NODE_PORT,
  NODE_ENV,
  APP_ENV,
  URL_PREFIX,
  URL_BLOG_SERVICE
} = process.env
