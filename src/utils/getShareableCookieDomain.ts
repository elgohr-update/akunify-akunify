import { IncomingMessage } from 'http'

const getDefaultHost = (): string =>
  process.env.NEXT_PUBLIC_SERVER_HOST ||
  process.env.SERVER_HOST ||
  process.env.NEXT_PUBLIC_KITABISA_HOST ||
  process.env.KITABISA_HOST ||
  ''

const getHost = (req?: IncomingMessage | undefined): string => {
  if (req) return req?.headers?.host ?? ''
  else if (typeof window !== 'undefined') return window.location.hostname
  return ''
}

const getShareableCookieDomain = (
  host?: string | null | undefined,
  req?: IncomingMessage | undefined
): string => {
  const hostname = (getHost(req) || host || getDefaultHost()).replace(
    /http(s?):\/\//,
    ''
  )
  const splitHost = hostname.split('.')
  const splitLn = splitHost.length

  if (splitLn < 2) {
    return ''
  }

  return '.' + splitHost[splitLn - 2] + '.' + splitHost[splitLn - 1]
}

export default getShareableCookieDomain
