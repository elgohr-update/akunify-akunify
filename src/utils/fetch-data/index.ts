// eslint-disable @typescript-eslint/explicit-function-return-type
import { Method } from 'axios'
import httpClient from './httpClient'
import { getBaseAPI, getHeaders } from './methods'

interface IAuthParams {
  token?: string
}

interface IBasicAuth {
  username: string
  password: string
}

interface FetchDataProps {
  apiHost?: string
  url: string
  method?: Method
  auth?: IAuthParams
  basicAuth?: IBasicAuth
  data?: any
  headers?: Record<string, unknown>
  contentType?: string
  accept?: string
  writeCookie?: boolean
}

export const fetchData = async ({
  apiHost = getBaseAPI(),
  url,
  method = 'GET',
  auth = {},
  basicAuth = { username: '', password: '' },
  data,
  headers = {},
  contentType = 'application/json',
  accept = 'application/json',
  writeCookie = false,
}: FetchDataProps) => {
  try {
    const isBasicAuth = basicAuth?.username !== '' && basicAuth?.password !== ''
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
          writeCookie,
        }),
      },
      ...(isBasicAuth && {
        auth: {
          username: basicAuth?.username,
          password: basicAuth?.password,
        },
      }),
    })
    return response
  } catch (error) {
    throw error
  }
}
