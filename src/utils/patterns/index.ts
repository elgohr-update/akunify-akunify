import { regexEmail, regexName, regexPhoneNumber } from './regex'

const isEmail = (value: string): boolean => {
  return regexEmail.test(value)
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const isWhatsapp = (value: any): boolean => {
  if (
    value.startsWith('+62') === true ||
    value.startsWith(62) === true ||
    value.startsWith(0) === true
  ) {
    const resultTrim = value.replace(/\+/g, '')
    if (!isNaN(parseFloat(resultTrim)) && isFinite(resultTrim)) {
      return regexPhoneNumber.test(value)
    }
  }

  return false
}

const isName = (value: string): boolean => {
  return regexName.test(value)
}

const isNumber = (value: string): boolean => {
  const num = Number(value)

  if (typeof num === 'number' && !isNaN(num) && typeof value !== 'boolean') {
    return true
  }

  return false
}

export { isEmail, isWhatsapp, isName, isNumber }