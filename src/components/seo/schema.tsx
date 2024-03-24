import Script from "next/script"

export const SchemaOrg = ({ obj }: { obj: any }) => {
  const schema = {
    '@context': 'https://schema.org',
    ...obj
  }

  return (
    <Script
      id="schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  )
}