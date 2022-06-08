import { body } from 'express-validator'
import validate from '../../resources/validateMessages'

const validateId = (value, { req }) => {
  return !isNaN(value)
}

const validatePhoneNumber = (value, { req }) => {
  const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (value.match(phoneno)) {
    return true;
  }
  return false;
}

const validateFieldsList = [
  body('id')
    .trim()
    .notEmpty()
    .withMessage(`id ${validate.notEmpty}`)
    .isString()
    .withMessage(`id ${validate.isString}`)
    .custom(validateId)
    .withMessage(`id ${validate.invalid}`),
  body('firstname')
    .trim()
    .notEmpty()
    .withMessage(`firstname ${validate.notEmpty}`)
    .isString()
    .withMessage(`firstname ${validate.isString}`),
  body('lastname')
    .trim()
    .notEmpty()
    .withMessage(`lastname ${validate.notEmpty}`)
    .isString()
    .withMessage(`lastname ${validate.isString}`),
  body('gender')
    .trim()
    .notEmpty()
    .withMessage(`gender ${validate.notEmpty}`)
    .isString()
    .withMessage(`gender ${validate.isString}`),
  body('birthday')
    .trim()
    .notEmpty()
    .withMessage(`birthday ${validate.notEmpty}`)
    .isISO8601().toDate()
    .withMessage(`birthday ${validate.isDate}`),
  body('class')
    .trim()
    .notEmpty()
    .withMessage(`class ${validate.notEmpty}`)
    .isString()
    .withMessage(`class ${validate.isString}`),
  body('contact.phone.*')
    .trim()
    .notEmpty()
    .withMessage(`phone number ${validate.notEmpty}`)
    .isString()
    .withMessage(`phone number ${validate.isString}`)
    .custom(validatePhoneNumber)
    .withMessage(`phone number ${validate.invalid}`),
  body('contact.zipcode')
    .trim()
    .notEmpty()
    .withMessage(`zipcode ${validate.notEmpty}`)
    .isString()
    .withMessage(`zipcode ${validate.isString}`),
  body('gpa.*.grade')
    .trim()
    .notEmpty()
    .withMessage(`grade ${validate.notEmpty}`)
    .isInt()
    .withMessage(`grade ${validate.isInt}`),
  body('gpa.*.gpa')
    .trim()
    .notEmpty()
    .withMessage(`gpa ${validate.notEmpty}`)
    .isFloat()
    .withMessage(`gpa ${validate.isFloat}`),
  body('club.*')
    .trim()
    .notEmpty()
    .withMessage(`club ${validate.notEmpty}`)
    .isString()
    .withMessage(`club ${validate.isString}`),
]

export default validateFieldsList
