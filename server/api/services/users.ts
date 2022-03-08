import DB from '../models'
import { UserNotFoundError } from '../types/errors'
import { UserDocumentModel, IUser } from '../types/models'
import { UserCredentials } from '../types/requests'
import { comparePasswords, hashPassword } from '../utils/cipher'
import logger from '../utils/logger'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const createUser = async (user: IUser) => {
  const newUser = await DB.User.create({
    name: user.name,
    email: user.email,
    password: hashPassword(user.password)
  })
  return newUser
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getUserByEmailAndPassword = async (credentials: UserCredentials): Promise<UserDocumentModel> => {
  const user = await DB.User.findOne({
    email: credentials.email
  })

  if (user !== null && comparePasswords(credentials.password, user.password)) {
    return user
  }
  throw new UserNotFoundError()
}

const deleteUserById = async (id: string): Promise<boolean> => {
  try{
    await DB.User.findByIdAndRemove(id)
    return true
  }
  catch(err){
    logger.error('User delete failed' + JSON.stringify(err))
    return false;
  }
}
export default {
  createUser,
  getUserByEmailAndPassword,
  deleteUserById
}
