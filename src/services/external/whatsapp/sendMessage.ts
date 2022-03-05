import { fetchData } from 'utils/fetch-data'

const sendWaMessage = async (
  number: string,
  message: string
): Promise<boolean> => {
  try {
    const response: any = fetchData({
      apiHost: process.env.BASE_URL,
      url: '/api/sendwa',
      method: 'POST',
      data: {
        device_id: process.env.WA_DEVICE_ID,
        number: number,
        message: message,
      },
    })
    return response.status === 200
  } catch (error) {
    console.log('wa message err', error)
    return false
  }
}

export default sendWaMessage
