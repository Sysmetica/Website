import { Layout } from "@/common/layout/layout"
import { Row } from "@/common/row/row"
import { SeoContext } from "@/components/seo/seoContext"
import { GlobalProps } from "@/components/seo/types"
import { OptionsProps } from "@/types/options"
import { FC } from "react"
import s from '@/parts/page/page.module.scss'
import b from '@/parts/career/single/single.module.scss';
import MyImage from "@/components/image/image"
import { EditorParser } from "@/components/editor/editor"
import { BlocksContent } from "@strapi/blocks-react-renderer"
import { GetStaticPaths, GetStaticProps } from "next"
import client from "@/graphql/client"
import { META, OPTIONS, SP_ALL_SLUGS, SP_SINGLE } from "@/graphql/queries"
import { useRouter } from "next/router"

interface Props {
  pageData: {
    attributes: {
      title: string
      subtitle: string
      content: BlocksContent
    }
  }
  options: OptionsProps
  globalMeta: GlobalProps
}

const Lp: FC<Props> = ({ pageData, options, globalMeta }) => {
  const {
    attributes: {
      title,
      subtitle,
      content,
    }
  } = pageData
  const router = useRouter();

  return (
    <Layout options={options}>
      <SeoContext globalMeta={globalMeta}>
        <div className={s.root}>
          <div className={s.head}>
            <Row>
              <div className={s.wrap}>
                <span className={b.back} data-fade onClick={() => router.back()}>{`back`}</span>
                <div className={s.info} data-fade>
                  <div className={s.buttonWrap}>
                    <MyImage src="/img/icons/page.svg" alt="text" width={48} height={48} imgClass={s.ico} />
                  </div>
                  <h1>{title}</h1>
                  <p>{subtitle}</p>
                </div>
              </div>
            </Row>
          </div>
          <div className={s.editor}>
            <Row>
              <div className={s.editorWrap}>
                <EditorParser content={content} />
              </div>
            </Row>
          </div>
        </div>
      </SeoContext>
    </Layout>
  )
}

export default Lp

export const getStaticPaths: GetStaticPaths<any> = async () => {
  const { data } = await client.query({ query: SP_ALL_SLUGS })

  const paths = data.singlePages.data.map((post: any) => {
    return {
      params: {
        slug: post.attributes.slug,
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<any> = async ({ params }: any) => {
  const { data } = await client.query({
    query: SP_SINGLE,
    variables: {
      slug: `${params.slug}`
    }
  })

  const pageData = data.singlePages.data[0]

  if (!pageData) {
    return {
      notFound: true,
    }
  }

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
