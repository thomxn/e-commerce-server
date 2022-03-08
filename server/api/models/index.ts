import mongoose from 'mongoose'
import config from '../config'
import logger from '../utils/logger'

import Product from './product'
import User from './user'

const { mongo: mongoConfig } = config

const initDB = (): void => {
  const connectionString = `mongodb://${mongoConfig.user}:${mongoConfig.password}@${mongoConfig.host}:${mongoConfig.port}`
  logger.debug('Mongo connection URI ' + connectionString)

  mongoose.connect(connectionString, {
    dbName: config.mongo.db
  })
    .then(() => {
      logger.info('DB initialised!')
    })
    .catch(err => {
      logger.error('DB initialisation failed' + JSON.stringify(err))
    })
}

const closeMongoConnection = (): void => {
  void mongoose.connection.close()
}

initDB()

process.on('exit', closeMongoConnection)
process.on('SIGUSR1', closeMongoConnection)
process.on('SIGUSR2', closeMongoConnection)

export default {
  User,
  Product
}
