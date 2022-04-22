import { useCallback, useEffect, useState } from 'react'
import { fetchData } from 'utils/fetch-data'

const usePaymentOption = () => {
  const [paymentOptions, setPaymentOptions] = useState<any[]>([])

  const getPaymentOptionList = useCallback(async (): Promise<any> => {
    try {
      const response = await fetchData({
        url: '/payment-options?populate=image&filters[is_active][$eq]=true',
        method: 'GET',
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
    paymentOptions,
  }
}

export default usePaymentOption
