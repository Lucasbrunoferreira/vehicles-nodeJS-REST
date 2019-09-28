const messages = require('../../utils/validationsMessages')

module.exports = {
  vehicle: {
    isEmpty: {
      negated: true,
      errorMessage: messages.EMPTY_ERROR
    },
    isLength: {
      errorMessage: messages.INVALID_LENGTH(true, 30),
      options: { max: 30 }
    }
  },
  brand: {
    isEmpty: {
      negated: true,
      errorMessage: messages.EMPTY_ERROR
    },
    isLength: {
      errorMessage: messages.INVALID_LENGTH(true, 20),
      options: { max: 20 }
    }
  },
  year: {
    isInt: {
      errorMessage: messages.INVALID_TYPE('integer')
    }
  },
  description: {
    isLength: {
      errorMessage: messages.INVALID_LENGTH(true, 100),
      options: { max: 100 }
    }
  },
  sold: {
    isBoolean: {
      errorMessage: messages.INVALID_TYPE('boolean')
    },
    isEmpty: {
      negated: true,
      errorMessage: messages.EMPTY_ERROR
    }
  }
}
