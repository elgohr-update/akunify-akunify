import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'
import 'styles/globals.css'
import 'styles/main.css'

import Layout from 'components/common/Layout'
import * as Gtm from 'components/common/Gtm'

import { pageview } from 'utils/gtm'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start())
    router.events.on('routeChangeComplete', () => NProgress.done())
    router.events.on('routeChangeError', () => NProgress.done())

    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  return (
    <>
      {<Gtm.Head />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
