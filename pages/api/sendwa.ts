import type { NextApiRequest, NextApiResponse } from 'next'

import { fetchData } from 'utils/fetch-data'

const runMiddleware = async (data: any): Promise<any> => {
  try {
    const response: any = await fetchData({
      apiHost: process.env.WA_HOST,
      url: '/send',
      method: 'POST',
      data: {
        device_id: process.env.WA_DEVICE_ID,
        number: data.number,
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
