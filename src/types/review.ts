export type ReviewsProps = {
  data: ReviewProps[]
}

type ReviewProps = {
  attributes: {
    company: string
    position: string
    review: string
    rating: number
    link: string
  }
}