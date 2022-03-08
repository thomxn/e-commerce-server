import { body } from 'express-validator'

//TODO: Read constraints from config
export const createUserValidator = [
  body('name')
    .exists().withMessage('Please specify name')
    .isLength({ max: 100 }).withMessage('name is too long '),
    body('password')
    .exists().withMessage('Please specify name')
    .isLength({ min: 6, max: 100 }).withMessage('Password length should be between 6 and 100'),
    body('email')
    .exists().withMessage('Please specify name')
    .isEmail().withMessage('Invalid email format')
    .isLength({ max: 50 }).withMessage('email is too long'),
]
