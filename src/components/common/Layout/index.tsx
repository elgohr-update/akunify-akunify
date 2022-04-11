import { Meta, Loader, Header, Footer } from 'components/common'

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
    <Footer />
  </main>
)

export default Layout
