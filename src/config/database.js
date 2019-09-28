const databaseConfig = require('./environment').databaseConfig

const sequelizeConfig = {
  'username': databaseConfig.user,
  'password': databaseConfig.password,
  'database': databaseConfig.db,
  'host': databaseConfig.host,
  'dialect': 'mysql'
}

module.exports = sequelizeConfig
