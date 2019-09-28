const dotenv = require('dotenv')

const envFound = dotenv.config()

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if (!envFound) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️")
}

module.exports = {
  port: parseInt(process.env.PORT, 10) || 8080,

  databaseConfig: {
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || '',
    host: process.env.DATABASE_HOST || '127.0.0.1',
    port: process.env.DATABASE_PORT || 3306,
    db: process.env.DATABASE || 'VehiclesDatabase'
  },

  api: {
    prefix: '/api',
    version: 1.0
  },

  logs: {
    level: process.env.LOG_LEVEL || 'silly'
  }
}
