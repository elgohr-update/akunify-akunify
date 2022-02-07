export const getImageUrl = (image: any, format: 'large' | 'medium' | 'small' | 'thumbnail') => {

  const imageHost = process.env.IMAGE_HOST || 'https://image-akunify.backpackr.xyz'
  const imgUrl = image?.data?.attributes?.formats[format]?.url || ''

  return imageHost + '/' + imgUrl
}