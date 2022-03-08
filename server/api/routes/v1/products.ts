import { Router } from 'express'
import productController from '../../controllers/products'
import validator from '../../validators'
import { getProductsValidator, getProductValidator } from '../../validators/products'

// import authenticate from '../../utils/authentication'

const baseRouter = Router()

baseRouter.route('/')
  .get(validator(getProductsValidator), productController.getProducts)

baseRouter.route('/:id')
  .get(validator(getProductValidator), productController.getProduct)

export default baseRouter
