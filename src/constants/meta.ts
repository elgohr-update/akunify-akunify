const defaultMeta = {
  pageTitle: 'Backpackr.id - Indonesia Traveling Platform',
  pageDescription: 'Situs booking online tour and travel nomor 1 di Indonesia',
  appId:
    process.env.NODE_ENV === 'production'
      ? '1242554542569070'
      : '638459803711575',
  robots:
    process.env.NODE_ENV === 'production'
      ? 'index, follow, max-image-preview:large'
      : 'noindex, nofollow',
  author: 'Backpackr',
  og: {
    url: 'https://backpackr.id/',
    type: 'website',
    image: 'https://assets.kitabisa.cc/images/icons/meta/icons-512.png',
    title: 'Backpackr.id - Indonesia Traveling Platform',
    description: 'Situs booking online tour and travel nomor 1 di Indonesia',
  },
  fb: {
    campaignerName: 'Backpackr',
    availability: 'out of stock',
    condition: 'new',
    priceAmount: '0',
    priceCurrency: 'IDR',
    campaignId: '1',
  },
  twitter: {
    card: 'product',
    site: '@backpackrid',
    title: 'Backpackr.id',
    description: 'Situs booking online tour and travel nomor 1 di Indonesia',
    image: 'https://assets.kitabisa.cc/images/icons/meta/icons-512.png',
    label1: 'price',
    data1: 'IDR10000',
    label2: 'category',
    data2: 'Backpackr.id',
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
    title: 'Backpackr.id - Indonesia Traveling Platform',
    keywords: 'Tour, Travel, Trip, Open Trip',
    author: 'Backpackr',
    canonical: 'https://backpackr.id',
    alternate: 'https://www.backpackr.id/',
  },
}

export default defaultMeta
