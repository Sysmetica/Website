import { ImageProps } from "./common"

export type CaseStudiesProps = {
  data: {
    attributes: {
      title: string
      slug: string
      template: string
      description: string
      site: string | null
      href: string | null
      tags: {
        text: string
      }[]
      landscape: ImageProps
      portrait: ImageProps
    }
  }[]
}