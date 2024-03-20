import { Row } from '@/common/row/row';
import s from './career.module.scss';
import { IBMPlexSans } from '@/pages/_app';
import { Button } from '@/components/button/button';
import { CareersList } from '@/components/careers/careers';
import { CareerPageFields } from '@/types/career';
import { OptionsProps } from '@/types/options';

type CareerProps = {
  careers: CareerPageFields['attributes']['careers']
  theme: OptionsProps['attributes']['theme']
}

export const Career = ({ careers, theme }: CareerProps) => {
  if (!careers.data.length) {
    return null;
  }

  return (
    <div className={s.root}>
      <Row>
        <div className={s.rootWrap}>

          <div className={s.text}>
            <h2 className={IBMPlexSans.className}>Join our team</h2>
            <p>{`We're seeking passionate specialists who are ready to make an impact. Whether you're a seasoned professional or just starting your journey, we have a place for talent like yours`}</p>
          </div>

          <div className={s.items}>
            <CareersList careers={careers} theme={theme} />
          </div>

          <div className={s.buttonWrap}>
            <Button link='/career'>Careers</Button>
          </div>

        </div>
      </Row>
    </div>
  )
}