import { Backtop } from 'components/Commons'
import {
  WhyMe,
  Services,
  Contact
} from 'components/Home'

const HomeContainer = (): JSX.Element => {
  return (
    <>
      <WhyMe />
      <Services />
      <Contact />
      <Backtop />
    </>
  )
}

export default HomeContainer
