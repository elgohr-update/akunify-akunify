import Cookies from 'universal-cookie'
import nookies from 'nookies'

// Constants
import cookieKey from 'constants/cookie'

// Utils
import isEmpty from 'utils/isEmpty'
import getShareableCookieDomain from 'utils/getShareableCookieDomain'
import { eventTracker } from 'utils/eventTracker'
import dayjs from 'dayjs'

const cookies = new Cookies()

interface IGetHeader {
  auth?: {
    token?: string
  }
  accept?: string
  additionalHeaders?: Record<string, any>
  contentType?: string
  version?: string | Record<string, any>
  writeCookie?: boolean
}

export const getHeaders = ({
  auth,
  accept,
  additionalHeaders,
  contentType,
  version,
  writeCookie,
}: IGetHeader): Record<string, any> => {
  const isHaveAuth = !isEmpty(auth)
  const isHaveVersion = version === '0' || version !== ''
  const cookieHeader = {
    'X-Ktbs-Write-Cookie': writeCookie,
  }
  const defaultHeaders = {
    Accept: accept,
    'Content-Type': contentType,
    ...(isHaveAuth && {
      Authorization: `Bearer ${auth?.token}`,
    }),
    ...(isHaveVersion && {
      Version: version,
    }),
    ...additionalHeaders,
  }

  let headers = defaultHeaders

  if (writeCookie) {
    headers = { ...defaultHeaders, ...cookieHeader }
  }

  return headers
}

export const getBaseAPI = (): string => {
  let baseApi = `${process.env.BASE_API}`
  const serverHost = process.env.SERVER_HOST

  if (
    !process.browser &&
    process.env.NODE_ENV !== 'test' &&
    !serverHost?.includes('kitabisa.local')
  ) {
    baseApi = `${process.env.INTERNAL_API_HOST}`
  }

  return baseApi
}

export const getCookies = {
  refreshToken: (): string => {
    if (!process.browser && global.ctx)
      return (nookies.get(global.ctx) || {})[cookieKey.REFRESH_TOKEN]
    return cookies.get(cookieKey.REFRESH_TOKEN)
  },
  userToken: (): string => {
    if (!process.browser && global.ctx)
      return (nookies.get(global.ctx) || {})[cookieKey.USER_TOKEN]
    return cookies.get(cookieKey.USER_TOKEN)
  },
  tokenExpiration: (): string => {
    if (!process.browser && global.ctx)
      return (nookies.get(global.ctx) || {})[cookieKey.TOKEN_EXPIRATION]
    return cookies.get(cookieKey.TOKEN_EXPIRATION)
  },
}

export const removeCookies = {
  userToken: (): void => {
    if (!process.browser && global.ctx) {
      const domain = getShareableCookieDomain(null, global.ctx.req)
      nookies.destroy(global.ctx, cookieKey.USER_TOKEN, {
        path: '/',
        domain,
      })
    } else {
      const domain = getShareableCookieDomain()
      cookies.remove(cookieKey.USER_TOKEN, {
        path: '/',
        domain,
      })
    }
  },
  refreshToken: (): void => {
    if (!process.browser && global.ctx) {
      const domain = getShareableCookieDomain(null, global.ctx.req)
      nookies.destroy(global.ctx, cookieKey.REFRESH_TOKEN, {
        path: '/',
        domain,
      })
    } else {
      const domain = getShareableCookieDomain()
      cookies.remove(cookieKey.REFRESH_TOKEN, {
        path: '/',
        domain,
      })
    }
  },
  userSecondaryId: (): void => {
    if (!process.browser && global.ctx) {
      const domain = getShareableCookieDomain(null, global.ctx.req)
      nookies.destroy(global.ctx, cookieKey.USER_SECONDARY_ID, {
        path: '/',
        domain,
      })
    } else {
      const domain = getShareableCookieDomain()
      cookies.remove(cookieKey.USER_SECONDARY_ID, {
        path: '/',
        domain,
      })
    }
  },
}

export const setCookies = {
  refreshToken: (token: string, expires: Date): void => {
    if (!process.browser && global.ctx) {
      const domain = getShareableCookieDomain(null, global.ctx.req)
      nookies.set(global.ctx, cookieKey.REFRESH_TOKEN, token, {
        path: '/',
        expires,
        domain,
      })
    } else {
      const domain = getShareableCookieDomain()
      cookies.set(cookieKey.REFRESH_TOKEN, token, {
        path: '/',
        expires,
        domain,
      })
    }
  },
  userToken: (token: string, expires: Date): void => {
    if (!process.browser && global.ctx) {
      const domain = getShareableCookieDomain(null, global.ctx.req)
      nookies.set(global.ctx, cookieKey.USER_TOKEN, token, {
        path: '/',
        expires,
        domain,
      })
    } else {
      const domain = getShareableCookieDomain()
      cookies.set(cookieKey.USER_TOKEN, token, {
        path: '/',
        expires,
        domain,
      })
    }
  },
  tokenExpiration: (expiredIn: string, expires: Date): void => {
    if (!process.browser && global.ctx) {
      const domain = getShareableCookieDomain(null, global.ctx.req)
      nookies.set(
        global.ctx,
        cookieKey.TOKEN_EXPIRATION,
        dayjs()
          .add(+expiredIn, 's')
          .unix()
          .toString(),
        {
          path: '/',
          expires,
          domain,
        }
      )
    } else {
      const domain = getShareableCookieDomain()
      cookies.set(
        cookieKey.TOKEN_EXPIRATION,
        dayjs()
          .add(+expiredIn, 's')
          .unix(),
        {
          path: '/',
          expires,
          domain,
        }
      )
    }
  },
}

export const tracker = {
  gtmAutoLogout: () => {
    eventTracker({
      event: 'autologout',
    })
  },
  gtmTokenExpired: (endpoint: string, statusCode: number): void => {
    eventTracker({
      event: 'Token Expired',
      endpoint: endpoint,
      statusCode: statusCode,
    })
  },
  gtmRefreshingToken: () => {
    eventTracker({
      event: 'Refreshing Token',
    })
  },
  gtmRefreshTokenSuccess: (endpoint?: string, statusCode?: number): void => {
    eventTracker({
      event: 'Refresh Token Success',
      endpoint: endpoint,
      statusCode: statusCode,
    })
  },
}
