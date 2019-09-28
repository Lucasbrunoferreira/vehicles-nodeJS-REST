const Router = require('express').Router
const vehicles = require('./routes/vehicle')

module.exports = () => {
  const app = Router()

  vehicles(app)

  return app
}
