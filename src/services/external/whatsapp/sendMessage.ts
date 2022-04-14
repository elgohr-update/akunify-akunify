import { fetchData } from 'utils/fetch-data'
import { encryptData } from 'utils/encrypt'

const sendWaMessage = async (
  phone_number: string,
  message: string
): Promise<boolean> => {
  try {
    const encryptParams = encryptData({
      to: phone_number,
      message: message,
    })
    const response: any = fetchData({
      apiHost: process.env.BASE_URL,
      url: '/api/sendwa',
      method: 'POST',
      data: {
        content: encryptParams,
      },
    })
    return response
  } catch (error) {
    console.log('wa message err', error)
    return false
  }
}

export default sendWaMessage
