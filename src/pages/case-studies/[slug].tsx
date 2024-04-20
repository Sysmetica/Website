import React, { FC } from 'react'
import { CASE_STUDIES_PAGE, GET_ALL_CAREERS_URL, GET_SINGLE_CAREER, META, OPTIONS } from '@/graphql/queries'
import { GetStaticProps } from 'next/types'
import client from '@/graphql/client'
import { Layout } from '@/common/layout/layout'
import { CareerPageFields, CareerProps, CareersProps } from '@/types/career';
import { OptionsProps } from '@/types/options'
import { GlobalProps } from '@/components/seo/types'
import { SeoContext } from '@/components/seo/seoContext'
import { ArchiveCase } from '@/parts/cases/archive/page'

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

const Case: FC<Props> = ({ pageData, options, globalMeta }) => {
  // const { attributes: { title, level, tags, description } } = pageData

  return (
    <Layout type='cases' options={options}>
      <SeoContext globalMeta={globalMeta}>
        <ArchiveCase />
      </SeoContext>
    </Layout>
  )
}

export default Case

export const getStaticPaths = async () => {

  // JUST TEST
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}

export const getStaticProps: GetStaticProps<any> = async () => {

   // JUST TEST   
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