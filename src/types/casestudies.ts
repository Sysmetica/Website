export type CaseStudiesProps = {
  data: {
    attributes: {
      title: string
      slug: string
      template: string
      description: string
      site: string
      href: string
      tags: {
        text: string
      }[]
      landscape: {
        data: {
          attributes: {
            previewUrl: string
            url: string
          }
        }
      }
      portrait: {
        data: {
          attributes: {
            previewUrl: string
            url: string
          }
        }
      }
    }
  }[]
}