import mongoose from 'mongoose'
import userModel from '../../src/models/user'

jest.mock('mongoose', () => ({
  set: jest.fn(),
  Schema: jest.fn(() => ({
    index: jest.fn(),
  })),
  model: jest.fn(() => ({
    findOne: jest.fn(function findOne() { return this }),
    create: jest.fn(function create() { return this }),
    findOneAndUpdate: jest.fn(function create() { return this }),
    deleteMany: jest.fn(function create() { return this }),
    lean: jest.fn(),
  })),
}))

describe('Unit test for User Models', () => {
  afterEach(() => {
    const mongooseModelResultDetail = mongoose.model.mock.results[0].value
    mongooseModelResultDetail.lean.mockRestore()
  })

  describe('(Models) create user schema', () => {
    it('should set user schema correctly', () => {
      expect(mongoose.Promise).toBe(global.Promise)
      expect(mongoose.set).toHaveBeenCalledTimes(2)
      expect(mongoose.set).toHaveBeenCalledWith('useCreateIndex', true)
      expect(mongoose.set).toHaveBeenCalledWith('useFindAndModify', false)

      const mongooseSchemaCalledDetail = mongoose.Schema.mock.calls[0]
      expect(mongoose.Schema).toHaveBeenCalledTimes(1)
      expect(mongooseSchemaCalledDetail[0]).toHaveProperty('username', { type: String })
      expect(mongooseSchemaCalledDetail[0]).toHaveProperty('firstname', { type: String })
      expect(mongooseSchemaCalledDetail[0]).toHaveProperty('lastname', { type: String })
      expect(mongooseSchemaCalledDetail[1]).toHaveProperty('versionKey', false)
      expect(mongooseSchemaCalledDetail[1]).toHaveProperty('timestamps', true)
    })

    it('should set required and unique data in schema correctly', () => {
      const mongooseSchemaIndex = mongoose.Schema.mock.results[0].value.index
      expect(mongooseSchemaIndex).toHaveBeenCalledTimes(1)
      expect(mongooseSchemaIndex).toHaveBeenCalledWith({ username: 1 }, { unique: true })
    })

    it('should create user schema with collection name correctly', () => {
      const mongooseModelCalledDetail = mongoose.model.mock.calls[0]
      expect(mongoose.model).toHaveBeenCalledTimes(1)
      expect(mongooseModelCalledDetail[0]).toBe('User')
    })
  })

  describe('(Models) find user function', () => {
    it('should find function call findOne and lean correctly', () => {
      const mongooseModelResultDetail = mongoose.model.mock.results[0].value
      const mockQuery = 'Mockup Query'
      const mockLeanData = 'Mockup Lean Data'

      mongooseModelResultDetail.lean.mockReturnValueOnce(mockLeanData)

      const result = userModel.find(mockQuery)

      expect(mongooseModelResultDetail.findOne).toHaveBeenCalledTimes(1)
      expect(mongooseModelResultDetail.findOne).toHaveBeenCalledWith(mockQuery)
      expect(mongooseModelResultDetail.lean).toHaveBeenCalledTimes(1)
      expect(result).toBe(mockLeanData)
    })
  })

  describe('(Models) create user function', () => {
    it('should create function call create correctly', () => {
      const mongooseModelResultDetail = mongoose.model.mock.results[0].value
      const mockData = 'Mockup Data'
      const mockReturnData = 'Mockup Return Data'

      mongooseModelResultDetail.create.mockReturnValueOnce(mockReturnData)

      const result = userModel.create(mockData)

      expect(mongooseModelResultDetail.create).toHaveBeenCalledTimes(1)
      expect(mongooseModelResultDetail.create).toHaveBeenCalledWith(mockData)
      expect(result).toBe(mockReturnData)
    })
  })

  describe('(Models) findOneAndUpdate user function', () => {
    it('should findOneAndUpdate function call findOneAndUpdate and lean correctly', () => {
      const mongooseModelResultDetail = mongoose.model.mock.results[0].value
      const mockQuery = 'Mockup Query'
      const mockChanges = 'Mockup Changes'
      const mockLeanData = 'Mockup Lean Data'

      mongooseModelResultDetail.lean.mockReturnValueOnce(mockLeanData)

      const result = userModel.findOneAndUpdate(mockQuery, mockChanges)

      expect(mongooseModelResultDetail.findOneAndUpdate).toHaveBeenCalledTimes(1)
      expect(mongooseModelResultDetail.findOneAndUpdate).toHaveBeenCalledWith(
        mockQuery,
        mockChanges,
        { new: true },
      )
      expect(mongooseModelResultDetail.lean).toHaveBeenCalledTimes(1)
      expect(result).toBe(mockLeanData)
    })
  })

  describe('(Models) remove user function', () => {
    it('should remove function call deleteMany and lean correctly', () => {
      const mongooseModelResultDetail = mongoose.model.mock.results[0].value
      const mockQuery = 'Mockup Query'
      const mockLeanData = 'Mockup Lean Data'

      mongooseModelResultDetail.lean.mockReturnValueOnce(mockLeanData)

      const result = userModel.remove(mockQuery)

      expect(mongooseModelResultDetail.deleteMany).toHaveBeenCalledTimes(1)
      expect(mongooseModelResultDetail.deleteMany).toHaveBeenCalledWith(mockQuery)
      expect(mongooseModelResultDetail.lean).toHaveBeenCalledTimes(1)
      expect(result).toBe(mockLeanData)
    })
  })
})
