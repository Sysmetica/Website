import React, { FC } from 'react'
import { CAREER_PAGE, SERVICE_PAGE } from '@/graphql/queries'
import { GetStaticProps } from 'next/types'
import client from '@/graphql/client'
import { Layout } from '@/common/layout/layout'
import { CareerPageFields } from '@/types/career'
import { Offer } from '@/parts/career/offer/offer'
import { Title } from '@/components/title/title'
import { Careers } from '@/parts/career/list/list'

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
    }
  }
}