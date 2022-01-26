import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  health_check: string
}

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ health_check: 'up' })
}
