import { fetchData } from 'utils/fetch-data'
import getSecretHeader from 'utils/fetch-data/getSecretHeader'

const sendWaMessage = async (
  phone_number: string,
  message: string
): Promise<boolean> => {
  try {
    const response: any = fetchData({
      apiHost: process.env.TELUH_API_HOST,
      url: '/send_message',
      method: 'POST',
      headers: getSecretHeader(),
      basicAuth: {
        username: process.env.BASIC_AUTH_TELUH_USER || '',
        password: process.env.BASIC_AUTH_TELUH_PASSWORD || '',
      },
      data: {
        type: 'whatsapp',
        to: phone_number,
        message: message,
      },
    })
    return response
  } catch (error) {
    console.log('wa message err', error)
    return false
  }
}

export default sendWaMessage
