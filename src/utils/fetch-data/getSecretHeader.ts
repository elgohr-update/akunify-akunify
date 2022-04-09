import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'
import hmacSHA256 from 'crypto-js/hmac-sha256'
import Hex from 'crypto-js/enc-hex'

interface ISecretHeadersReturn {
  'X-Backpackr-Request-ID': string
  'X-Backpackr-Api-Version': string
  'X-Backpackr-Client-Version': string
  'X-Backpackr-Platform-Name': string
  'X-Backpackr-Client-Name': string
  'X-Backpackr-Signature': string
  'X-Backpackr-Time': string
}

const getSecretHeader = ({
  clientName = 'akunify',
  platformName = 'web',
  apiSecretKey = 'secret',
} = {}): ISecretHeadersReturn => {
  const uuid = uuidv4()
  const dateUnix = dayjs().unix().toString()
  const signatureHeader = Hex.stringify(
    hmacSHA256(`${clientName}${dateUnix}`, apiSecretKey)
  )

  return {
    'X-Backpackr-Request-ID': uuid,
    'X-Backpackr-Api-Version': '1.0.0',
    'X-Backpackr-Client-Version': '1.0.0',
    'X-Backpackr-Platform-Name': platformName,
    'X-Backpackr-Client-Name': clientName,
    'X-Backpackr-Signature': signatureHeader,
    'X-Backpackr-Time': dateUnix,
  }
}

export default getSecretHeader
