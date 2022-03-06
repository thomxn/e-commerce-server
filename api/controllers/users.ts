import { Request, Response } from 'express'
import logger from '../utils/logger'
import userService from '../services/users'

const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    logger.info(req.headers)
    const response = await userService.createUser()

    logger.info(response.email)

    return res.status(201).send(response)
  } catch (err) {
    logger.error(err)
    return res.status(500).send(err)
  }
}

export default {
  createUser
}
