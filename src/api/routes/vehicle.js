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

  route.post('/', checkSchema(vehicleValidations), middlewareSchemaValidation, (req, res) => vehicleController.createOne(req, res))

  route.get('/', (req, res) => vehicleController.findAll(req, res))

  route.get('/search', (req, res) => vehicleController.findByQuery(req, res))

  route.get('/:vehicleID', (req, res) => vehicleController.findByID(req, res))

  route.delete('/:vehicleID', (req, res) => vehicleController.deleteByID(req, res))

  route.put('/:vehicleID', checkSchema(vehicleValidations), middlewareSchemaValidation, (req, res) => vehicleController.updateOne(req, res))

  route.patch('/:vehicleID', (req, res) => vehicleController.updateOnePartly(req, res))
}
