import { stringify } from 'query-string'
import isEmpty from 'utils/isEmpty'

interface QueryStringInterface {
  slug?: string
  utm_campaign?: string
  utm_content?: string
  utm_medium?: string
  utm_source?: string
}

const getQueryString = (queryParams: QueryStringInterface): string => {
  return !isEmpty(queryParams) ? `?${stringify(queryParams)}` : ''
}

export default getQueryString
