import config from '../config'
import logger from './logger'
import { createClient } from 'redis'

const createRedisClient = async (): Promise<any> => {
  const client = createClient({
    url: `redis://${config.redis.host}:${config.redis.port}`,
    password: config.redis.password
  })

  client.on('error', (err) => logger.error('Redis client Error', err))
  await client.connect()
  client.on('connect', () => logger.info('Redis connected'))
  return client
}

export default createRedisClient
