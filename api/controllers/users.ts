import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import logger from '../utils/logger'
import userService from '../services/users'
import { successResponse, errorResponse } from '../utils/response'
import { IUser } from '../types/models'
import { UserCredentials } from '../types/requests'
import { UserNotFoundError } from '../types/errors'
import { LoginResponse } from '../types/responses'
import { generateJWToken } from '../utils/jwt'

const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    logger.debug(req.headers)
    const requestBody: IUser = req.body
    const newUser = await userService.createUser(requestBody)

    return successResponse(res, StatusCodes.CREATED, newUser)
  } catch (err) {
    logger.error(err)
    return errorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    logger.debug(req.headers)
    const requestBody: UserCredentials = req.body
    const user = await userService.getUserByEmailAndPassword(requestBody)
    const loginResponse: LoginResponse = {
      _id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      token: generateJWToken(user)
    }

    return successResponse(res, StatusCodes.OK, loginResponse)
  } catch (err) {
    logger.error('login failed ' + JSON.stringify(err))
    if (err instanceof UserNotFoundError) {
      return errorResponse(res, StatusCodes.UNAUTHORIZED, {
        message: 'Invalid email/password'
      })
    }
    return errorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

export default {
  createUser,
  login
}
