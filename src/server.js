const environment = require('./config/environment')
const Logger = require('./config/logger')
const express = require('express')

async function startServer () {
  const app = express()

  await require('./config')({ expressApp: app })

  app.listen(environment.port, (err) => {
    if (err) {
      Logger.error(err)

      process.exit(1)

      return
    }

    Logger.info(`Server is running on port: ${environment.port}`)
  })
}

startServer()
