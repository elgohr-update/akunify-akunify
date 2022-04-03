import { fetchData } from 'utils/fetch-data'

const sendWaMessage = async (
  phone_number: string,
  message: string
): Promise<boolean> => {
  try {
    const response: any = fetchData({
      apiHost: process.env.BASE_URL,
      url: '/api/sendwa',
      method: 'POST',
      data: {
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
