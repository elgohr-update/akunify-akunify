import axios from 'axios'

// Utils
import isEmpty from 'utils/isEmpty'
import { listCookies } from 'utils/listCookies'
import { removeCredentials } from 'utils/removeCredentials'

// Methods
import { getRefreshToken } from './getRefreshToken'
import { getCookies, tracker } from './methods'
import dayjs from 'dayjs'

// Create a new instance of axios with a custom interceptors.
const httpClient = axios.create()

/**
 * Successful response using a token or no token
 * @param {Object} config
 * @param {String} token
 * @returns {Promise}
 */
const successResponse = (config: any, token: string): Promise<any> => {
  const isAuth = !isEmpty(token)

  return Promise.resolve({
    ...config,
    headers: {
      ...config.headers,
      ...(isAuth && { Authorization: `${token}` }),
    },
  })
}

/**
 * Get new refresh token then set cancel a request using a cancel token.
 * @param {Object} config
 * @returns {Promise}
 */
const setRefreshToken = async (config: any): Promise<any> => {
  // Get new refresh token then set cookies and set request headers auth.
  const newUserToken = await getRefreshToken()

  return successResponse(config, newUserToken)
}

/**
 * We can intercept requests or responses before they are handled by then or catch.
 * Reference: https://github.com/axios/axios#interceptors
 */

// Create custom request interceptor.
httpClient.interceptors.request.use(
  async (config) => {
    const source = axios.CancelToken.source()
    config.cancelToken = source.token

    // Get user token from cookie then result is string value.
    const userTokenCookie = getCookies.userToken()

    // Set default connection timeout to 60 seconds in case of slow connections
    setTimeout(() => {
      source.cancel()
    }, 60000)

    // Successful response using a token or no token
    return successResponse(config, userTokenCookie)
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Create custom response interceptor.
httpClient.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger.
    return response
  },
  async (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger.

    // Get config error
    const errConfig = error?.config || {}
    // Get error response status
    const errStatus = error?.response?.status
    // Get error unauthorized from response status
    const errorUnauthorized = errStatus === 401
    // check if user_token cookie existed
    const userToken = getCookies.userToken()
    // check if refresh_token cookie existed
    const refreshToken = getCookies.refreshToken()
    // check if token_expiration cookie existed
    const tokenExpiration = getCookies.tokenExpiration()
    // logic token expired check
    const isTokenExpired =
      errorUnauthorized &&
      userToken &&
      refreshToken &&
      (!tokenExpiration ||
        (tokenExpiration && dayjs().unix() > +tokenExpiration))

    // If request canceled then return error
    if (axios.isCancel(error)) return Promise.reject(error)

    // Check whether the error from validating the API token is not the API login.
    // Unauthorized error responses have two responses for example
    // when a login fails because of incorrect credentials and the token is invalid.
    if (isTokenExpired && !errConfig?.params?._isRetryRequest) {
      // Request can only be once
      const params = { ...(errConfig.params || {}), _isRetryRequest: 1 }

      // Send event token expired
      tracker.gtmTokenExpired(errConfig.url, errStatus)

      // Get new refresh token
      // set cookies and set request headers auth.
      // retry current 401 request
      try {
        const refreshedConfig = await setRefreshToken({ ...errConfig, params })
        return axios(refreshedConfig)
        // eslint-disable-next-line no-empty
      } catch (err) {
        return Promise.reject(err)
      }
    }

    if (errorUnauthorized && !isTokenExpired) {
      removeCredentials(listCookies)
    }

    // Return any error which is not due to validate token back to the calling service.
    return Promise.reject(error)
  }
)

export default httpClient
