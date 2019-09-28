const status = require('./statusCode').default

class HttpError extends Error {
  constructor (message, statusCode) {
    super()
    this.message = message
    this.statusCode = statusCode || status.INTERNAL_ERROR
  }
}

module.exports = HttpError
