const statusCode = require('../../utils/statusCode')
const Logger = require('../../config/logger')
const validationsMessages = require('../../utils/validationsMessages')
const sequelizeOP = require('sequelize').Op

class VehicleController {
  constructor (vehicleModel) {
    this._vehicle = vehicleModel
  }

  async createOne (req, res) {
    try {
      const response = await this._vehicle.create(req.body)

      return res.status(statusCode.CREATED).json(response.dataValues)
    } catch (err) {
      Logger.error(err)

      return res.status(statusCode.INTERNAL_ERROR).json({ message: err.message })
    }
  }

  async findAll (req, res) {
    try {
      const vehicles = await this._vehicle.findAll()

      return res.status(statusCode.OK).json(vehicles)
    } catch (err) {
      Logger.error(err)

      return res.status(statusCode.INTERNAL_ERROR).json({ message: err.message })
    }
  }

  async findByID (req, res) {
    try {
      const { vehicleID } = req.params

      const vehicle = await this._vehicle.findOne({ where: { id: vehicleID } })

      if (!vehicle) {
        return res.status(statusCode.NO_CONTENT).end()
      }

      return res.status(statusCode.OK).json(vehicle)
    } catch (err) {
      return res.status(statusCode.INTERNAL_ERROR).json({ message: err.message })
    }
  }

  async findByQuery (req, res) {
    try {
      let query = {}

      Object.entries(req.query).forEach(async queryItem => {
        query = {
          [queryItem[0]]: { [sequelizeOP.like]: queryItem[1] },
          ...query
        }
      })

      const result = await this._vehicle.findAll({ where: query })

      return res.status(statusCode.OK).json(result)
    } catch (err) {
      return res.status(statusCode.INTERNAL_ERROR).json({ message: err.message })
    }
  }

  async deleteByID (req, res) {
    try {
      const { vehicleID } = req.params

      const vehicleToDelete = await this._vehicle.findOne({ where: { id: vehicleID } })

      if (!vehicleToDelete) {
        return res.status(statusCode.BAD_REQUEST).json({ message: validationsMessages.VEHICLE_NOT_FOUND })
      }

      await this._vehicle.destroy({ where: { id: vehicleID } })

      return res.status(statusCode.OK).end()
    } catch (err) {
      return res.status(statusCode.INTERNAL_ERROR).json({ message: err.message })
    }
  }

  async updateOne (req, res) {
    try {
      const { vehicleID } = req.params

      const vehicleToUpdate = await this._vehicle.findOne({ where: { id: vehicleID } })

      if (!vehicleToUpdate) {
        return res.status(statusCode.BAD_REQUEST).json({ message: validationsMessages.VEHICLE_NOT_FOUND })
      }

      await this._vehicle.update(req.body, { where: { id: vehicleID } })

      return res.status(statusCode.OK).end()
    } catch (err) {
      return res.status(statusCode.INTERNAL_ERROR).json({ message: err.message })
    }
  }

  async updateOnePartly (req, res) {
    try {
      const { vehicleID } = req.params
      const vehicleData = req.body

      const vehicleToUpdate = await this._vehicle.findOne({ where: { id: vehicleID } })

      if (!vehicleToUpdate) {
        return res.status(statusCode.BAD_REQUEST).json({ message: validationsMessages.VEHICLE_NOT_FOUND })
      }

      await this._vehicle.update(vehicleData, { where: { id: vehicleID } })

      return res.status(statusCode.OK).end()
    } catch (err) {
      return res.status(statusCode.INTERNAL_ERROR).json({ message: err.message })
    }
  }
}

module.exports = VehicleController
