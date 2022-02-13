export const getImageUrl = (image: any, format?: 'large' | 'medium' | 'small' | 'thumbnail') => {

  const imageHost = process.env.IMAGE_HOST || 'https://image-akunify.backpackr.xyz'
  const imgUrl = format ? image?.data?.attributes?.formats[format]?.url : image?.data?.attributes?.url

  return imageHost + imgUrl
}