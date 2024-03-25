import { ImageProps } from "./common"

export type MapProps = {
  title: string | null
  text: string | null
} | null

export type GalleryProps = {
  data: {
    attributes: {
      url: string,
    }
  }[]
}

export type TeamsProps = {
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