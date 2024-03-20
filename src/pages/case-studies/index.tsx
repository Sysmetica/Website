import React, { FC } from 'react'
import { CASE_STUDIES_PAGE, OPTIONS } from '@/graphql/queries'
import { GetStaticProps } from 'next/types'
import client from '@/graphql/client'
import { Layout } from '@/common/layout/layout'
import { CareerPageFields } from '@/types/career'
import { Title } from '@/components/title/title'
import { OptionsProps } from '@/types/options'

interface Props {
  pageData: {
    attributes: {
      title: string
      subtitle: string
    }
  }
  options: OptionsProps
}

const CaseStudies: FC<Props> = ({ pageData, options }) => {
  const {
    attributes:
    {
      title,
      subtitle,
    }
  } = pageData

  return (
    <Layout theme={options.attributes.theme}>
      <Title
        title={title}
        subtitle={subtitle}
      />
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

  return {
    props: {
      pageData,
      options,
    },
    revalidate: 10,
  }
}