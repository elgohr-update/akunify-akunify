import Document, {
  Head,
  DocumentContext,
  Main,
  NextScript,
  Html,
} from 'next/document'

import * as Gtm from 'components/common/Gtm'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="id">
        <Head />
        <body>
          {<Gtm.Body />}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
