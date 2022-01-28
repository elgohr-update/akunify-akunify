import type { AppProps } from 'next/app'

import 'styles/globals.css'
import Layout from 'components/Commons/Layout'

import 'styles/main.css'
import 'styles/lineicons.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
