import { Router } from 'express'
import userController from '../../controllers/users'
import { createUserValidator } from '../../validators/users'
import validator from '../../validators'

const baseRouter = Router()

baseRouter.route('/')
  .post(validator(createUserValidator), userController.createUser)
baseRouter.route('/login')
  .post(userController.login)

export default baseRouter
