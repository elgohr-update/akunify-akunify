import type { NextApiRequest, NextApiResponse } from 'next'

import { fetchData } from 'utils/fetch-data'
import getSecretHeader from 'utils/fetch-data/getSecretHeader'

const runMiddleware = async (data: any): Promise<any> => {
  try {
    const response: any = await fetchData({
      apiHost: process.env.TELUH_API_HOST,
      url: '/send_message',
      method: 'POST',
      headers: {
        ...getSecretHeader({
          apiSecretKey: process.env.TELUH_API_SECRET,
        }),
      },
      basicAuth: {
        username: process.env.BASIC_AUTH_TELUH_USER || '',
        password: process.env.BASIC_AUTH_TELUH_PASSWORD || '',
      },
      data: {
        type: 'whatsapp',
        to: data.to,
        message: data.message,
      },
    })

    return response
  } catch (error: any) {
    console.log('err', error)
    return error
  }
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  try {
    const response = await runMiddleware(req.body)

    if (response.status === 200) {
      res.status(200).json(response.data)
    } else {
      res.json(response.data)
    }
  } catch (error: any) {
    res.status(405).json(error)
  }
}

export default handler
