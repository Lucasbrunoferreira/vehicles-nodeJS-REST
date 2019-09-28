const expressLoader = require('./express')
// const verifyDatabase = require('./database').verifyDatabaseConnection
const Logger = require('./logger')

module.exports = async ({ expressApp }) => {
  // await verifyDatabase()

  Logger.info('✌️ Database loaded and connected!')

  await expressLoader({ app: expressApp })

  Logger.info('✌️ Express loaded')
}
