const defaultMeta = {
  pageTitle: 'Akunify.com - Patungan akun premium',
  pageDescription:
    'Situs berlangganan layanan premium seperti Netflix, Youtube dan Spotify yang murah, praktis dan terpercaya. Patungan menjadi lebih mudah dengan akunify.',
  robots:
    process.env.BUILD_ENV === 'production'
      ? 'index, follow, max-image-preview:large'
      : 'noindex, nofollow',
  author: 'Akunify.com',
  og: {
    url: 'https://akunify.com/',
    type: 'website',
    image: `${process.env.BASE_URL}images/og-images.png`,
    title: 'Akunify.com - Patungan akun premium',
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
    image: `${process.env.BASE_URL}images/og-images.png`,
    label1: 'price',
    data1: 'IDR25000',
    label2: 'category',
    data2: 'Akunify.com',
  },
  content: {
    title: 'Akunify.com - Patungan akun premium',
    keywords:
      'akunify, situs patungan, netflix premium, spotify premium family, youtube premium, patungan akun netflix, patungan akun spotify, patungan akun youtube',
    author: 'Akunify.com',
    canonical: 'https://akunify.com',
    alternate: 'https://www.akunify.com/',
  },
}

export default defaultMeta
