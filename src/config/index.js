const expressLoader = require('./express')
const database = require('../persistence/models')
const Logger = require('./logger')

module.exports = async ({ expressApp }) => {
  await database.sequelize.authenticate()

  Logger.info('✌️ Database loaded and connected!')

  await expressLoader({ app: expressApp })

  Logger.info('✌️ Express loaded')
}
