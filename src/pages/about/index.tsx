import React, { FC } from 'react'
import { ABOUT_PAGE } from '@/graphql/queries'
import { GetStaticProps } from 'next/types'
import client from '@/graphql/client'
import { Layout } from '@/common/layout/layout'
import { Contacts } from '@/components/contacts/contacts'
import { AboutPageFields } from '@/types/about'
import { Team } from '@/parts/about/team/team'
import { Map } from '@/parts/about/map/map'
import { Title } from '@/components/title/title'
import { Gallery } from '@/parts/about/gallery/gallery'

interface Props {
  pageData: AboutPageFields
}

const About: FC<Props> = ({ pageData }) => {
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
    <Layout>
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

  return {
    props: {
      pageData
    }
  }
}