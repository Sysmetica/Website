import React, { FC } from 'react'
import { CAREER_PAGE } from '@/graphql/queries'
import { GetStaticProps } from 'next/types'
import client from '@/graphql/client'
import { Layout } from '@/common/layout/layout'
import { CareerPageFields } from '@/types/career'
import { Offer } from '@/parts/career/offer/offer'
import { Title } from '@/components/title/title'
import { Careers } from '@/parts/career/list/list'

interface Props {
  pageData: CareerPageFields
}

const Career: FC<Props> = ({ pageData }) => {
  const {
    attributes:
    {
      title,
      careers,
      offer
    }
  } = pageData
  // console.log('pageData ', pageData)

  return (
    <Layout>
      <Title
        title={title.title}
        subtitle={title.subtitle}
      />
      <Careers careers={careers} />
      <Offer offer={offer} />
    </Layout>
  )
}

export default Career

export const getStaticProps: GetStaticProps<any> = async () => {
  const { data } = await client.query({ query: CAREER_PAGE })
  const pageData: CareerPageFields = data.careerPage.data;

  return {
    props: {
      pageData
    }
  }
}