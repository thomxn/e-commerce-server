import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import logger from '../utils/logger'
import productService from '../services/products'
import { successResponse, errorResponse } from '../utils/response'
import { ProductFilters } from '../types/requests'

const getProducts = async (req: Request, res: Response): Promise<Response> => {
  try {
    logger.debug(req.headers)
    console.log(req.query)
    const requestBody: ProductFilters = req.query
    const products = await productService.getProducts(requestBody)

    return successResponse(res, StatusCodes.OK, products)
  } catch (err) {
    console.error(err)
    return errorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

export default {
  getProducts
}
