import { useCallback, useEffect, useState } from 'react'
import { fetchData } from 'utils/fetch-data'

const usePaymentOption = () => {
  const [paymentOptions, setPaymentOptions] = useState<any[]>([])

  const getPaymentOptionList = useCallback(async (): Promise<any> => {
    try {
      const response = await fetchData({
        apiHost: process.env.API_HOST,
        url: '/payment-options?populate=image',
        method: 'GET'
      })

      setPaymentOptions(response?.data)
    } catch (error) {
      throw error
    }
  }, [])

  useEffect(() => {
    getPaymentOptionList()
  }, [])

  return {
    paymentOptions
  }
}

export default usePaymentOption