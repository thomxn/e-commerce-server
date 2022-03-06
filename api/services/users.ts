import User from '../models/user'
import { UserNotFoundError } from '../types/errors'
import { UserDocumentModel, IUser } from '../types/models'
import { UserCredentials } from '../types/requests'
import { comparePasswords, hashPassword } from '../utils/cipher'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const createUser = async (user: IUser) => {
  const newUser = await User.create({
    name: user.name,
    email: user.email,
    password: hashPassword(user.password)
  })
  return newUser
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getUserByEmailAndPassword = async (credentials: UserCredentials): Promise<UserDocumentModel> => {
  const user = await User.findOne({
    email: credentials.email
  })

  if (user !== null && comparePasswords(credentials.password, user.password)) {
    return user
  }
  throw new UserNotFoundError()
}

export default {
  createUser,
  getUserByEmailAndPassword
}
