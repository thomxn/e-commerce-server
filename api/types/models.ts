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
