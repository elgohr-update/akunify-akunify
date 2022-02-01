import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'
import hmacSHA256 from 'crypto-js/hmac-sha256'
import Hex from 'crypto-js/enc-hex'

const BACKPACKR_SECRET_KEY = process.env.BACKPACKR_SECRET_KEY || ''

interface IGeniHeadersReturn {
  'X-Akunify-Request-ID': string
  'X-Akunify-Api-Version': string
  'X-Akunify-Client-Version': string
  'X-Akunify-Platform-Name': string
  'X-Akunify-Client-Name': string
  'X-Akunify-Signature': string
  'X-Akunify-Time': string
}

export const getBackpackrHeader = ({
  clientName = 'akunify',
  platformName = 'pwa',
  backpackrSecretKey = BACKPACKR_SECRET_KEY,
} = {}): IGeniHeadersReturn => {
  const uuid = uuidv4()
  const dateUnix = dayjs().unix()
  const signature = Hex.stringify(
    hmacSHA256(`${clientName}${dateUnix}`, backpackrSecretKey)
  )

  const headers = {
    'X-Akunify-Request-ID': uuid,
    'X-Akunify-Api-Version': '1.0.0',
    'X-Akunify-Client-Version': '1.0.0',
    'X-Akunify-Platform-Name': platformName,
    'X-Akunify-Client-Name': clientName,
    'X-Akunify-Signature': signature,
    'X-Akunify-Time': `${dateUnix}`,
  }

  return headers
}
