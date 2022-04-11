const defaultMeta = {
  pageTitle: 'Akunify.com - Patungan akun premium',
  pageDescription:
    'Patungan akun premium murah, terpercaya & amanah untuk keluarga anda',
  robots:
    process.env.BUILD_ENV === 'production'
      ? 'index, follow, max-image-preview:large'
      : 'noindex, nofollow',
  author: 'Akunify',
  og: {
    url: 'https://akunify.com/',
    type: 'website',
    image: '/favicon/favicon-96x96.png',
    title: 'Akunify.com - Patungan akun premium',
    description:
      'Patungan akun premium murah, terpercaya & amanah untuk keluarga anda',
  },
  fb: {
    campaignerName: 'Akunify',
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
      'Patungan akun premium murah, terpercaya & amanah untuk keluarga anda',
    image: '/favicon/favicon-96x96.png',
    label1: 'price',
    data1: 'IDR25000',
    label2: 'category',
    data2: 'Akunify.com',
  },
  content: {
    title: 'Akunify.com - Patungan akun premium',
    keywords: 'akunify, patungan netflix, patungan spotify, sharing akun',
    author: 'Akunify',
    canonical: 'https://akunify.com',
    alternate: 'https://www.akunify.com/',
  },
}

export default defaultMeta
