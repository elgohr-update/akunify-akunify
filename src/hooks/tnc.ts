import { useCallback, useEffect, useState } from 'react'
import { fetchData } from 'utils/fetch-data'

const useTnc = () => {
  const [termCondition, setTermCondition] = useState<any[]>([])

  const getTncList = useCallback(async () => {
    try {
      const response = await fetchData({
        apiHost: process.env.API_HOST,
        url: '/tnc',
        method: 'GET'
      })

      setTermCondition(response?.data)
    } catch (error) {
      throw error
    }
  }, [])

  useEffect(() => {
    getTncList()
  }, [])

  return {
    termCondition
  }
}

export default useTnc