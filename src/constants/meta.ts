const defaultMeta = {
  pageTitle: 'Akunify.com - Patungan akun premium ',
  pageDescription:
    'Patungan akun premium murah, terpercaya & amanah untuk keluarga anda',
  appId:
    process.env.NODE_ENV === 'production'
      ? '1242554542569070'
      : '638459803711575',
  robots:
    process.env.NODE_ENV === 'production'
      ? 'index, follow, max-image-preview:large'
      : 'noindex, nofollow',
  author: 'Akunify',
  og: {
    url: 'https://akunify.id/',
    type: 'website',
    image: '/favicon-96x96.png',
    title: 'Akunify.com - Patungan akun premium ',
    description:
      'Patungan akun premium murah, terpercaya & amanah untuk keluarga anda',
  },
  fb: {
    campaignerName: 'Akunify',
    availability: 'out of stock',
    condition: 'new',
    priceAmount: '0',
    priceCurrency: 'IDR',
    campaignId: '1',
  },
  twitter: {
    card: 'product',
    site: '@akunify',
    title: 'Akunify.com',
    description:
      'Patungan akun premium murah, terpercaya & amanah untuk keluarga anda',
    image: '/favicon-96x96.png',
    label1: 'price',
    data1: 'IDR25000',
    label2: 'category',
    data2: 'Akunify.com',
  },
  bussiness: {
    street_address:
      'Jl. Raya Cilandak Kko No.31, RT.1/RW.8, Ragunan, Kec. Ps. Minggu',
    locality: 'Jakarta Selatan',
    region: 'DKI Jakarta',
    postal_code: '12550',
    country_name: 'Indonesia',
  },
  content: {
    title: 'Akunify.com - Patungan akun premium ',
    keywords: 'Tour, Travel, Trip, Open Trip',
    author: 'Akunify',
    canonical: 'https://akunify.id',
    alternate: 'https://www.akunify.id/',
  },
}

export default defaultMeta
