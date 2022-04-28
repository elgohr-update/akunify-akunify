import { Meta, Loader, Header, Footer } from 'components/common'
import FloatingWhatsApp from 'react-floating-whatsapp'

interface Props {
  children: {
    props: Record<string, any>
  }
}

const Layout = (props: Props): JSX.Element => (
  <main className="my-0 mx-auto min-h-full">
    <Meta {...props.children?.props} />
    <Loader />
    <Header />
    {props.children}
    <FloatingWhatsApp
      phoneNumber="6285171525500"
      accountName="Customer Support"
      avatar="/favicon/apple-icon-57x57.png"
      statusMessage="Online from 09:00 - 17:00 GMT+7"
      chatMessage="Halo Akuniers, ada yang bisa kami bantu?"
      allowClickAway
      notification
      notificationDelay={30000}
      notificationSound={true}
      className="z-50"
    />
    <Footer />
  </main>
)

export default Layout
