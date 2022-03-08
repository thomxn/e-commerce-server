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

const User = model<IUser>('User', UserSchema)

export default User
