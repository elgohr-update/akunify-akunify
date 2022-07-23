import dayjs from 'dayjs'

import Meta from 'components/common/Meta'
import { getImageUrl } from 'utils/index'

const date = dayjs().add(1, 'month').format('YYYY-MM-DD')

const BlogDetailMeta = ({ blog }: { blog: any }): JSX.Element => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blog?.attributes?.slug}`

  return (
    <Meta
      pageTitle={blog?.attributes?.title}
      pageDescription={blog?.attributes?.short_description}
      og={{
        type: 'product',
        title: blog?.attributes?.title,
        url: url,
        description: blog?.attributes?.short_description,
        image: getImageUrl(blog?.attributes?.image, 'thumbnail'),
      }}
      author="Akunify.com"
      twitter={{
        card: 'product',
        site: '@akunify.com',
        title: `${blog?.attributes?.title}`,
        description: `${blog?.attributes?.short_description}`,
        image: `${getImageUrl(blog?.attributes?.image)}`,
        label1: 'category',
        data1: `blogs`,
      }}
      content={{
        title: blog?.attributes?.title,
        keywords: blog?.attributes?.keywords,
        author: 'Akunify.com',
        canonical: url,
        alternate: url,
      }}
      structuredData={[
        `{
          "@context": "https://schema.org/",
          "@type": "http://schema.org/Product",
          "name": "${blog?.attributes?.title}",
          "description": "${blog?.attributes?.short_description}",
          "image": "${getImageUrl(blog?.attributes?.image)}",
          "url": "${url}",
          "sku": "${blog?.id}-${blog?.attributes?.slug}",
          "mpn": "${blog?.id}",
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
            "price": "${blog?.attributes?.price}"
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

export { BlogDetailMeta }
