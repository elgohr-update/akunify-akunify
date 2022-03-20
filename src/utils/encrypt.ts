import AES from 'crypto-js/aes'
import Hex from 'crypto-js/enc-hex'
import hmacSHA256 from 'crypto-js/hmac-sha256'

const passphrase = process.env.PASSPHRASE_KEY || 'XdVCEV90Sw7mmzLD'

interface IUserDetail {
  name: string
  email: string
  phone_number: string
}

export const encryptData = (data: IUserDetail): any => {
  const strJson = JSON.stringify(data)
  var hexString = Hex.parse(strJson)
  var aesEncrypt = AES.encrypt(Hex.stringify(hexString), passphrase).toString()

  return aesEncrypt
}

export const decryptData = (string: string): any => {
  const decryptedMessage = AES.decrypt(string, passphrase).toString()

  return Hex.parse(decryptedMessage)
}
