// eslint-disable @typescript-eslint/explicit-function-return-type
import { Method } from 'axios'
import httpClient from './httpClient'
import { getBaseAPI, getHeaders } from './methods'

interface IAuthParams {
  token?: string
  username?: string
  password?: string
}

interface FetchDataProps {
  apiHost?: string
  url: string
  method?: Method
  auth?: IAuthParams
  data?: any
  headers?: Record<string, unknown>
  contentType?: string
  accept?: string
  version?: string
  writeCookie?: boolean
}

export const fetchData = async ({
  apiHost = getBaseAPI(),
  url,
  method = 'GET',
  auth = {},
  data,
  headers = {},
  contentType = 'application/x-www-form-urlencoded',
  accept = 'application/json',
  version = '3.4.0',
  writeCookie = false,
}: FetchDataProps) => {
  try {
    const response = await httpClient({
      baseURL: apiHost,
      url: url,
      method: method,
      withCredentials: writeCookie,
      data: data,
      headers: {
        ...getHeaders({
          auth,
          accept,
          additionalHeaders: headers,
          contentType,
          version,
          writeCookie,
        }),
      },
    })
    return response
  } catch (error) {
    throw error
  }
}
