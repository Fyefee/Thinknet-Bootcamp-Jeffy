import userController from '../../src/controllers/user'
import userModel from '../../src/models/user'
import userFormatter from '../../src/libs/formatter'

jest.mock('../../src/models/user')
jest.mock('../../src/libs/formatter')

describe('Unit test for User Controller', () => {
  describe('(Controller) getUser Function Test Suit', () => {
    afterEach(() => {
      userModel.find.mockRestore()
      userFormatter.user.mockRestore()
    })

    it('should response status 404 with error message when non user record in database', async () => {
      const req = { query: { username: 'testusername' } }
      const res = { status: jest.fn(() => ({ json: jest.fn() })) }

      userModel.find.mockResolvedValueOnce(null)

      await userController.getUser(req, res)

      expect(userModel.find).toHaveBeenCalledTimes(1)
      expect(userModel.find).toHaveBeenCalledWith({ username: 'testusername' })
      expect(res.status).toHaveBeenCalledTimes(1)
      expect(res.status).toHaveBeenCalledWith(404)
      expect(res.status.mock.results[0].value.json).toHaveBeenCalledTimes(1)
      expect(res.status.mock.results[0].value.json).toHaveBeenCalledWith({
        message: 'Not found',
      })
    })

    it('should response status 200 with formatted data when user record in database', async () => {
      const req = { query: { username: 'testusername' } }
      const res = { json: jest.fn() }

      userModel.find.mockResolvedValueOnce({
        username: 'testusername',
        firstname: 'testfirstname',
        lastname: 'testlastname',
      })

      userFormatter.user.mockReturnValueOnce({
        username: 'testusername',
        firstname: 'testfirstname',
        lastname: 'testlastname',
        gender: 'male',
        job: 'test',
      })

      await userController.getUser(req, res)

      expect(userModel.find).toHaveBeenCalledTimes(1)
      expect(userModel.find).toHaveBeenCalledWith({ username: 'testusername' })
      expect(userFormatter.user).toHaveBeenCalledTimes(1)
      expect(userFormatter.user).toHaveBeenCalledWith({
        username: 'testusername',
        firstname: 'testfirstname',
        lastname: 'testlastname',
      })
      expect(res.json).toHaveBeenCalledTimes(1)
      expect(res.json).toHaveBeenCalledWith({
        username: 'testusername',
        firstname: 'testfirstname',
        lastname: 'testlastname',
        gender: 'male',
        job: 'test',
      })
    })
  })

  describe('(Controller) createUser Function Test Suit', () => {
    afterEach(() => {
      userFormatter.user.mockRestore()
    })

    it('should response formatted data when create complete', async () => {
      const req = {
        body: {
          username: 'testusername',
          firstname: 'Jeffy',
          lastname: 'eiei',
        },
      }
      const res = { json: jest.fn() }

      const mockResult = {
        toObject: jest.fn(() => 'Result Object'),
      }

      userModel.create.mockResolvedValueOnce(mockResult)
      userFormatter.user.mockReturnValueOnce('Result Object')

      await userController.createUser(req, res)

      expect(userModel.create).toHaveBeenCalledTimes(1)
      expect(userModel.create).toHaveBeenCalledWith({
        username: 'testusername',
        firstname: 'Jeffy',
        lastname: 'eiei',
      })
      expect(mockResult.toObject).toHaveBeenCalledTimes(1)
      expect(userFormatter.user).toHaveBeenCalledTimes(1)
      expect(userFormatter.user).toHaveBeenCalledWith('Result Object')
      expect(res.json).toHaveBeenCalledTimes(1)
      expect(res.json).toHaveBeenCalledWith('Result Object')
    })
  })

  describe('(Controller) updateUser Function Test Suit', () => {
    afterEach(() => {
      userFormatter.user.mockRestore()
    })

    it('should response formatted data when update complete', async () => {
      const req = {
        body: {
          username: 'testusername',
          firstname: 'Jeffy',
          lastname: 'eiei',
        },
      }
      const res = { json: jest.fn() }

      userModel.findOneAndUpdate.mockResolvedValueOnce('Result Object')
      userFormatter.user.mockReturnValueOnce('Result Object')

      await userController.updateUser(req, res)

      expect(userModel.findOneAndUpdate).toHaveBeenCalledTimes(1)
      expect(userModel.findOneAndUpdate).toHaveBeenCalledWith(
        {
          username: req.body.username,
        },
        {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
        },
      )
      expect(userFormatter.user).toHaveBeenCalledTimes(1)
      expect(userFormatter.user).toHaveBeenCalledWith('Result Object')
      expect(res.json).toHaveBeenCalledTimes(1)
      expect(res.json).toHaveBeenCalledWith('Result Object')
    })
  })

  describe('(Controller) removeUser Function Test Suit', () => {
    afterEach(() => {
      userFormatter.user.mockRestore()
    })

    it('should response data when delete complete', async () => {
      const req = { body: { username: 'testusername' } }
      const res = { json: jest.fn() }

      userModel.remove.mockResolvedValueOnce('Result Mockup')

      await userController.removeUser(req, res)

      expect(userModel.remove).toHaveBeenCalledTimes(1)
      expect(userModel.remove).toHaveBeenCalledWith({
        username: req.body.username,
      })
      expect(res.json).toHaveBeenCalledTimes(1)
      expect(res.json).toHaveBeenCalledWith('Result Mockup')
    })
  })
})
