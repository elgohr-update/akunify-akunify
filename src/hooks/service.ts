import { useCallback, useEffect, useState } from 'react'
// import { fetchData } from 'utils/fetch-data'
import axios from 'axios'

const useService = () => {
  const [services, setServices] = useState<any[]>([])

  const getServiceList = useCallback(async () => {
    console.log('process.env.API_HOST,', process.env.API_HOST,)
    try {
      // const response = await fetchData({
      //   apiHost: process.env.API_HOST,
      //   url: '/services?populate=image',
      //   method: 'GET'
      // })
      const response = await axios.get('https://api-akunify.backpackr.xyz/api/services?populate=image');

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