import dayjs from 'dayjs'

import Meta from 'components/common/Meta'
import { getImageUrl } from 'utils/index'

const date = dayjs().add(1, 'month').format('YYYY-MM-DD')

const ServiceDetailMeta = ({ service }: { service: any }): JSX.Element => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/subscribe/${service?.id}/${service?.attributes?.short_url}`

  return (
    <Meta
      pageTitle={
        'Patungan Akun ' +
        service?.attributes?.name +
        ' Murah, Aman, Praktis & Terpercaya'
      }
      pageDescription={service?.attributes?.short_description}
      og={{
        type: 'product',
        title: `Patungan ${service?.attributes?.name} dengan Akunify.com`,
        url: url,
        description: service?.attributes?.short_description,
        image: getImageUrl(service?.attributes?.image),
      }}
      author="Akunify.com"
      fb={{
        availability: 'in stock',
        condition: 'new',
        priceAmount: `${service?.attributes?.price}`,
        priceCurrency: 'Rp',
      }}
      twitter={{
        card: 'product',
        site: '@kitabisacom',
        title: `${service?.attributes?.name}`,
        description: `${service?.attributes?.short_description}`,
        image: `${getImageUrl(service?.attributes?.image)}`,
        label1: 'product',
        data1: `IDR${service?.attributes?.price}`,
        label2: 'category',
        data2: `Services`,
      }}
      content={{
        title: service?.attributes?.name,
        keywords: service?.attributes?.keywords,
        author: 'Akunify.com',
        canonical: url,
        alternate: url,
      }}
      structuredData={[
        `{
          "@context": "https://schema.org/",
          "@type": "http://schema.org/Product",
          "name": "${service?.attributes?.name}",
          "description": "${service?.attributes?.short_description}",
          "image": "${getImageUrl(service?.attributes?.image)}",
          "url": "${url}",
          "sku": "${service?.id}-${service?.attributes?.short_url}",
          "mpn": "${service?.id}",
          "brand": {
            "@type": "Brand",
            "name": "Akunify"
          },
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Fred Benson"
            }
          },
          "offers": {
            "@type": "http://schema.org/Offer",
            "url": "${url}",
            "availability": "http://schema.org/InStock",
            "priceCurrency": "Rp",
            "priceValidUntil": "${date}",
            "price": "${service?.attributes?.price}"
          },
          "aggregateRating": {
            "@type": "http://schema.org/AggregateRating",
            "worstRating": 1,
            "bestRating": 5,
            "ratingValue": 4.9,
            "reviewCount": 17409
          }
        }`,
        `{
          "@context": "http://schema.org",
          "@type": "Store",
          "name": "Akunify.com",
          "image": "${process.env.NEXT_PUBLIC_BASE_URL}/images/og-images.png"
        }`,
      ]}
    />
  )
}

export { ServiceDetailMeta }
