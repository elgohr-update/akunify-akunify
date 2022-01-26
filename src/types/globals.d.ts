import { NextPageContext } from 'next'

declare global {
  var ctx: NextPageContext

  interface Window {
    dataLayer: any
    fbq: any
  }
}
