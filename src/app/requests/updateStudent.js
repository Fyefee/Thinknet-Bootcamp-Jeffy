import { param, body } from 'express-validator'
import validate from '../../resources/validateMessages'

const validatePhoneNumber = (value, { req }) => {
  const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (value.match(phoneno)) {
    return true;
  }
  return false;
}

const validateFieldsList = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage(`id ${validate.notEmpty}`),
  body('firstname')
    .optional()
    .trim()
    .isString()
    .withMessage(`firstname ${validate.isString}`),
  body('lastname')
    .optional()
    .trim()
    .isString()
    .withMessage(`lastname ${validate.isString}`),
  body('gender')
    .optional()
    .trim()
    .isString()
    .withMessage(`gender ${validate.isString}`),
  body('birthday')
    .optional()
    .trim()
    .isISO8601().toDate()
    .withMessage(`birthday ${validate.isDate}`),
  body('class')
    .optional()
    .trim()
    .isString()
    .withMessage(`class ${validate.isString}`),
  body('contact.phone.*')
    .optional()
    .trim()
    .isString()
    .withMessage(`phone number ${validate.isString}`)
    .custom(validatePhoneNumber)
    .withMessage(`phone number ${validate.invalid}`),
  body('contact.zipcode')
    .optional()
    .trim()
    .isString()
    .withMessage(`zipcode ${validate.isString}`),
  body('gpa.*.grade')
    .trim()
    .isInt()
    .withMessage(`grade ${validate.isInt}`)
    .if(body('gpa.*.gpa').exists())
    .notEmpty()
    .withMessage(`grade ${validate.notEmpty}`),
  body('gpa.*.gpa')
    .trim()
    .isFloat()
    .withMessage(`gpa ${validate.isFloat}`)
    .if(body('gpa.*.grade').exists())
    .notEmpty()
    .withMessage(`gpa ${validate.notEmpty}`),
  body('club.*')
    .optional()
    .trim()
    .isString()
    .withMessage(`club ${validate.isString}`),
]

export default validateFieldsList
