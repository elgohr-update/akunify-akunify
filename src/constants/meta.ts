const defaultMeta = {
  pageTitle: 'Patungan Akun Premium Murah, Aman, Praktis & Terpercaya',
  pageDescription:
    'Situs berlangganan layanan premium seperti Netflix, Youtube dan Spotify yang murah, praktis dan terpercaya. Patungan menjadi lebih mudah dengan akunify.',
  robots:
    process.env.NEXT_PUBLIC_BUILD_ENV === 'production'
      ? 'index, follow, max-image-preview:large'
      : 'noindex, nofollow',
  author: 'Akunify.com',
  og: {
    url: 'https://akunify.com/',
    type: 'website',
    image: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og-images.png`,
    title: 'Patungan Akun Premium Murah, Aman, Praktis & Terpercaya',
    description:
      'Situs berlangganan layanan premium seperti Netflix, Youtube dan Spotify yang murah, praktis dan terpercaya. Patungan menjadi lebih mudah dengan akunify.',
  },
  fb: {
    campaignerName: 'Akunify.com',
    availability: 'available',
    condition: 'new',
    priceAmount: '25000',
    priceCurrency: 'IDR',
  },
  twitter: {
    card: 'product',
    site: '@akunify',
    title: 'Akunify.com',
    description:
      'Situs berlangganan layanan premium seperti Netflix, Youtube dan Spotify yang murah, praktis dan terpercaya. Patungan menjadi lebih mudah dengan akunify.',
    image: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og-images.png`,
    label1: 'price',
    data1: 'IDR25000',
    label2: 'category',
    data2: 'Akunify.com',
  },
  content: {
    title: 'Patungan Akun Premium Murah, Aman, Praktis & Terpercaya',
    keywords:
      'akunify, situs patungan, netflix premium, spotify premium family, youtube premium, patungan akun netflix, patungan akun spotify, patungan akun youtube',
    author: 'Akunify.com',
    canonical: 'https://akunify.com',
    alternate: 'https://www.akunify.com/',
  },
  structuredData: [
    `{
      "@context": "http://schema.org",
      "@type": "WebSite",
      "url": "${process.env.NEXT_PUBLIC_BASE_URL}"
    }`,
    `{
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Akunify.com",
      "url": "${process.env.NEXT_PUBLIC_BASE_URL}",
      "logo": "${process.env.NEXT_PUBLIC_BASE_URL}/images/og-images.png",
    }`,
  ],
}

export default defaultMeta
