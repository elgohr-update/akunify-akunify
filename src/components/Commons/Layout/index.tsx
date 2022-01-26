import Meta from 'components/Commons/Meta'

interface Props {
  children: {
    props: Record<string, any>
  }
}

const Layout = (props: Props): JSX.Element => (
  <main className="my-0 mx-auto min-h-full">
    <Meta {...props.children?.props} />
    {props.children}
  </main>
)

export default Layout
