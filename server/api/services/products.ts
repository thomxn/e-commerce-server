import DB from '../models'
import { BaseProduct, ProductDocumentModel } from '../types/models'
import { ProductFilters } from '../types/requests'
import logger from '../utils/logger'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getProducts = async (filterOptions: ProductFilters): Promise<ProductDocumentModel[]> => {
  const queryFilters = prepareProductfilters(filterOptions)
  const productAggregation: any[] = []

  // Push filters only if it exists
  if (queryFilters !== null) {
    productAggregation.push({
      $match: queryFilters
    })
  }
  // Latest item first
  productAggregation.push({
    $sort: {
      _id: -1
    }
  })

  productAggregation.push({
    $project: {
      title: 1,
      displayImage: '$display_image',
      description: 1,
      brand: 1,
      category: 1,
      tags: 1,
      available: 1,
      isBestSeller: '$is_best_seller',
      price: 1
    }
  })

  const products = await DB.Product.aggregate(productAggregation)

  return products
}
const getProductById = async (id: string): Promise<ProductDocumentModel | null> => {
  return await DB.Product.findById(id)
}

const prepareProductfilters = (options: ProductFilters): any => {
  const filters: any = {
    $and: []
  }

  if (options.title !== undefined && options.title !== '') {
    filters.$and.push({
      title: {
        $regex: new RegExp(options.title, 'i')
      }
    })
  }

  if (options.brand !== undefined && options.brand !== '') {
    filters.$and.push({
      brand: new RegExp(options.brand, 'i')
    })
  }

  if (options.category !== undefined && options.category !== '') {
    filters.$and.push({ category: new RegExp(options.category, 'i') })
  }

  if (options.tags !== undefined && options.tags.length !== 0) {
    filters.$and.push({
      tags: {
        $in: options.tags.split(',').map(tag => tag.trim())
      }
    })
  }

  // Safely handle false
  if (typeof options.available === 'boolean') {
    filters.$and.push({ available: options.available })
  }

  if (typeof options.isBestSeller === 'boolean') {
    filters.$and.push({ is_best_seller: options.isBestSeller })
  }

  if (typeof options.price === 'number') {
    filters.$and.push({
      'price.value': {
        $gte: options.price
      }
    })
  }

  logger.debug(JSON.stringify(filters))

  return filters.$and.length !== 0 ? filters : null
}

export const formatProduct = (product: ProductDocumentModel): BaseProduct => {
  return {
    id: product.id,
    title: product.title,
    displayImage: product.displayImage,
    description: product.description,
    brand: product.brand,
    category: product.category,
    tags: product.tags,
    available: product.available,
    isBestSeller: product.isBestSeller,
    price: {
      currency: product.price.currency,
      value: product.price.value
    }
  }
}

export default {
  getProducts,
  getProductById,
  formatProduct
}
