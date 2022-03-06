import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { verifyJWToken } from './jwt'

import { errorResponse } from './response'

const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    if (req.headers.authorization === null || req.headers.authorization === '') {
      return errorResponse(res, StatusCodes.UNAUTHORIZED, {
        message: 'Invalid / Missing token'
      })
    }

    const verifiedToken = verifyJWToken(req.headers.authorization as string)
    Object.assign(req.user, verifiedToken)

    next()
    return
  } catch (err) {
    return errorResponse(res, StatusCodes.UNAUTHORIZED, {
      message: 'Invalid / Missing token'
    })
  }
}

export default authenticate
