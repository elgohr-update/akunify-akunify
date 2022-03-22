import CryptoJS from 'crypto-js'

const CIPHER_KEY = 'XdVCEV90Sw7mmzLDXdVCEV90Sw7mmzLD' // ini nanti di ganti pake env yak rob
const BLOCK_SIZE = 16

interface IUserDetail {
  name: string
  email: string
  phone_number: string
}

export const encryptData = (data: IUserDetail): string => {
  const strJson = JSON.stringify(data)
  const iv = CryptoJS.lib.WordArray.random(BLOCK_SIZE)

  const encrypted = CryptoJS.AES.encrypt(
    strJson,
    CryptoJS.enc.Utf8.parse(CIPHER_KEY),
    {
      keySize: 256,
      iv,
    }
  )

  const cipherString = CryptoJS.enc.Hex.stringify(encrypted.ciphertext)
  const cipher = `${iv.toString(CryptoJS.enc.Hex)}${cipherString}`

  return cipher
}

export const decryptData = (cipher: string): IUserDetail => {
  const iv = CryptoJS.enc.Hex.parse(cipher.slice(0, BLOCK_SIZE * 2))
  const encrypted = CryptoJS.enc.Hex.parse(cipher.slice(BLOCK_SIZE * 2))
  const encryptedString = CryptoJS.enc.Base64.stringify(encrypted)

  const decrypted = CryptoJS.AES.decrypt(
    encryptedString,
    CryptoJS.enc.Utf8.parse(CIPHER_KEY),
    {
      keySize: 256,
      iv,
    }
  )

  const plaintext = decrypted.toString(CryptoJS.enc.Utf8)
  const jsonData = JSON.parse(plaintext)

  return jsonData
}
