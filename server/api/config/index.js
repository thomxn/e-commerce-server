const { config } = require('dotenv')
// Written in JS to ensure compatibility with seqielize-cli without requiring to build first

config()

module.exports = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT) || 7000,
  logConfig: {
    folder: process.env.LOG_PATH || './logs/',
    file: process.env.LOG_FILE || 'server-log-%DATE%.log',
    level: process.env.LOG_LEVEL || 'silly' // Change this to info in production. IMPORTANT!
  },
  passwordSaltRounds: 8,
  accessTokenExpiryInSeconds: 3600,
  mongo: {
    db: process.env.MONGO_DBNAME || 'ecommerce',
    port: process.env.MONGO_PORT || 27017,
    user: process.env.MONGO_USERNAME || 'root',
    password: process.env.MONGO_PASSWORD || 'root',
    host: process.env.MONGO_HOST || 'mongodb'
  },
  redis: {
    host: process.env.REDIS_HOST || 'redisdb',
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASS
  }
}
