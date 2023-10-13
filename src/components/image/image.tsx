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
}: MyImageProps) => {
  return (
    <Image
      ref={refVal}
      src={src}
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