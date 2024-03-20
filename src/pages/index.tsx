import React, { FC } from 'react'
import { HOME_PAGE, OPTIONS } from '@/graphql/queries'
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
import { OptionsProps } from '@/types/options'

interface Props {
  pageData: HomePageFields
  options: OptionsProps
}

const Home: FC<Props> = ({ pageData, options }) => {
  const {
    attributes: {
      values,
      careers,
      casestudies,
      teams
    }
  } = pageData
  // console.log('pageData ', pageData)
  // console.log('options ', options);

  return (
    <Layout type="home" theme={options.attributes.theme}>
      <HomeStep />
      <div className="white">
        <InfoStep team={teams} />
        <Progress />
        <Casestudies casestudies={casestudies} />
      </div>
      <Services />
      <Values values={values} />
      <Career careers={careers} theme={options.attributes.theme} />
      <Contacts />
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps<any> = async () => {
  const { data } = await client.query({ query: HOME_PAGE })
  const pageData: HomePageFields = data.homePage.data;

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