import Link from "next/link"
import UpworkIcon from '../../../public/img/icons/upwork.svg'
import InstagramIcon from '../../../public/img/icons/instagram.svg'
import LinkedinIcon from '../../../public/img/icons/linkedin.svg'
import { OptionsContext } from "../layout/layout"
import { useContext } from "react"

export const SocialLinks = () => {
  const options = useContext(OptionsContext);

  return (
    <>
      {options.attributes.upwork && (
        <Link href={options.attributes.upwork} target='_black'>
          <UpworkIcon />
        </Link>
      )}
      {options.attributes.linkedin && (
        <Link href={options.attributes.linkedin} target='_blank'>
          <LinkedinIcon />
        </Link>
      )}
      {options.attributes.instagram && (
        <Link href={options.attributes.instagram} target='_black'>
          <InstagramIcon />
        </Link>
      )}
    </>
  )
}