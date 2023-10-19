import React, { FC } from 'react'
import { SERVICE_PAGE } from '@/graphql/queries'
import { GetStaticProps } from 'next/types'
import client from '@/graphql/client'
import { Layout } from '@/common/layout/layout'
import { CareerPageFields } from '@/types/career'
import { Title } from '@/components/title/title'
import { Process } from '@/parts/services/process/process'
import { List } from '@/parts/services/list/list'
import { Contacts } from '@/components/contacts/contacts'

interface Props {
  pageData: {
    attributes: {
      title: string,
      subtitle: string,
    }
  }
}

const Service: FC<Props> = ({ pageData }) => {
  const {
    attributes:
    {
      title,
      subtitle,
    }
  } = pageData

  return (
    <Layout>
      <Title title={title} subtitle={subtitle} type='center' />
      <Process />
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

  return {
    props: {
      pageData
    },
    revalidate: 10,
  }
}