import mongoose from 'mongoose'
import logger from '../utils/logger'

// const env = config.nodeEnv

const initDB = (): void => {
  mongoose.connect('mongodb://root:root@localhost:27017', {
    dbName: 'ecommerce'
  })
    .then(() => {
      logger.info('DB initialised!')
    })
    .catch(err => {
      console.error('DB initialisation failed' + JSON.stringify(err))
    })
}

export default initDB
