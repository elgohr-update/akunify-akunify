import { Backtop } from 'components/Commons'
import {
  Faq,
  WhyMe,
  Banner,
  // Contact,
  Services
} from 'components/Home'

const HomeContainer = (): JSX.Element => {
  return (
    <>
      <Banner />
      <WhyMe />
      <Services />
      <Faq />
      {/* <Contact /> */}
      <Backtop />
    </>
  )
}

export default HomeContainer
