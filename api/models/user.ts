import { Schema, model } from 'mongoose'
import { IUser } from '../types/models'

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export interface UserDocument extends IUser, Document {}
// const User = model<UserDocument>('User', UserSchema)

export default model<IUser>('User', UserSchema)
