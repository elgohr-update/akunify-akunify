import AES from 'crypto-js/aes'
// import Hex from 'crypto-js/enc-hex'
// import Base64 from 'crypto-js/enc-base64'

const passphrase = process.env.PASSPHRASE_KEY || 'XdVCEV90Sw7mmzLD'

export const encryptData = (data: object): string => {
  const strJson = JSON.stringify(data)
  return AES.encrypt(strJson, passphrase).toString()
}

export const decryptData = (string: string): any => {
  // var encryptedHex = Hex.parse(string)

  var decryptedData = AES.decrypt(string, passphrase)

  let decryptText = decryptedData.toString()

  return decryptText
}
