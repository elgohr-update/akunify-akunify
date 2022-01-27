import Head from 'next/head'
import { generateApplinkQuery } from './method'

import defaultMeta from 'constants/meta'
import isEmpty from 'utils/isEmpty'
import { MetaProps } from 'interfaces/meta'

const Meta: React.FC<MetaProps> = ({
  pageTitle,
  pageDescription,
  appId,
  robots,
  author,
  og,
  fb,
  appLink,
  twitter,
  structuredData,
  bussiness,
  content,
}: MetaProps) => (
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=0"
    />
    <meta name="format-detection" content="telephone=no" />
    <meta name="application-name" content="Akunify.com" />

    <meta content="#1b9cdc" name="theme-color" />
    <meta content="#1b9cdc" name="msapplication-navbutton-color" />
    <meta content="#1b9cdc" name="apple-mobile-web-app-status-bar-style" />

    <meta key="ogSitename" property="og:site_name" content="Akunify" />
    <meta key="mobileCapable" name="mobile-web-app-capable" content="yes" />
    <meta
      key="appleCapable"
      name="apple-mobile-web-app-capable"
      content="yes"
    />

    <meta name="title" content={content?.title} />
    <meta name="keywords" content={content?.keywords} />

    <link key="authorLink" rel="author" href={content?.author} />
    <link key="canonicalLink" rel="canonical" href={content?.canonical} />

    <link
      key="altAndroid"
      rel="alternate"
      href={`android-app://com.akunify.android/${content?.alternate}`}
    />
    <link
      key="altIos"
      rel="alternate"
      href={`ios-app://1458307938/Akunify/${content?.alternate}`}
    />

    <link
      key="favIcon"
      rel="shortcut icon"
      type="image/png"
      href={`https://assets.kitabisa.cc/images/icons/meta/favicon.ico`}
    />
    <link
      key="favIcon16"
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={`https://assets.kitabisa.cc/images/icons/meta/favicon-16x16.png`}
    />
    <link
      key="favIcon32"
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={`https://assets.kitabisa.cc/images/icons/meta/favicon-32x32.png`}
    />
    <link
      key="favIcon192"
      rel="icon"
      type="image/png"
      sizes="192x192"
      href={`https://assets.kitabisa.cc/images/icons/meta/android-chrome-192x192.png`}
    />

    <meta key="robots" name="robots" content={robots} />
    <meta key="author" name="author" content={author} />

    <link
      key="appleTouchIcon"
      rel="apple-touch-icon"
      sizes="180x180"
      href={`https://assets.kitabisa.cc/images/icons/meta/apple-touch-icon.png`}
    />
    <meta
      key="appleWebAppTitle"
      name="apple-mobile-web-app-title"
      content="Akunify.com"
    />

    <meta name="msapplication-TileColor" content="#da532c" />
    <meta
      name="msapplication-TileImage"
      content={`https://assets.kitabisa.cc/images/icons/meta/mstile-144x144.png`}
    />
    <meta
      name="msapplication-square310x310logo"
      content={`https://assets.kitabisa.cc/images/icons/meta/icons-512.png`}
    />

    <link key="manifestJson" rel="manifest" href="/manifest.json" />
    <link
      key="safariPinTab"
      rel="mask-icon"
      href={`https://assets.kitabisa.cc/images/icons/meta/safari-pinned-tab.svg`}
      color="#5bbad5"
    />

    <meta name="wot-verification" content="96e88468aef670e8d6f1" />

    <meta key="ogUrl" property="og:url" content={og?.url} />
    <meta key="ogType" property="og:type" content={og?.type} />
    <meta key="ogImage" property="og:image" content={og?.image} />
    <meta key="ogTitle" property="og:title" content={og?.title} />
    <meta key="ogDesc" property="og:description" content={og?.description} />
    <meta key="ogPriceAmount" property="og:price:amount" content="10000" />

    <meta key="facebookAppId" property="fb:app_id" content={appId} />

    {/* pages defined only from home */}
    {fb?.pages && (
      <>
        <meta key="fbPage" property="fb:pages" content="1578259059082872" />
        <meta key="fbPageId" property="fb:page_id" content="1578259059082872" />
      </>
    )}

    {/* App link meta */}
    {!isEmpty(appLink) && (
      <>
        <meta
          key="iosUrl"
          property="al:ios:url"
          content={`ktbs://${appLink?.url}${generateApplinkQuery(
            appLink?.query,
            false
          )}`}
        />
        <meta
          key="iosAppStoreId"
          property="al:ios:app_store_id"
          content="1458307938"
        />
        <meta key="iosAppName" property="al:ios:app_name" content="Akunify" />
        <meta
          key="androidUrl"
          property="al:android:url"
          content={`ktbs://${appLink?.url}${generateApplinkQuery(
            appLink?.query,
            true
          )}`}
        />
        <meta
          key="androidAppName"
          property="al:android:app_name"
          content="Akunify"
        />
        <meta
          key="androidPackage"
          property="al:android:package"
          content="com.android.akunify"
        />
        <meta
          key="androidClass"
          property="al:android:class"
          content="com.akunify.android.ui.deeplink.DeepLinkActivity"
        />
        <meta
          key="urlWeb"
          property="al:web:url"
          content={`${appLink?.web}${generateApplinkQuery(
            appLink?.query,
            false
          )}`}
        />
      </>
    )}

    {/* Mobile app meta */}
    <meta
      key="googlePlayApp"
      name="google-play-app"
      content="app-id=com.akunify.android"
    />
    <meta
      key="appleItunesApp"
      name="apple-itunes-app"
      content="app-id=1458307938, app-argument=https://akunify.id/"
    />
    {og?.updatedTime && (
      <meta
        key="ogUpdatedTime"
        property="og:updated_time"
        content={og?.updatedTime as string}
      />
    )}

    <meta key="pageDescription" name="description" content={pageDescription} />
    <meta key="productBrand" property="product:brand" content={fb?.agentName} />
    <meta
      key="productAvailability"
      property="product:availability"
      content={fb?.availability}
    />
    <meta
      key="productCondition"
      property="product:condition"
      content={fb?.condition}
    />
    <meta
      key="priceAmount"
      property="product:price:amount"
      content={fb?.priceAmount}
    />
    <meta
      key="priceCurrency"
      property="product:price:currency"
      content={fb?.priceCurrency}
    />
    <meta
      key="productItemId"
      property="product:retailer_item_id"
      content={fb?.tripId as string}
    />

    <meta
      key="twIphoneName"
      name="twitter:app:name:iphone"
      content="Akunify"
    />
    <meta key="twIphoneId" name="twitter:app:id:iphone" content="1458307938" />
    <meta key="twIpadName" name="twitter:app:name:ipad" content="Akunify" />
    <meta key="twIpadId" name="twitter:app:id:ipad" content="1458307938" />
    <meta
      key="twGooglePlay"
      name="twitter:app:name:googleplay"
      content="Akunify"
    />
    <meta
      key="twGooglePlayId"
      name="twitter:app:id:googleplay"
      content="com.android.kitabisa"
    />

    <meta key="twCard" name="twitter:card" content={twitter?.card} />
    <meta key="twSite" name="twitter:site" content={twitter?.site} />
    <meta key="twTitle" name="twitter:title" content={twitter?.title} />
    <meta
      key="twDescription"
      name="twitter:description"
      content={twitter?.description}
    />
    <meta key="twImage" name="twitter:image" content={twitter?.image} />
    <meta key="twLabel1" name="twitter:label1" content={twitter?.label1} />
    <meta key="twData1" name="twitter:data1" content={twitter?.data1} />
    <meta key="twLabel2" name="twitter:label2" content={twitter?.label2} />
    <meta key="twData2" name="twitter:data2" content={twitter?.data2} />

    <meta
      key="bussinessStreet"
      property="business:contact_data:street_address"
      content={bussiness?.street_address}
    />
    <meta
      key="bussinessLocality"
      property="business:contact_data:locality"
      content={bussiness?.locality}
    />
    <meta
      key="bussinessRegion"
      property="business:contact_data:region"
      content={bussiness?.region}
    />
    <meta
      key="bussinessPostalCode"
      property="business:contact_data:postal_code"
      content={bussiness?.postal_code}
    />
    <meta
      key="bussinessCountry"
      property="business:contact_data:country_name"
      content={bussiness?.country_name}
    />

    <title key="pageTitle">{pageTitle}</title>

    {/* only in detail campaign */}
    {author != 'Akunify' && (
      <>
        <meta key="rtVal" itemProp="ratingValue" content="4.8" />
        <meta key="bsRt" itemProp="bestRating" content="5" />
        <meta key="wsRt" itemProp="worstRating" content="1" />
        <meta key="rtCount" itemProp="ratingCount" content="17409" />
        <meta key="rvCount" itemProp="reviewCount" content="17409" />
        <meta key="imgItem" itemProp="image" content={og?.image} />
        <meta key="urlItem" itemProp="url" content={og?.url} />
        <meta key="authItem" itemProp="author" content={author} />
        <meta key="nameItem" itemProp="name" content={og?.title} />
      </>
    )}

    {!isEmpty(structuredData) &&
      structuredData?.map((item, i) => (
        <script
          type="application/ld+json"
          data-rh={author === 'Akunify' ? 'true' : 'false'}
          dangerouslySetInnerHTML={{ __html: item }}
          key={`structure-${i}`}
        ></script>
      ))}
  </Head>
)

Meta.defaultProps = defaultMeta

export default Meta
