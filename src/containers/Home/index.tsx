import React, { useEffect, useState } from 'react'
import { Backtop } from 'components/Commons'
import { Faq, WhyMe, Banner, Payment, Services } from 'components/Home'

import { getListServices } from 'services/service'

import { usePaymentOption } from 'hooks/index'

const HomeContainer = (): JSX.Element => {
  const [services, setServices] = useState<any[]>([])
  const { paymentOptions }: any = usePaymentOption()

  useEffect(() => {
    getServicesList()
  }, [])

  const getServicesList = async () => {
    try {
      const response = await getListServices({ with_image: true })
      setServices(response)
    } catch (error) {
      throw error
    }
  }

  return (
    <>
      <Banner />
      <WhyMe />
      <Services data={services} />
      <Payment data={paymentOptions.data} />
      <Faq />
      <Backtop />
    </>
  )
}

export default HomeContainer
