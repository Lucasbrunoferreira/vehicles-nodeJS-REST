module.exports = {
  INVALID_TYPE: (type) => `This field must be entered as ${type}.`,
  INVALID_LENGTH: (isMax, count) => `The field must be ${count} characters or ${isMax ? 'more' : 'less'}.`,
  EMPTY_ERROR: 'This field must be not empty.'
}
