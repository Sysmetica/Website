import React, { FC } from 'react'
import { CAREER_PAGE, META, OPTIONS } from '@/graphql/queries'
import { GetStaticProps } from 'next/types'
import client from '@/graphql/client'
import { Layout } from '@/common/layout/layout'
import { CareerPageFields } from '@/types/career'
import { Offer } from '@/parts/career/offer/offer'
import { Title } from '@/components/title/title'
import { Careers } from '@/parts/career/list/list'
import { OptionsProps } from '@/types/options'
import { GlobalProps } from '@/components/seo/types'
import { SeoContext } from '@/components/seo/seoContext'

interface Props {
  pageData: CareerPageFields
  options: OptionsProps
  globalMeta: GlobalProps
}

const Career: FC<Props> = ({ pageData, options, globalMeta }) => {
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
    <Layout options={options}>
      <SeoContext globalMeta={globalMeta}>
        <Title
          title={title.title}
          subtitle={title.subtitle}
        />
        <Careers careers={careers} />
        <Offer offer={offer} />
      </SeoContext>
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