import { query, param } from 'express-validator'

const MAX_CHARS = 2048

export const getProductsValidator = [
  query('title')
    .optional()
    .isLength({ max: MAX_CHARS })
    .withMessage('title is too long '),
  query('brand')
    .optional()
    .isLength({ max: MAX_CHARS })
    .withMessage('brand is too long '),
  query('category')
    .optional()
    .isLength({ max: MAX_CHARS })
    .withMessage('category is too long '),
  query('tags')
    .optional()
    .isLength({ max: MAX_CHARS })
    .withMessage('tags is too long '),
  query('price')
    .optional()
    .isFloat()
    .toFloat()
    .withMessage('price must be number'),
  query('available')
    .optional()
    .isBoolean().withMessage('available must be boolean')
    .toBoolean(),
  query('isBestSeller')
    .optional()
    .isBoolean().withMessage('isBestSeller must be boolean')
    .toBoolean()
]

export const getProductValidator = [
  param('id')
    .isLength({ min: 24, max: 24 }).withMessage('id must be 24 character hex value')
]
