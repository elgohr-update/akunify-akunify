import axios from 'axios'

// Utils
import expirationDate from 'utils/expirationDate'
import { promiseTimeout } from 'utils/promises'
import { listCookies } from 'utils/listCookies'
import { removeCredentials } from 'utils/removeCredentials'
import { getBackpackrHeader } from 'utils/backpackrApiHelper'

// Methods
import { setCookies, getCookies, tracker } from './methods'

// Geni Base URL
const GENI_API = process.env.GENI_API

// Create a new instance of axios with a custom interceptors.
// Created a new instance because it is not polluted with
// other instances (independent).
const refresh = axios.create()

// Create custom response interceptor.
// if it fails to get the refresh token then it will repeat getting
// the refresh token up to three times.
refresh.interceptors.response.use(
  (config) => config,
  async (err) => {
    const req = err.config
    const retried = +req?.params._retry || 0
    if (retried < 3) {
      await promiseTimeout(2000)
      const _retry = retried + 1
      const params = { ...(req.params || {}), _retry }
      return refresh.request({ ...req, params })
    }
    removeCredentials(listCookies)
    return Promise.reject(err)
  }
)

/**
 * callRefreshToken is function to get new user token, refresh token
 * and expired token from API
 * @param {String} oldUserToken
 * @param {String} oldRefreshToken
 * @returns {Promise}
 */
const callRefreshToken = (_oldUserToken: string, oldRefreshToken: string) => {
  // Send event when refreshing token
  tracker.gtmRefreshingToken()

  return refresh.request({
    baseURL: GENI_API,
    url: 'wong/refresh-token',
    method: 'POST',
    data: {
      refresh_token: oldRefreshToken,
    },
    headers: {
      ...getBackpackrHeader({
        platformName: 'kanvas',
      }),
    },
  })
}

let sequentialRequest: any = null

const clearSequentialRequest = () => {
  sequentialRequest = null
}

/**
 * The get refresh token is a function to get new user and refresh token
 * from API then set cookies and set headers authorization
 * @returns {String} If success return new user token
 * @returns {Promise} If error return promise error
 */
export const getRefreshToken = () => {
  // Get old refresh token from cookies
  const oldRefreshToken = getCookies.refreshToken()
  // Get old user token from cookies
  const oldUserToken = getCookies.userToken()

  // if the sequential request is not null then wait for it to finish,
  // otherwise a parallel request will occur and cause an error.
  if (!sequentialRequest) {
    sequentialRequest = callRefreshToken(oldUserToken, oldRefreshToken).then(
      (response) => {
        clearSequentialRequest()
        // Get status code
        const resStatus = +response?.status
        // Get endpoint url
        const resUrl = response?.config.url
        // Get new user token and refresh token
        const {
          token: newUserToken,
          refresh_token: newRefreshToken,
          expired_in: expiredIn,
        } = response?.data?.data[0] || {}

        // Send event if refresh token success
        tracker.gtmRefreshTokenSuccess(resUrl, resStatus)

        // Get new expired token
        const expires = expirationDate()

        // Set cookies new user token and refresh token
        setCookies.userToken(newUserToken, expires)
        setCookies.refreshToken(newRefreshToken, expires)
        setCookies.tokenExpiration(expiredIn, expires)
        // If success return new user token
        return newUserToken
      },
      (err) => {
        clearSequentialRequest()

        // Send event if autologout
        tracker.gtmAutoLogout()

        return Promise.reject(err)
      }
    )
  }

  return sequentialRequest
}
