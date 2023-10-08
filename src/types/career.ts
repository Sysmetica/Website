export type CareerPageFields = {
  attributes: {
    title: {
      title: string
      subtitle: string
    }
    careers: CareersProps
    offer: {
      id: number
      title: string
      text: string
    }[]
  }
}

export type CareersProps = {
  data: CareerProps[]
}

export type CareerProps = {
  attributes: {
    title: string
    description: string
    slug: string
    level: string,
    tags: {
      icon: string,
      text: string
    }[]
  }
}