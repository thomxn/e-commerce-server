import { Schema, model } from 'mongoose'
import { IProduct } from '../types/models'

const priceSchema = new Schema({
  currency: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
})

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    display_image: {
      type: String,
      required: false,
      alias: 'displayImage'
    },
    description: {
      type: String,
      required: true
    },
    brand: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    tags: {
      type: [String],
      required: false
    },
    available: {
      type: Boolean,
      required: true
    },
    is_best_seller: {
      type: Boolean,
      reqiured: false,
      alias: 'isBestSeller'
    },
    price: priceSchema
  },
  {
    timestamps: true
  }
)

const Product = model<IProduct>('Product', productSchema)
export default Product
