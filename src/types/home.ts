import { CareersProps } from "./career"
import { ImageProps } from "./common"

export type InfoProps = {
  sectionOneTitle: string
  sectionOneText: string
  sectionOneLink: string
  sectionTwoTitle: string
  sectionTwoText: string
  sectionTwoLink: string
} | null

export type InfoTeam = {
  data: {
    attributes: {
      preview: ImageProps
    }
  }[]
}

export type HomeValues = {
  title: string
  text: string
  icon: string | null
}

