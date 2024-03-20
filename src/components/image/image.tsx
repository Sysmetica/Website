import Image from 'next/image';

type MyImageProps = {
  src: string | undefined
  alt?: string | undefined
  title?: string
  width: number
  height: number
  imgClass?: string
  onClick?: () => void
  refVal?: any
  blurImage?: string
  retina?: number
  upload?: boolean
  quality?: number
}

const MyImage = ({
  src,
  alt,
  title,
  width,
  height,
  imgClass,
  onClick,
  refVal,
  blurImage,
  retina = 1,
  upload,
  quality = 75,
  ...rest
}: MyImageProps) => {

  const getUrl = (src: string) => {
    if (upload) {
      return `${process.env.NEXT_PUBLIC_SITE_URL}${src}`
    }

    return src
  }

  return (
    <Image
      ref={refVal}
      src={src ? getUrl(src) : '/img/placeholder.jpg'}
      alt={!alt ? 'klickkonzept' : alt}
      title={title}
      width={width * retina}
      height={height * retina}
      // loading='lazy'
      className={imgClass}
      onClick={onClick}
      placeholder={blurImage ? 'blur' : undefined}
      blurDataURL={blurImage}
      quality={quality}
      {...rest}
    />
  )
}

export default MyImage