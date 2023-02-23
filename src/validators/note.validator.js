import { check } from 'express-validator'
import { resultValidate } from '../helpers/validationHelper.js'

export const noteValidator = [
  check('content').exists().not().isEmpty().isString(),
  check('important').optional().isBoolean(),
  (req,res, next) => {
    resultValidate(req, res, next)
  }
]