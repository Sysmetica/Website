import React, { FC } from 'react'
import { META, OPTIONS, SERVICE_PAGE } from '@/graphql/queries'
import { GetStaticProps } from 'next/types'
import client from '@/graphql/client'
import { Layout } from '@/common/layout/layout'
import { CareerPageFields } from '@/types/career'
import { Title } from '@/components/title/title'
import { Process } from '@/parts/services/process/process'
import { List } from '@/parts/services/list/list'
import { Contacts } from '@/components/contacts/contacts'
import { OptionsProps } from '@/types/options'
import { GlobalProps } from '@/components/seo/types'
import { SeoContext } from '@/components/seo/seoContext'

interface Props {
  pageData: {
    attributes: {
      title: string,
      subtitle: string,
    }
  }
  options: OptionsProps
  globalMeta: GlobalProps
}

const Service: FC<Props> = ({ pageData, options, globalMeta }) => {
  const {
    attributes: {
      title,
      subtitle,
    }
  } = pageData

  return (
    <Layout options={options}>
      <SeoContext globalMeta={globalMeta}>
        <Title title={title} subtitle={subtitle} type='center' />
        <Process />
        <List />
        <Contacts
          title={`Guiding your business evolution from any stage, we deliver the crucial pieces to propel your growth and success`}
          text={`Ready to collaborate on your next project?`}
        />
      </SeoContext>
    </Layout>
  )
}

export default Service

export const getStaticProps: GetStaticProps<any> = async () => {
  const { data } = await client.query({ query: SERVICE_PAGE })
  const pageData: CareerPageFields = data.servicePage.data;

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