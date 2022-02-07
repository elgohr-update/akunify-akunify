import { Backtop } from 'components/Commons'
import {
  Faq,
  WhyMe,
  Banner,
  Payment,
  Services
} from 'components/Home'

import {
  useService,
  usePaymentOption
} from 'hooks/index'

const HomeContainer = (): JSX.Element => {
  const { services }: any = useService()
  const { paymentOptions }: any = usePaymentOption()

  return (
    <>
      <Banner />
      <WhyMe />
      <Services
        data={services.data}
      />
      <Payment
        data={paymentOptions.data}
      />
      <Faq />
      <Backtop />
    </>
  )
}

export default HomeContainer
