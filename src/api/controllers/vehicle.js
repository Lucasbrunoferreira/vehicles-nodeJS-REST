const statusCode = require('../../utils/statusCode')
const Logger = require('../../config/logger')

class VehicleController {
  constructor (vehicleModel) {
    this._vehicle = vehicleModel
  }

  async create (req, res) {
    try {
      const response = await this._vehicle.create(req.body)

      return res.status(statusCode.CREATED).json(response.dataValues)
    } catch (err) {
      Logger.error(err)

      return res.status(statusCode.INTERNAL_ERROR).json({ message: err.message })
    }
  }

  async fetchAll (req, res) {
    try {
      const response = await this._vehicle.findAll()

      return res.status(statusCode.OK).json(response)
    } catch (err) {
      Logger.error(err)

      return res.status(statusCode.INTERNAL_ERROR).json({ message: err.message })
    }
  }
}

module.exports = VehicleController
