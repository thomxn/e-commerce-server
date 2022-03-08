import { UserDocumentModel } from '../types/models'
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../config'

export const generateJWToken = (user: UserDocumentModel): string => {
  return jwt.sign({
    _id: user._id,
    name: user.name,
    email: user.email
  },
  process.env.JWT_SECRET as string,
  {
    expiresIn: config.accessTokenExpiryInSeconds
  })
}

export const verifyJWToken = (token: string): JwtPayload | string => {
  return jwt.verify(token, process.env.JWT_SECRET as string)
}
