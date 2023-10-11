import React, { FC } from 'react'
import { PRIVACY_PAGE, TERMS_PAGE } from '@/graphql/queries'
import { GetStaticProps } from 'next/types'
import client from '@/graphql/client'
import { Layout } from '@/common/layout/layout'
import { HomePageFields } from '@/types/home'
import { Editor } from '@/common/editor/editor'
import { Row } from '@/common/row/row'
import s from '@/parts/page/page.module.scss';
import MyImage from '@/components/image/image'

interface Props {
  pageData: {
    attributes: {
      title: string,
      subtitle: string,
      editor: string
    }
  }
}

const Terms: FC<Props> = ({ pageData }) => {
  const { attributes: { title, subtitle, editor } } = pageData

  return (
    <Layout>
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

export default Terms

export const getStaticProps: GetStaticProps<any> = async () => {
  const { data } = await client.query({ query: TERMS_PAGE })
  const pageData: HomePageFields = data.termsOfService.data;

  return {
    props: {
      pageData
    }
  }
}