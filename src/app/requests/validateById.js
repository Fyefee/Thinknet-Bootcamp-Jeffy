import { param } from 'express-validator'
import validate from '../../resources/validateMessages'

const validateFieldsList = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage(`id ${validate.notEmpty}`),
]

export default validateFieldsList
