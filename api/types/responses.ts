import { UserDocumentModel } from './models'

export interface LoginResponse extends Pick<UserDocumentModel, '_id' |'name' | 'email' | 'createdAt' | 'updatedAt'> {
  token: string
}
