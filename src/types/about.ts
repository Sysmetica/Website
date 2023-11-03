import { ImageProps } from './common';

export interface AboutPageFields {
  attributes: {
    title: string,
    subtitle: string,
    gallery: {
      data: {
        attributes: {
          url: string,
        }
      }[]
    }
    teams: {
      data: {
        attributes: {
          name: string,
          photo: ImageProps
          role: string
          description: string
          linkedin: string
        }
      }[]
    }
  }
}
