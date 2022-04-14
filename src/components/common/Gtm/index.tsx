import React from 'react'
import Script from 'next/script'

const Head = () => {
  const setGoogleTagManager = () => {
    return {
      __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.GTM_ID}');`,
    }
  }

  const setGoogleAnalytics = () => {
    return {
      __html: `
      window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.GA_ID}', {
        page_path: window.location.pathname,
      });`,
    }
  }

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={setGoogleAnalytics()}
      />
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={setGoogleTagManager()}
      />
    </>
  )
}

const Body = () => {
  return (
    <noscript>
      {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id='${process.env.GTM_ID}'`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}

export { Head, Body }
