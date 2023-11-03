import { CareersProps } from "./career"
import { CaseStudies } from "./casestudies"
import { ImageProps } from "./common"

export interface HomePageFields {
  attributes: {
    title: string,
    subtitle: string,
    values: HomeValues[]
    careers: CareersProps
    casestudies: CaseStudies
    teams: InfoTeam
  }
}

export type InfoTeam = {
  data: {
    attributes: {
      preview: ImageProps
    }
  }[]
}

export type HomeValues = {
  title: string,
  text: string
}

