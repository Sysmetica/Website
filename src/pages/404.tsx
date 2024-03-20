import { Layout } from "@/common/layout/layout";
import { Row } from "@/common/row/row";
import { Button } from "@/components/button/button";
import MyImage from "@/components/image/image";
import s from '@/parts/404/404.module.scss';
import { IBMPlexSans } from "./_app";
import { GetStaticProps } from "next";
import { OPTIONS } from "@/graphql/queries";
import client from "@/graphql/client";
import { FC } from "react";
import { OptionsProps } from "@/types/options";

interface Props {
  options: OptionsProps
}

const NotFound: FC<Props> = ({ options }) => {
  const imgType = options.attributes.theme === 'light' ? '-p' : '';

  return (
    <Layout theme={options.attributes.theme}>
      <Row>
        <div className={s.root}>
          <MyImage src={`/img/404${imgType}.svg`} alt="404" width={230} height={100} />
          <h3 className={IBMPlexSans.className}>Oops! This page seems to have taken a wrong turn in cyberspace!</h3>
          <p>Please make sure you entered the URL properly</p>
          <Button type={['fill']} link={'/'}>Back to Home</Button>
        </div>
      </Row>
    </Layout>
  )
}

export default NotFound

export const getStaticProps: GetStaticProps<any> = async () => {
  // options
  const optionsData = await client.query({ query: OPTIONS });
  const options = optionsData.data.option.data;

  return {
    props: {
      options,
    },
    revalidate: 10,
  }
}

