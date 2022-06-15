import supertest from 'supertest'
import express from 'express'
import mongoose from 'mongoose'
import userRouter from '../../src/routes/user'
import userModel from '../../src/models/user'

/* eslint implicit-arrow-linebreak: ["error", "below"] */
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

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
    it('username is not found in database', () =>
      supertest(app)
        .get('/user')
        .query({ username: 'notfoundusername' })
        .then((response) => {
          expect(response.statusCode).toBe(404)
          expect(response.body).toEqual({
            message: 'Not found',
          })
        }))

    it('username is found in database', () =>
      supertest(app)
        .get('/user')
        .query({ username: 'testusername' })
        .then((response) => {
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

  describe('route API POST /user', () => {
    afterAll(async () => {
      await userModel.remove({ username: 'newtestusername' })
    })

    it('should return data correctly when create complete', () =>
      supertest(app)
        .post('/user')
        .send({
          username: 'newtestusername',
          firstname: 'testfirstname',
          lastname: 'testlastname',
        })
        .then((response) => {
          delete response.body._id
          delete response.body.createdAt
          delete response.body.updatedAt

          expect(response.statusCode).toBe(200)
          expect(response.body).toEqual({
            username: 'newtestusername',
            firstname: 'testfirstname',
            lastname: 'testlastname',
            gender: 'MALE',
            job: 'PROGRAMMER',
          })
        }))
  })

  describe('route API PUT /user', () => {
    it('should update and return data correctly when found username', () =>
      supertest(app)
        .put('/user')
        .send({
          username: 'testusername',
          firstname: 'firstnameedit',
          lastname: 'lastnameedit',
        })
        .then((response) => {
          delete response.body._id
          delete response.body.createdAt
          delete response.body.updatedAt

          expect(response.statusCode).toBe(200)
          expect(response.body).toEqual({
            username: 'testusername',
            firstname: 'firstnameedit',
            lastname: 'lastnameedit',
            gender: 'MALE',
            job: 'PROGRAMMER',
          })
        }))

    it('should return null when not found username', () =>
      supertest(app)
        .put('/user')
        .send({
          username: 'testusername2',
          firstname: 'firstnameedit',
          lastname: 'lastnameedit',
        })
        .then((response) => {
          expect(response.statusCode).toBe(200)
          expect(response.body).toBeNull()
        }))
  })

  describe('route API DELETE /user', () => {
    it('should delete data correctly when found username', () =>
      supertest(app)
        .delete('/user')
        .send({
          username: 'testusername',
        })
        .then((response) => {
          expect(response.statusCode).toBe(200)
          expect(response.body).toHaveProperty('deletedCount', 1)
        }))

    it('should not delete data when not found username', () =>
      supertest(app)
        .delete('/user')
        .send({
          username: 'testusername2',
        })
        .then((response) => {
          expect(response.statusCode).toBe(200)
          expect(response.body).toHaveProperty('deletedCount', 0)
        }))
  })
})
