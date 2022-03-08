import { UserDocumentModel } from './models'

declare global{
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user: UserIdentityToken
    }
  }
}
export interface UserCredentials extends Pick<UserDocumentModel, 'email' | 'password'> {}

export interface UserIdentityToken extends Pick<UserDocumentModel, '_id' | 'name' | 'email' | 'createdAt' | 'updatedAt'> {}

export interface ProductFilters {
  title?: string
  brand?: string
  rating?: number
  category?: string
  tags?: string
  available?: boolean
  isBestSeller?: boolean
  price?: number
}
