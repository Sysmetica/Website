import React, { FC } from 'react'
import { HOME_PAGE, META, OPTIONS } from '@/graphql/queries'
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
import { HomeValues, InfoProps, InfoTeam } from '@/types/home'
import { Services } from '@/parts/home/services/services'
import { OptionsProps } from '@/types/options'
import { CareersProps } from '@/types/career'
import { CaseStudiesProps } from '@/types/casestudies'
import { SeoContext } from '@/components/seo/seoContext'
import { GlobalProps } from '@/components/seo/types'
import gl from '@/styles/global.module.scss'

interface Props {
  pageData: {
    attributes: {
      title: string
      subtitle: string
      subtitleSelected: string
      info: InfoProps
      values: HomeValues[]
      careers: CareersProps
      casestudies: CaseStudiesProps
      teams: InfoTeam
    }
  }
  options: OptionsProps
  globalMeta: GlobalProps
}

const Home: FC<Props> = ({ pageData, options, globalMeta }) => {
  const {
    attributes: {
      values,
      careers,
      casestudies,
      teams,
      title,
      subtitle,
      subtitleSelected,
      info,
    }
  } = pageData
  // console.log('pageData ', pageData);

  const theme = options.attributes.theme;

  return (
    <Layout type="home" options={options}>
      <SeoContext globalMeta={globalMeta}>
        <HomeStep title={title} subtitle={subtitle} selectedString={subtitleSelected} />
        <div className={gl.white}>
          <InfoStep team={teams} info={info} />
          <Progress />
          <Casestudies casestudies={casestudies} />
        </div>
        <Services />
        <Values values={values} />
        <Career careers={careers} />
        <Contacts />
      </SeoContext>
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps<any> = async () => {
  const { data } = await client.query({ query: HOME_PAGE })
  const pageData = data.homePage.data;

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