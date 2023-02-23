import { check } from 'express-validator'
import { resultValidate } from '../helpers/validationHelper.js'

export const registerValidator = [
  check('name').exists().not().isEmpty(),
  check('lastname').exists().not().isEmpty(),
  check('username').exists().not().isEmpty(),
  check('password').exists().not().isEmpty().isLength({ min: 8 }).withMessage('must be at least 8 chars long'),
  check('email').exists().not().isEmpty().isEmail(),
  (req,res, next) => {
    resultValidate(req, res, next)
  }
]

export const loginValidator = [
  check('username').exists().not().isEmpty(),
  check('password').exists().not().isEmpty(),
  (req,res, next) => {
    resultValidate(req, res, next)
  }
]