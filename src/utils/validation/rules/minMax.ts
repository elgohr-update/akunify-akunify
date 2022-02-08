/**
 * Minimum and Maximum value validation
 */

 const minMax = {
  required: function (value: string, error: string): null | string {
    if (value !== null) {
      if (typeof value === 'string') {
        if (value.length > 0 && value.replace(/\s/g, '').length > 0) {
          return null
        } else {
          return error
        }
      } else if (typeof value === 'object') {
        if (Object.keys(value).length > 0) {
          return null
        }
      } else if (typeof value === 'number' && !value) {
        return error
      }

      return null
    }

    return error
  },
  looseRequired: function (value: string, error: string): null | string {
    if (value !== null) {
      if (typeof value === 'string') {
        if (value.length > 0 && value.replace(/\s/g, '').length > 0) {
          return null
        } else {
          return error
        }
      } else if (typeof value === 'object') {
        if (Object.keys(value).length > 0) {
          return null
        }
      } else if (typeof value === 'number' && +value < 0) {
        return error
      }

      return null
    }

    return error
  },
  minLength: function (
    minLength: number,
    value: string,
    error: string
  ): null | string {
    if (value.length >= minLength && value.replace(/\s/g, '').length > 0) {
      return null
    }
    return error
  },
  maxLength: function (
    maxLength: number,
    value: string,
    error: string
  ): null | string {
    if (value.length <= maxLength) {
      return null
    }
    return error
  },
  minValue: function (
    minValue: number,
    value: string,
    error: string
  ): null | string {
    if (Number(value) >= minValue) {
      return null
    }
    return error
  },
  maxValue: function (
    maxValue: number,
    value: string,
    error: string
  ): null | string {
    if (Number(value) <= maxValue) {
      return null
    }
    return error
  },
  min50k: function (value: string, error: string): null | string {
    return +value < 50000 ? error : null
  },
}

export default minMax