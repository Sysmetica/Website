import React, { FC } from 'react'
import { CAREER_PAGE, OPTIONS } from '@/graphql/queries'
import { GetStaticProps } from 'next/types'
import client from '@/graphql/client'
import { Layout } from '@/common/layout/layout'
import { CareerPageFields } from '@/types/career'
import { Offer } from '@/parts/career/offer/offer'
import { Title } from '@/components/title/title'
import { Careers } from '@/parts/career/list/list'
import { OptionsProps } from '@/types/options'

interface Props {
  pageData: CareerPageFields
  options: OptionsProps
}

const Career: FC<Props> = ({ pageData, options }) => {
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
    <Layout theme={options.attributes.theme}>
      <Title
        title={title.title}
        subtitle={title.subtitle}
      />
      <Careers careers={careers} theme={options.attributes.theme} />
      <Offer offer={offer} />
    </Layout>
  )
}

export default Career

export const getStaticProps: GetStaticProps<any> = async () => {
  const { data } = await client.query({ query: CAREER_PAGE })
  const pageData: CareerPageFields = data.careerPage.data;

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