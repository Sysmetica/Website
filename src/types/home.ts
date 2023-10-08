import { CareersProps } from "./career"
import { CaseStudies } from "./casestudies"

export interface HomePageFields {
  attributes: {
    title: string,
    subtitle: string,
    values: HomeValues[]
    careers: CareersProps
    casestudies: CaseStudies
  }
}

export type HomeValues = {
  title: string,
  text: string
}

