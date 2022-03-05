import { useCallback, useEffect, useState } from 'react'
import { NextPageContext } from 'next'
import NProgress from 'nprogress'
import RegisterContainer from 'containers/Register'

import { fetchData } from 'utils/fetch-data'

interface RegisterProps {
  serviceId: number
}

const RegisterPage = (props: RegisterProps) => {
  const [detail, setDetail] = useState<any>({})
  const [loading, setLoading] = useState<boolean>(true)

  const getServiceList = useCallback(async (): Promise<any> => {
    NProgress.start()
    try {
      const response: any = await fetchData({
        apiHost: process.env.API_HOST,
        url: `/services/${props.serviceId}?populate=image`,
        method: 'GET',
      })
      setLoading(false)
      setDetail(response?.data)
      NProgress.done()
    } catch (error) {
      NProgress.done()
      throw error
    }
  }, [])

  useEffect(() => {
    getServiceList()
  }, [])

  return <>{!loading && <RegisterContainer service={detail.data} />}</>
}

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { query } = ctx
  return {
    props: {
      serviceId: query.service_id,
    },
  }
}

export default RegisterPage
