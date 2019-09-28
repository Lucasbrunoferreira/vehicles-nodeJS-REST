const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('../api')
const enviroment = require('./environment')

module.exports = ({ app }) => {
  app.use(cors())

  app.use(require('method-override')())

  app.use(bodyParser.json())

  app.use(enviroment.api.prefix, routes())
}
