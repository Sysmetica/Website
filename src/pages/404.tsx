import { Layout } from "@/common/layout/layout";
import { Row } from "@/common/row/row";
import { Button } from "@/components/button/button";
import MyImage from "@/components/image/image";
import s from '@/parts/404/404.module.scss';
import { IBMPlexSans } from "./_app";

const FourOhFour = () => {
  return (
    <Layout>
      <Row>
        <div className={s.root}>
          <MyImage src="/img/404.svg" alt="404" width={230} height={100} />
          <h3 className={IBMPlexSans.className}>Oops! This page seems to have taken a wrong turn in cyberspace!</h3>
          <p>Please make sure you entered the URL properly</p>
          <Button type={['fill']} link={'/'}>Back to Home</Button>
        </div>
      </Row>
    </Layout>
  )
}

export default FourOhFour