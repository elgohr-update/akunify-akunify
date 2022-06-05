import { NextPageContext } from 'next'
import Error from 'pages/_error'

import Thankyou from 'containers/Thankyou'

import { getServiceDetail } from 'services/service'

interface ThankYouProps {
  serviceDetail: any
  statusCode: number
}

const ThankyouPage: React.FC<ThankYouProps> = (props) => {
  const { serviceDetail, statusCode } = props

  if (statusCode === 404) {
    return <Error statusCode={statusCode} />
  }

  return <Thankyou service={serviceDetail} />
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

  return {
    props: {
      serviceDetail,
      statusCode,
    },
  }
}

export default ThankyouPage
