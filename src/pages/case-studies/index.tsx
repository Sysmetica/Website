import React, { FC } from 'react'
import { CASE_STUDIES_PAGE } from '@/graphql/queries'
import { GetStaticProps } from 'next/types'
import client from '@/graphql/client'
import { Layout } from '@/common/layout/layout'
import { CareerPageFields } from '@/types/career'
import { Title } from '@/components/title/title'

interface Props {
  pageData: {
    attributes: {
      title: string
      subtitle: string
    }
  }
}

const CaseStudies: FC<Props> = ({ pageData }) => {
  const {
    attributes:
    {
      title,
      subtitle,
    }
  } = pageData

  return (
    <Layout>
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

  return {
    props: {
      pageData
    },
    revalidate: 10,
  }
}