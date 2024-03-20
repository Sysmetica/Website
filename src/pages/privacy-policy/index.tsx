import React, { FC } from 'react'
import { OPTIONS, PRIVACY_PAGE } from '@/graphql/queries'
import { GetStaticProps } from 'next/types'
import client from '@/graphql/client'
import { Layout } from '@/common/layout/layout'
import { HomePageFields } from '@/types/home'
import { Editor } from '@/common/editor/editor'
import { Row } from '@/common/row/row'
import s from '@/parts/page/page.module.scss';
import MyImage from '@/components/image/image'
import { OptionsProps } from '@/types/options'

interface Props {
  pageData: {
    attributes: {
      title: string,
      subtitle: string,
      editor: string
    }
  }
  options: OptionsProps
}

const Privacy: FC<Props> = ({ pageData, options }) => {
  const { attributes: { title, subtitle, editor } } = pageData

  return (
    <Layout theme={options.attributes.theme}>
      <div className={s.root}>
        <div className={s.head}>
          <Row>
            <div className={s.wrap}>
              <div className={s.info}>
                <div className={s.buttonWrap}>
                  <MyImage src="/img/icons/page.svg" alt="text" width={48} height={48} imgClass={s.ico} />
                </div>
                <h1>{title}</h1>
                <p>{subtitle}</p>
              </div>
            </div>
          </Row>
        </div>
        <Editor>
          <Row>
            <div className={s.editorWrap}>
              <div dangerouslySetInnerHTML={{ __html: editor }} />
            </div>
          </Row>
        </Editor>

      </div>
    </Layout>
  )
}

export default Privacy

export const getStaticProps: GetStaticProps<any> = async () => {
  const { data } = await client.query({ query: PRIVACY_PAGE })
  const pageData: HomePageFields = data.privacyPolicy.data;

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