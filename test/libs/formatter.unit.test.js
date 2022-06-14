import userFormatter from '../../src/libs/formatter'

describe('Unit test for User Formatter', () => {
  describe('(Formatter) User format data function', () => {
    it('should return null when data is null', () => {
      expect(userFormatter.user(null)).toBe(null)
    })

    it('should return undefined when data is undefined', () => {
      expect(userFormatter.user(undefined)).toBe(undefined)
    })

    it('should return formatted data when data is object', () => {
      const data = {
        username: 'testusername',
        firstname: 'testfirstname',
        lastname: 'testlastname',
      }
      expect(userFormatter.user(data)).toEqual({
        username: 'testusername',
        firstname: 'testfirstname',
        lastname: 'testlastname',
        gender: 'MALE',
        job: 'PROGRAMMER',
      })
    })
  })
})
