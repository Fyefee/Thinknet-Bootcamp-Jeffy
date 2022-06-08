import executeValidator from './request'
import validateById from './validateById'
import createStudent from './createStudent'
import updateStudent from './updateStudent'

export default {
  validateById: executeValidator(validateById),
  createStudent: executeValidator(createStudent),
  updateStudent: executeValidator(updateStudent),
}
