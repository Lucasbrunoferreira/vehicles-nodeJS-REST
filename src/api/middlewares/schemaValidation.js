const { validationResult } = require('express-validator')
const statusCode = require('../../utils/statusCode')

const validateVehicle = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(statusCode.BAD_REQUEST).json({ errors: errors.array() })
  } else {
    next()
  }
}

module.exports = validateVehicle
