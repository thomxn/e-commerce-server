import User from '../models/user'
// import { IUser } from '../types/models'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const createUser = async () => {
  const newUser = await User.create({
    name: 'Joe Freeman',
    email: 'jj@man.com',
    password: '!@QWDF'
  })
  return newUser
}

export default {
  createUser
}
