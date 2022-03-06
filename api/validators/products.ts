import { query } from 'express-validator'

const MAX_CHARS = 2048

export const getProductsValidator = [
  query('title')
    .optional()
    .isLength({ max: MAX_CHARS })
    .withMessage('Value is too long '),
  query('brand')
    .optional()
    .isLength({ max: MAX_CHARS })
    .withMessage('Value is too long '),
  query('category')
    .optional()
    .isLength({ max: MAX_CHARS })
    .withMessage('Value is too long '),
  query('tags')
    .optional()
    .isLength({ max: MAX_CHARS })
    .withMessage('Value is too long '),
  query('price')
    .optional()
    .isFloat()
    .toFloat()
    .withMessage('Must be number'),
  query('available')
    .optional()
    .isBoolean().withMessage('Must be boolean')
    .toBoolean(),
  query('isBestSeller')
    .optional()
    .isBoolean().withMessage('Must be boolean')
    .toBoolean()
]
