import { Router } from 'express'
import userController from '../../controllers/users'
// import authenticate from '../../utils/authentication'

const baseRouter = Router()

baseRouter.route('/')
  .post(userController.createUser)

export default baseRouter
