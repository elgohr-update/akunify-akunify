import { NextPageContext } from 'next'
import basicAuthMiddleware from 'nextjs-basic-auth-middleware'

import AdminContainer from 'containers/Admin'

const AdminPage = (): JSX.Element => {
  return <AdminContainer />
}

AdminPage.getInitialProps = async (ctx: NextPageContext) => {
  const { req, res } = ctx

  await basicAuthMiddleware(req as any, res as any)

  return {
    props: {},
  }
}

export default AdminPage
