import React, { FC } from 'react'
import { ABOUT_PAGE, META, OPTIONS } from '@/graphql/queries'
import { GetStaticProps } from 'next/types'
import client from '@/graphql/client'
import { Layout } from '@/common/layout/layout'
import { Contacts } from '@/components/contacts/contacts'
import { Team } from '@/parts/about/team/team'
import { Map } from '@/parts/about/map/map'
import { Title } from '@/components/title/title'
import { Gallery } from '@/parts/about/gallery/gallery'
import { OptionsProps } from '@/types/options'
import { Values } from '@/parts/home/values/values'
import { GalleryProps, MapProps, TeamsProps } from '@/types/about'
import { HomeValues } from '@/types/home'
import { GlobalProps } from '@/components/seo/types'
import { SeoContext } from '@/components/seo/seoContext'

interface Props {
  pageData: {
    attributes: {
      title: string,
      subtitle: string,
      values: HomeValues[]
      gallery: GalleryProps
      teams: TeamsProps
      map: MapProps
    }
  }
  options: OptionsProps
  globalMeta: GlobalProps
}

const About: FC<Props> = ({ pageData, options, globalMeta }) => {
  const {
    attributes:
    {
      title,
      subtitle,
      teams,
      gallery,
      values,
      map,
    }
  } = pageData

  return (
    <Layout options={options}>
      <SeoContext globalMeta={globalMeta}>
        <Title title={title} subtitle={subtitle} />
        <Gallery gallery={gallery} />
        <Map data={map} />
        <Values values={values} />
        <Team teams={teams} />
        <Contacts
          title={`Ready to Collaborate on Your Next Project?`}
          text={`Together, we'll delve into your idea and offer a customized estimate. Simply click the button below to complete the form`}
        />
      </SeoContext>
    </Layout>
  )
}

export default About

export const getStaticProps: GetStaticProps<any> = async () => {
  const { data } = await client.query({ query: ABOUT_PAGE })
  const pageData = data.aboutPage.data;

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