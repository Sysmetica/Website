import React, { FC } from 'react'
import { HOME_PAGE } from '@/graphql/queries'
import { GetStaticProps } from 'next/types'
import client from '@/graphql/client'
import { HomeStep } from '@/parts/home/home/home'
import { Contacts } from '@/components/contacts/contacts'
import { InfoStep } from '@/parts/home/info/info'
import { Progress } from '@/parts/home/progress/progress'
import { Casestudies } from '@/parts/home/casestudies/casestudies'
import { Values } from '@/parts/home/values/values'
import { Career } from '@/parts/home/career/career'
import { Layout } from '@/common/layout/layout'
import { HomePageFields } from '@/types/home'
import { Services } from '@/parts/home/services/services'

interface Props {
  pageData: HomePageFields
}

const Home: FC<Props> = ({ pageData }) => {
  const { attributes: { title, subtitle, values, careers, casestudies, teams } } = pageData
  console.log('pageData ', pageData)

  return (
    <Layout type="home">
      <HomeStep />
      <InfoStep team={teams} />
      <Progress />
      <Casestudies casestudies={casestudies} />
      <Services />
      <Values values={values} />
      <Career careers={careers} />
      <Contacts />
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps<any> = async () => {
  const { data } = await client.query({ query: HOME_PAGE })
  const pageData: HomePageFields = data.homePage.data;

  return {
    props: {
      pageData
    },
    revalidate: 10,
  }
}