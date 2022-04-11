import getQueryString from 'utils/getQueryString'
import { ParsedQuery } from 'query-string'
import isEmpty from 'utils/isEmpty'

const generateApplinkQuery = (
  query?: ParsedQuery,
  isAndroid?: boolean
): string => {
  if (isEmpty(query) || !query) return ''

  const result: object = {}

  const filtered = !isAndroid
    ? Object.keys(query).filter((key) => key.includes('utm'))
    : Object.keys(query).filter(
        (key) => key.includes('utm') || key === 'auto_open_create_donation'
      )

  filtered.forEach((value) => {
    if (filtered.includes(value))
      Object.assign(result, { [value]: query[value] })
  })

  return !isEmpty(filtered) ? getQueryString(result) : ''
}

export { generateApplinkQuery }
