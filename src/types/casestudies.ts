import { ImageProps } from "./common"

export type CaseItemProps = {
  title: string
  slug: string
  template: string
  description: string
  site: string | null
  href: string | null
  tags: {
    text: string
  }[]
  homeImage: ImageProps
  archiveImage: ImageProps
}

export type CaseStudiesProps = {
  data: {
    attributes: CaseItemProps
  }[]
}

export type CaseItemRelation = {
  data: {
    attributes: CaseItemProps
  } | null
}
