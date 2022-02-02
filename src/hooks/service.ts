import { useCallback, useEffect, useState } from 'react'
import { fetchData } from 'utils/fetch-data'

const useService = () => {
  const [services, setServices] = useState<any[]>([])

  const getServiceList = useCallback(async () => {
    console.log('process.env.API_HOST,', process.env.API_HOST,)
    try {
      const response = await fetchData({
        apiHost: process.env.API_HOST,
        url: '/services?populate=image',
        method: 'GET'
      })

      setServices(response?.data)
    } catch (error) {
      throw error
    }
  }, [])

  useEffect(() => {
    getServiceList()
  }, [])

  return {
    services
  }
}

export default useService