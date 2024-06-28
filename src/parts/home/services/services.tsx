import { Row } from '@/common/row/row';
import s from '@/components/services/services.module.scss';
import { Button } from '@/components/button/button';
import { IBMPlexSans } from '@/pages/_app';
import { ServicesItems } from '@/components/services/services';

export const Services = () => {
  return (
    <div className={s.root}>
      <Row>
        <div className={s.rootWrap}>

          <div className={s.text}>
            <h2 className={IBMPlexSans.className} data-fade>{`Turning Ideas Into Reality`}</h2>
            <p data-fade>{`Crafting outstanding digital products is a sophisticated process. We are here to navigate you through this complex journey. Trust in our expertise to transform your most ambitious ideas into tangible success`}</p>
          </div>

          <ServicesItems />

          <div className={s.buttonWrap} data-fade>
            <Button link={'/services'}>{`Our Services`}</Button>
          </div>

        </div>
      </Row>
    </div>
  )
}