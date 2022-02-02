import { Backtop } from 'components/Commons'
import {
  Faq,
  WhyMe,
  Banner,
  Payment,
  Services
} from 'components/Home'

import useService from 'hooks/service'

const HomeContainer = (): JSX.Element => {
  const { services }: any = useService()
  return (
    <>
      <Banner />
      <WhyMe />
      <Services
        data={services.data}
      />
      <Payment />
      <Faq />
      <Backtop />
    </>
  )
}

export default HomeContainer
