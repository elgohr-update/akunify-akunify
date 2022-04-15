import Meta from 'components/common/Meta'
import { getImageUrl } from 'utils/index'

const ServiceDetailMeta = ({ service }: { service: any }): JSX.Element => (
  <Meta
    pageTitle={'Subscribe - ' + service?.attributes?.name}
    pageDescription={service?.attributes?.short_description}
    og={{
      type: 'product',
      title: `Patungan ${service?.attributes?.name} dengan Akunify.com`,
      url: `${process.env.BASE_URL}/subscribe/${service?.id}/${service.short_url}`,
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
      canonical: `${process.env.BASE_URL}/subscribe/${service?.id}/${service.short_url}`,
      alternate: `${process.env.BASE_URL}/subscribe/${service?.id}/${service.short_url}`,
    }}
    structuredData={[
      `{
        "@context": "https://schema.org/",
        "@type": "http://schema.org/Product",
        "name": "${service?.attributes?.name}",
        "description": "${service?.attributes?.short_description}",
        "image": "${getImageUrl(service?.attributes?.image)}",
        "url": "${process.env.BASE_URL}/subscribe/${service?.id}/${
        service.short_url
      }",
        "offers": {
          "@type": "http://schema.org/Offer",
          "url": "${process.env.BASE_URL}/subscribe/${service?.id}/${
        service.short_url
      }",
          "availability": "http://schema.org/InStock",
          "priceCurrency": "Rp",
          "price": "${service?.attributes?.price}"
        }
      }`,
      `{
        "@context": "http://schema.org",
        "@type": "Store",
        "name": "Akunify.com",
        "image": "${process.env.BASE_URL}/images/icon-akunify.png"
      }`,
    ]}
  />
)

export { ServiceDetailMeta }
