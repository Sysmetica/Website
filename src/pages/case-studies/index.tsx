import React, { FC } from 'react'
import { CASE_STUDIES_PAGE, META, OPTIONS } from '@/graphql/queries'
import { GetStaticProps } from 'next/types'
import client from '@/graphql/client'
import { Layout } from '@/common/layout/layout'
import { CareerPageFields } from '@/types/career'
import { Title } from '@/components/title/title'
import { OptionsProps } from '@/types/options'
import { GlobalProps } from '@/components/seo/types'
import { SeoContext } from '@/components/seo/seoContext'

interface Props {
  pageData: {
    attributes: {
      title: string
      subtitle: string
    }
  }
  options: OptionsProps
  globalMeta: GlobalProps
}

const CaseStudies: FC<Props> = ({ pageData, options, globalMeta }) => {
  const {
    attributes:
    {
      title,
      subtitle,
    }
  } = pageData

  const theme = options.attributes.theme;

  return (
    <Layout options={options}>
      <SeoContext globalMeta={globalMeta}>
        <Title
          title={title}
          subtitle={subtitle}
        />
      </SeoContext>
    </Layout>
  )
}

export default CaseStudies

export const getStaticProps: GetStaticProps<any> = async () => {
  const { data } = await client.query({ query: CASE_STUDIES_PAGE })
  const pageData: CareerPageFields = data.caseStudiesPage.data;

  // options
  const optionsData = await client.query({ query: OPTIONS });
  const options = optionsData.data.option.data;

  // meta
  const globalMetaData = await client.query({ query: META });
  const globalMeta = globalMetaData.data.meta.data;

  return {
    props: {
      pageData,
      options,
      globalMeta,
    },
    revalidate: 10,
  }
}