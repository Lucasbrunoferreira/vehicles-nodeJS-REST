const Router = require('express').Router
const VehicleControler = require('../controllers/vehicle')
const { Vehicles } = require('../../persistence/models')

const { checkSchema } = require('express-validator')
const vehicleValidations = require('../validators/vehicle')
const middlewareSchemaValidation = require('../middlewares/schemaValidation')

const route = Router()

const vehicleController = new VehicleControler(Vehicles)

module.exports = (app) => {
  app.use('/vehicles', route)

  route.post('/', checkSchema(vehicleValidations), middlewareSchemaValidation, (req, res) => vehicleController.create(req, res))

  route.get('/', (req, res) => vehicleController.fetchAll(req, res))
}
