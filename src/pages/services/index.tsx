import React, { FC } from 'react'
import { OPTIONS, SERVICE_PAGE } from '@/graphql/queries'
import { GetStaticProps } from 'next/types'
import client from '@/graphql/client'
import { Layout } from '@/common/layout/layout'
import { CareerPageFields } from '@/types/career'
import { Title } from '@/components/title/title'
import { Process } from '@/parts/services/process/process'
import { List } from '@/parts/services/list/list'
import { Contacts } from '@/components/contacts/contacts'
import { OptionsProps } from '@/types/options'

interface Props {
  pageData: {
    attributes: {
      title: string,
      subtitle: string,
    }
  }
  options: OptionsProps
}

const Service: FC<Props> = ({ pageData, options }) => {
  const {
    attributes:
    {
      title,
      subtitle,
    }
  } = pageData

  return (
    <Layout theme={options.attributes.theme}>
      <Title title={title} subtitle={subtitle} type='center' />
      <Process theme={options.attributes.theme} />
      <List />
      <Contacts
        title={`Guiding your business evolution from any stage, we deliver the crucial pieces to propel your growth and success`}
        text={`Ready to collaborate on your next project?`}
      />
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

  return {
    props: {
      pageData,
      options,
    },
    revalidate: 10,
  }
}