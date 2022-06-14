import supertest from 'supertest'
import express from 'express'
import mongoose from 'mongoose'
import userRouter from '../../src/routes/user'
import userModel from '../../src/models/user'

// connect mongo db
const database = 'mongodb://localhost:27017'
const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

describe('user router', () => {
  const app = express()
  app.use(express.json())
  app.use(userRouter)

  beforeAll(() => {
    mongoose.Promise = global.Promise
    mongoose.connect(database, option)
  })

  afterAll(async () => {
    await mongoose.disconnect()
  })

  beforeEach(async () => {
    await userModel.remove({ username: 'testusername' })
    await userModel.create({
      username: 'testusername',
      firstname: 'testfirstname',
      lastname: 'testlastname',
    })
  })

  describe('route API GET /user', () => {
    it('username is not found in database', () => supertest(app)
      .get('/user')
      .query({ username: 'notfoundusername' })
      .then((response) => {
        expect(response.statusCode).toBe(404)
        expect(response.body).toEqual({
          message: 'Not found',
        })
      }))

    it('username is found in database', () => supertest(app)
      .get('/user')
      .query({ username: 'testusername' })
      .then((response) => {
        /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
        delete response.body._id
        delete response.body.createdAt
        delete response.body.updatedAt

        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({
          username: 'testusername',
          firstname: 'testfirstname',
          lastname: 'testlastname',
          gender: 'MALE',
          job: 'PROGRAMMER',
        })
      }))
  })
})
