import AES from 'crypto-js/aes'
import Utf8 from 'crypto-js/enc-utf8'

const passphrase = process.env.PASSPHRASE_KEY || 'XdVCEV90Sw7mmzLD'

interface IUserDetail {
  name: string
  email: string
  phone_number: string
}

export const encryptData = (data: IUserDetail): any => {
  const strJson = JSON.stringify(data)

  return AES.encrypt(strJson, passphrase).toString()
}

export const decryptData = (string: string): any => {
  const bytes = AES.decrypt(string, passphrase)
  const originalText = bytes.toString(Utf8)
  const jsonData = JSON.parse(originalText)

  return jsonData
}
