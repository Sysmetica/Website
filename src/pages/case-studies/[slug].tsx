import React, { FC } from 'react'
import { GET_ALL_CASE_STUDIES_URL, GET_SINGLE_CASE_STUDIE, META, OPTIONS } from '@/graphql/queries'
import { GetStaticPaths, GetStaticProps } from 'next/types'
import client from '@/graphql/client'
import { Layout } from '@/common/layout/layout'
import { OptionsProps } from '@/types/options'
import { GlobalProps } from '@/components/seo/types'
import { SeoContext } from '@/components/seo/seoContext'
import { ArchiveCase } from '@/parts/cases/archive/page'

interface Props {
  pageData: {
    attributes: {
      slug: string
    }
  }
  options: OptionsProps
  globalMeta: GlobalProps
}

const Case: FC<Props> = ({ pageData, options, globalMeta }) => {
  const {
    attributes: {
      slug,
    }
  } = pageData
  // console.log('pageData ', pageData);

  return (
    <Layout type='cases' options={options}>
      <SeoContext globalMeta={globalMeta}>
        <ArchiveCase template={slug} />
      </SeoContext>
    </Layout>
  )
}

export default Case

export const getStaticPaths: GetStaticPaths<any> = async () => {
  const { data } = await client.query({ query: GET_ALL_CASE_STUDIES_URL })

  const paths = data.caseStudies.data.map((post: any) => {
    return {
      params: {
        slug: post.attributes.slug,
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<any> = async ({ params }: any) => {
  const { data } = await client.query({
    query: GET_SINGLE_CASE_STUDIE,
    variables: {
      slug: `${params.slug}`
    }
  })

  const pageData = data.caseStudies.data[0]

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