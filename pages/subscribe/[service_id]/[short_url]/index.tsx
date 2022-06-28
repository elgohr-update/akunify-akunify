import React from 'react'
import { NextPageContext } from 'next'
import SubscribeContainer from 'containers/Subscribe'

import Error from 'pages/_error'

import { getServiceDetail } from 'services/service'

interface SubscribeProps {
  serviceDetail: any
  statusCode: number
  disabledPreorder: boolean
}

const SubscribePage: React.FC<SubscribeProps> = (props) => {
  const { serviceDetail, statusCode, disabledPreorder } = props

  if (statusCode === 404) {
    return <Error statusCode={statusCode} />
  }

  return (
    <SubscribeContainer
      service={serviceDetail}
      disabledPreorder={disabledPreorder}
    />
  )
}

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { query } = ctx

  const detail: any = await getServiceDetail({
    with_image: true,
    service_id: Number(query.service_id),
    short_url: String(query.short_url),
  })

  const statusCode = detail?.status || 404
  const serviceDetail = detail?.data || null
  const disabledPreorder = query.disabled_preorder === 'true'

  return {
    props: {
      serviceDetail,
      statusCode,
      disabledPreorder,
    },
  }
}

export default SubscribePage
