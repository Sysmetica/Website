import React, { FC } from 'react'
import { GET_ALL_CAREERS_URL, GET_SINGLE_CAREER, META, OPTIONS } from '@/graphql/queries'
import { GetStaticPaths, GetStaticProps } from 'next/types'
import client from '@/graphql/client'
import { Layout } from '@/common/layout/layout'
import { Row } from '@/common/row/row'
import s from '@/parts/career/single/single.module.scss';
import { CareerProps, CareersProps } from '@/types/career';
import MyImage from '@/components/image/image';
import { Button } from '@/components/button/button';
import { Editor } from '@/common/editor/editor';
import dynamic from 'next/dynamic';
import { useAtom } from 'jotai';
import { csModal } from '@/state';
import { useRouter } from 'next/router'
import { OptionsProps } from '@/types/options'
import { GlobalProps } from '@/components/seo/types'
import { SeoContext } from '@/components/seo/seoContext'

const CvForm = dynamic(() => import('@/components/cv/cv'));

interface Props {
  pageData: CareerProps
  list: CareersProps['data']
  options: OptionsProps
  globalMeta: GlobalProps
}

const Career: FC<Props> = ({ pageData, list, options, globalMeta }) => {
  const { attributes: { title, level, tags, description } } = pageData
  const [modal, setModal] = useAtom(csModal);
  const router = useRouter();

  const modalHandler = (e: any) => {
    e.preventDefault();
    setModal(true);
    document.body.style.overflow = 'hidden';
  }

  return (
    <Layout options={options}>
      <SeoContext globalMeta={globalMeta}>
        <div className={s.root}>
          <div className={s.head}>
            <Row>
              <div className={s.wrap}>
                <span className={s.back} data-fade onClick={() => router.back()}>{`back`}</span>
                <div className={s.info} data-fade>
                  <div className={s.buttonWrap}>
                    <MyImage src="/img/icons/career1.svg" alt="text" width={48} height={48} imgClass={s.ico} />
                    <Button type={['submit', 'black']} onClick={modalHandler}>{`Submit Your CV`}</Button>
                  </div>
                  <h1>{title}</h1>
                  <p>{level.replace('_', ' ')}</p>
                  <div className={s.tags}>
                    {tags.map(({ text, icon }, index) => {
                      return (
                        <div className={s.tag} key={`${text}${index}`}>
                          <MyImage src={`/img/icons/${icon}.svg`} alt="text" width={24} height={24} />
                          <span>{text}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </Row>
          </div>
          <Editor>
            <Row>
              <div className={s.editorWrap}>
                <div dangerouslySetInnerHTML={{ __html: description }} data-fade data-child />
                <div className={s.button} data-fade>
                  <Button type={['submit', 'fill']} onClick={modalHandler}>{`Submit Your CV`}</Button>
                </div>
              </div>
            </Row>
          </Editor>

          {modal && <CvForm svList={list} activeCv={title} />}
        </div>
      </SeoContext>
    </Layout>
  )
}

export default Career

export const getStaticPaths: GetStaticPaths<any> = async () => {
  const { data } = await client.query({ query: GET_ALL_CAREERS_URL })

  const paths = data.careers.data.map((post: any) => {
    return {
      params: {
        slug: post.attributes.slug,
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<any> = async ({ params }: any) => {
  const { data } = await client.query({
    query: GET_SINGLE_CAREER,
    variables: {
      slug: `${params.slug}`
    }
  })

  const cvList = await client.query({ query: GET_ALL_CAREERS_URL })
  const pageData = data.careers.data[0]

  // options
  const optionsData = await client.query({ query: OPTIONS });
  const options = optionsData.data.option.data;

  // meta
  const globalMetaData = await client.query({ query: META });
  const globalMeta = globalMetaData.data.meta.data;

  return {
    props: {
      pageData,
      list: cvList.data.careers.data,
      options,
      globalMeta,
    },
    revalidate: 10,
  }
}