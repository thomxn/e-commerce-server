import mongoose from 'mongoose'
import config from '../config'
import logger from '../utils/logger'

// const env = config.nodeEnv

const { mongo: mongoConfig } = config

const initDB = (): void => {
  console.log('URL', `mongodb://${mongoConfig.user}:${mongoConfig.password}@${mongoConfig.host}:${mongoConfig.port}`)
  mongoose.connect(`mongodb://${mongoConfig.user}:${mongoConfig.password}@${mongoConfig.host}:${mongoConfig.port}`, {
    dbName: config.mongo.db
  })
    .then(() => {
      logger.info('DB initialised!')
    })
    .catch(err => {
      console.error('DB initialisation failed' + JSON.stringify(err))
    })
}

export default initDB
