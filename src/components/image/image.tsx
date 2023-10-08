import Image from 'next/image';

type MyImageProps = {
  src: string
  alt: string
  width: number
  height: number
  imgClass?: string
  onClick?: () => void
  refVal?: any
  blurImage?: string
  retina?: number
  upload?: boolean
}

const MyImage = ({
  src,
  alt,
  width,
  height,
  imgClass,
  onClick,
  refVal,
  blurImage,
  retina = 1,
  upload,
}: MyImageProps) => {

  const getUrl = (src: string) => {
    if (upload) {
      return `http://localhost:1337${src}`
    }
    return src
  }

  return (
    <Image
      ref={refVal}
      src={getUrl(src)}
      alt={alt}
      width={width * retina}
      height={height * retina}
      // loading='lazy'
      className={imgClass}
      onClick={onClick}
      placeholder={blurImage ? 'blur' : undefined}
      blurDataURL={blurImage}
    />
  )
}

export default MyImage