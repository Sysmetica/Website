import UpworkIcon from '../../../public/img/icons/upwork.svg'
import ClutchIcon from '../../../public/img/icons/clutch.svg'
import InstagramIcon from '../../../public/img/icons/instagram.svg'
import LinkedinIcon from '../../../public/img/icons/linkedin.svg'
import { OptionsContext } from "../layout/layout"
import { useContext } from "react"
import { MyLink } from "@/components/link/link"

export const SocialLinks = () => {
  const options = useContext(OptionsContext);

  return (
    <>
      {options.attributes.clutch && (
        <MyLink href={options.attributes.clutch} target='_black'>
          <ClutchIcon />
        </MyLink>
      )}
      {options.attributes.upwork && (
        <MyLink href={options.attributes.upwork} target='_black'>
          <UpworkIcon />
        </MyLink>
      )}
      {options.attributes.linkedin && (
        <MyLink href={options.attributes.linkedin} target='_blank'>
          <LinkedinIcon />
        </MyLink>
      )}
      {options.attributes.instagram && (
        <MyLink href={options.attributes.instagram} target='_black'>
          <InstagramIcon />
        </MyLink>
      )}
    </>
  )
}