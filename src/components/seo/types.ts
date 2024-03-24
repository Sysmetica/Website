import { OptionsProps } from "@/types/options"

export type MetaDataProps = {
  global: GlobalProps
  // custom: SeoProps | undefined
}

export type SeoProps = {
  title: string
  description: string
  nosnippet: boolean,
  notranslate: boolean,
  noimageindex: boolean,
  noarchive: boolean,
  maxSnippet: number,
  maxImagePreview: 'large' | 'none' | 'standard',
  maxVideoPreview: number,
} | null

export type GlobalProps = {
  attributes: {
    title: string
    description: string
    // name: string
    // telephone: string
    // email: string
    // faxNumber: string
    // founder: string
    // foundingDate: string
    // numberOfEmployees: string
    // hoursAvailable: string
    // postalCode: string
    // streetAddress: string
    // addressLocality: string
    // hiringEmail: string
    // memberOf: string
  }
}

export type SeoContextProps = {
  seo?: SeoProps
  schema?: any
  globalMeta: GlobalProps
  children: any
}
