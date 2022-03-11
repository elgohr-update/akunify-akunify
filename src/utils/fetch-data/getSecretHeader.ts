import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'
import hmacSHA256 from 'crypto-js/hmac-sha256'
import Hex from 'crypto-js/enc-hex'

const getSecretHeader = (): any => {
  const uuid = uuidv4()
  const clientName = process.env.APP_NAME || 'rezim'
  const dateUnix = dayjs().unix()
  const apiSecretKey = 'secret'
  const signatureHeader = Hex.stringify(
    hmacSHA256(`${clientName}${dateUnix}`, apiSecretKey)
  )

  return {
    'X-Backpackr-Request-ID': uuid,
    'X-Backpackr-Api-Version': '1.0.0',
    'X-Backpackr-Client-Version': '1.0.0',
    'X-Backpackr-Platform-Name': 'web',
    'X-Backpackr-Client-Name': clientName,
    'X-Backpackr-Signature': signatureHeader,
    'X-Backpackr-Time': dateUnix,
  }
}

export default getSecretHeader
