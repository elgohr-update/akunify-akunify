const getImageUrl = (
  image: any,
  format?: 'large' | 'medium' | 'small' | 'thumbnail'
) => {
  const imageHost =
    process.env.NEXT_PUBLIC_IMAGE_HOST || 'https://image-akunify.backpackr.xyz'

  let imgUrl: string = image?.data?.attributes?.url
  if (format && image?.data?.attributes?.formats[format]?.url) {
    imgUrl = image?.data?.attributes?.formats[format]?.url
  }

  return imageHost + imgUrl
}

export default getImageUrl
