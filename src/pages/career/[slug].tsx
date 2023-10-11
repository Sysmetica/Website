import React, { FC } from 'react'
import { GET_ALL_CAREERS_URL, GET_SINGLE_CAREER } from '@/graphql/queries'
import { GetStaticPaths, GetStaticProps } from 'next/types'
import client from '@/graphql/client'
import { Layout } from '@/common/layout/layout'
import { Row } from '@/common/row/row'
import s from '@/parts/career/single/single.module.scss';
import { CareerProps, CareersProps } from '@/types/career';
import MyImage from '@/components/image/image';
import { Button } from '@/components/button/button';
import Link from 'next/link';
import { Editor } from '@/common/editor/editor';
import dynamic from 'next/dynamic';
import { useAtom } from 'jotai';
import { csModal } from '@/state';

const CvForm = dynamic(() => import('@/components/cv/cv'));

interface Props {
  pageData: CareerProps
  list: CareersProps['data']
}

const Career: FC<Props> = ({ pageData, list }) => {
  const [modal, setModal] = useAtom(csModal);
  const { attributes: { title, level, tags, description } } = pageData

  const modalHandler = (e: any) => {
    e.preventDefault();
    setModal(true);
    document.body.style.overflow = 'hidden';
  }

  return (
    <Layout>
      <div className={s.root}>
        <div className={s.head}>
          <Row>
            <div className={s.wrap}>
              <Link href={'/career'} className={s.back}>back</Link>
              <div className={s.info}>
                <div className={s.buttonWrap}>
                  <MyImage src="/img/icons/career1.svg" alt="text" width={48} height={48} imgClass={s.ico} />
                  <Button type={['submit', 'black']} onClick={modalHandler}>Submit Your CV</Button>
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
              <div dangerouslySetInnerHTML={{ __html: description }} />
              <div className={s.button}>
                <Button type={['submit', 'fill']} onClick={modalHandler}>Submit Your CV</Button>
              </div>
            </div>
          </Row>
        </Editor>

        {modal && <CvForm svList={list} activeCv={title} />}
      </div>
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

  return {
    props: {
      pageData,
      list: cvList.data.careers.data
    }
  }
}