import { Document, Types } from 'mongoose'

export interface TimeStamps {
  createdAt: string
  updatedAt: string
}
export interface IUser extends TimeStamps {
  name: string
  email: string
  password: string
}

export type UserDocumentModel = Document<unknown, any, IUser> & IUser & {
  _id: Types.ObjectId
}

// ----- Products -----

export interface PriceInterface {
  currency: string
  value: number
}
export interface IProduct {
  title: string
  displayImage?: string
  description: string
  brand: string
  category: string
  tags?: string[]
  available: boolean
  isBestSeller?: boolean
  price: PriceInterface

}

export interface BaseProduct extends IProduct {
  id: string
}
export type ProductDocumentModel = Document<unknown, any, IProduct> & IProduct & {
  _id: Types.ObjectId
}
