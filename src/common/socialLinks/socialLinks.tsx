import MyImage from "@/components/image/image"
import Link from "next/link"

export const SocialLinks = () => {
  return (
    <>
      <Link href={'https://www.upwork.com/agencies/1013061354596433920/'} target='_black'>
        <MyImage src="/img/upwork.svg" alt='upwork logo' width={86} height={24} />
      </Link>
      <Link href={'https://www.linkedin.com/company/sysmetica/'} target='_blank'>
        <MyImage src="/img//icons/linkedin.svg" alt='linkedin icon' width={24} height={24} />
      </Link>
      <Link href={'https://www.instagram.com/sysmetica'} target='_black'>
        <MyImage src="/img//icons/instagram.svg" alt='instagram icon' width={24} height={24} />
      </Link>
    </>
  )
}