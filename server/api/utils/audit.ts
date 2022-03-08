import { Request, NextFunction } from 'express'
import { v4 as uuidv4 } from 'uuid'
import logger from './logger'
import createRedisClient from './redis'

const audit = async (req: Request, _, next: NextFunction): Promise<void> => {
  try {
    const id = uuidv4()
    const client = await createRedisClient()
    client.set(
      'req/' + id + req.originalUrl,
      JSON.stringify({
        headers: req.header,
        query: req.query,
        body: req.body
      })
    )

    next()
  } catch (err) {
    logger.error('Redis save error' + JSON.stringify(err))
    next()
  }
}

export default audit
