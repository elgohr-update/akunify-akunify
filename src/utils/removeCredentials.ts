import Cookies from 'universal-cookie'
import * as storage from './storage'
import getShareableCookieDomain from 'utils/getShareableCookieDomain'
import { destroyCookie } from 'nookies'
import { listCookies } from 'utils/listCookies'

const cookies = new Cookies()
const localExclusion = ['pendMidRecId']

/**
 * @param  {Array} cookieKeys cookies that need to be removed
 * @param  {Array} localStorageKeys localStorage that needs to be removed.
 * The default is empty array. if only empty array provied, this function will
 * clear all the localStorage keys
 * @param  {Function} callback callback that need to be called after clear all the provided credentials
 */

export const removeCredentials = (
  cookieKeys: any,
  localStorageKeys: any = [],
  callback: () => void = () => {}
) => {
  cookieKeys.forEach((cookieKey: any) => {
    if (!process.browser && global.ctx) {
      destroyCookie(global.ctx, cookieKey)
      destroyCookie(global.ctx, cookieKey, {
        path: '/',
        ...(listCookies.includes(cookieKey) && {
          domain: getShareableCookieDomain(),
        }),
      })
    } else {
      cookies.remove(cookieKey, { path: '/' })
      cookies.remove(cookieKey, {
        path: '/',
        ...(listCookies.includes(cookieKey) && {
          domain: getShareableCookieDomain(),
        }),
      })
    }
  })

  if (localStorageKeys.length > 0) {
    localStorageKeys
      .filter(
        (localStorageKey: any) => !localExclusion.includes(localStorageKey)
      )
      .map((localStorageKey: any) => {
        storage.local.removeItem(localStorageKey)
      })
  } else {
    storage.local.clear()
  }

  storage.session.clear()
  callback()
}
