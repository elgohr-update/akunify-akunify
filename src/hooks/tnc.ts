import { useCallback, useEffect, useState } from 'react'
import { fetchData } from 'utils/fetch-data'

const useTnc = () => {
  const [termCondition, setTermCondition] = useState<any[]>([])

  const getTncList = useCallback(async (): Promise<any> => {
    try {
      const response = await fetchData({
        url: '/tnc',
        method: 'GET',
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
    termCondition,
  }
}

export default useTnc
