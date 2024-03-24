import { SchemaOrg } from "./schema"
import { MetaData } from "./metaData"
import { SeoContextProps } from "./types"

export const SeoContext = ({ seo, schema, globalMeta, children }: SeoContextProps) => {
  return (
    <>
      <MetaData global={globalMeta} />
      {schema && <SchemaOrg obj={schema} />}

      {children}
    </>
  )
}