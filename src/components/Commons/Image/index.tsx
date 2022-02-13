import { default as NextImage } from 'next/image'

type LayoutValue = 'fill' | 'fixed' | 'intrinsic' | 'responsive'
type PlaceholderValue = 'blur' | 'empty'

interface Props {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  layout?: LayoutValue
  placeholder?: PlaceholderValue
  blurDataURL?: string
  priority?: boolean
  withNext?: boolean
}

const Image: React.FC<Props> = (props) => {
  const { withNext, ...nextImageProps } = props

  if (withNext) {
    return <NextImage {...nextImageProps} />
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { layout, placeholder, blurDataURL, priority, ...imageProps } =
      nextImageProps
    return <img {...imageProps} />
  }
}

export default Image
