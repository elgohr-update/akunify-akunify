import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'
import hmacSHA256 from 'crypto-js/hmac-sha256'
import Hex from 'crypto-js/enc-hex'

const BACKPACKR_SECRET_KEY = process.env.BACKPACKR_SECRET_KEY || ''

interface IGeniHeadersReturn {
  'X-Backpackr-Request-ID': string
  'X-Backpackr-Api-Version': string
  'X-Backpackr-Client-Version': string
  'X-Backpackr-Platform-Name': string
  'X-Backpackr-Client-Name': string
  'X-Backpackr-Signature': string
  'X-Backpackr-Time': string
}

export const getBackpackrHeader = ({
  clientName = 'dolan',
  platformName = 'pwa',
  backpackrSecretKey = BACKPACKR_SECRET_KEY,
} = {}): IGeniHeadersReturn => {
  const uuid = uuidv4()
  const dateUnix = dayjs().unix()
  const signature = Hex.stringify(
    hmacSHA256(`${clientName}${dateUnix}`, backpackrSecretKey)
  )

  const headers = {
    'X-Backpackr-Request-ID': uuid,
    'X-Backpackr-Api-Version': '1.0.0',
    'X-Backpackr-Client-Version': '1.0.0',
    'X-Backpackr-Platform-Name': platformName,
    'X-Backpackr-Client-Name': clientName,
    'X-Backpackr-Signature': signature,
    'X-Backpackr-Time': `${dateUnix}`,
  }

  return headers
}
