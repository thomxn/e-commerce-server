import config from '../config'
import logger from './logger'
import { createClient } from 'redis'

const createRedisClient = async (): Promise<any> => {
  const connectionString = `redis://${config.redis.host}:${config.redis.port}`
  logger.debug('Redis connection URI ' + connectionString)

  const client = createClient({
    url: connectionString,
    password: config.redis.password
  })
  await client.connect()

  client.on('error', (err) => logger.error('Redis client Error', err))
  client.on('connect', () => logger.info('Redis connected'))
  return client
}

export default createRedisClient
