import MyImage from "@/components/image/image"
import Link from "next/link"
import UpworkIcon from '../../../public/img/icons/upwork.svg'
import InstagramIcon from '../../../public/img/icons/instagram.svg'
import LinkedinIcon from '../../../public/img/icons/linkedin.svg'

export const SocialLinks = () => {
  return (
    <>
      <Link href={'https://www.upwork.com/agencies/1013061354596433920/'} target='_black'>
        <UpworkIcon />
      </Link>
      <Link href={'https://www.linkedin.com/company/sysmetica/'} target='_blank'>
        <LinkedinIcon />
      </Link>
      <Link href={'https://www.instagram.com/sysmetica'} target='_black'>
        <InstagramIcon />
      </Link>
    </>
  )
}