import { Schema, model } from 'mongoose'

interface PriceInterface {
  currency: string
  value: number
}
interface ProductInterface {
  title: string
  display_image?: string
  description: string
  brand: string
  category: string
  tags?: string[]
  available: boolean
  is_best_seller?: boolean
  price: PriceInterface

}

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
      required: false
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
      reqiured: false
    },
    price: priceSchema
  },
  {
    timestamps: true
  }
)

const Product = model<ProductInterface>('User', productSchema)

export default Product
