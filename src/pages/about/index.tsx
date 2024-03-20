import React, { FC } from 'react'
import { ABOUT_PAGE, OPTIONS } from '@/graphql/queries'
import { GetStaticProps } from 'next/types'
import client from '@/graphql/client'
import { Layout } from '@/common/layout/layout'
import { Contacts } from '@/components/contacts/contacts'
import { AboutPageFields } from '@/types/about'
import { Team } from '@/parts/about/team/team'
import { Map } from '@/parts/about/map/map'
import { Title } from '@/components/title/title'
import { Gallery } from '@/parts/about/gallery/gallery'
import { OptionsProps } from '@/types/options'

interface Props {
  pageData: AboutPageFields
  options: OptionsProps
}

const About: FC<Props> = ({ pageData, options }) => {
  const {
    attributes:
    {
      title,
      subtitle,
      teams,
      gallery
    }
  } = pageData

  return (
    <Layout theme={options.attributes.theme}>
      <Title title={title} subtitle={subtitle} />
      <Gallery gallery={gallery} />
      <Map />
      <Team teams={teams} />
      <Contacts
        title={`Ready to Collaborate on Your Next Project?`}
        text={`Together, we'll delve into your idea and offer a customized estimate. Simply click the button below to complete the form`}
      />
    </Layout>
  )
}

export default About

export const getStaticProps: GetStaticProps<any> = async () => {
  const { data } = await client.query({ query: ABOUT_PAGE })
  const pageData: AboutPageFields = data.aboutPage.data;

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