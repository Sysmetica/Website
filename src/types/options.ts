export type OptionsProps = {
  attributes: {
    theme: 'dark' | 'light'
    copy: string
    linkedin: string
    upwork: string
    instagram: string
    menu: {
      slug: string | null
      name: string | null
    }[]
  }
}
