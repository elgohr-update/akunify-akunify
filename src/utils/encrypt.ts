import crypto from 'crypto'

const ALGORITHM = 'aes-256-cbc'
const CIPHER_KEY = 'XdVCEV90Sw7mmzLDXdVCEV90Sw7mmzLD' // ini nanti di ganti pake env yak rob
const BLOCK_SIZE = 16

interface IUserDetail {
  name: string
  email: string
  phone_number: string
}

export const encryptData = (data: IUserDetail): any => {
  const strJson = JSON.stringify(data)
  const iv = crypto.randomBytes(BLOCK_SIZE)
  const cipher = crypto.createCipheriv(ALGORITHM, CIPHER_KEY, iv)

  let cipherText
  try {
    cipherText = cipher.update(strJson, 'utf8', 'hex')
    cipherText += cipher.final('hex')
    cipherText = iv.toString('hex') + cipherText
  } catch (e) {
    cipherText = null
  }

  return cipherText
}

export const decryptData = (string: string): any => {
  const contents = Buffer.from(string, 'hex')
  const iv = contents.slice(0, BLOCK_SIZE)
  const textBytes = contents.slice(BLOCK_SIZE)

  const decipher = crypto.createDecipheriv(ALGORITHM, CIPHER_KEY, iv)
  // @ts-ignore
  let decrypted = decipher.update(textBytes, 'hex', 'utf8')
  // @ts-ignore
  decrypted += decipher.final('utf8')

  const jsonData = JSON.parse(decrypted)

  return jsonData
}
