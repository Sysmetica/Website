import { Row } from '@/common/row/row';
import { ServicesItems } from '@/components/services/services';
import s from './list.module.scss';
import g from '@/components/services/services.module.scss';
import { IBMPlexSans } from '@/pages/_app';

export const List = () => {
  return (
    <div className={s.root}>
      <Row>
        <div className={g.rootWrap}>

          <div className={g.text}>
            <h2 className={IBMPlexSans.className}>Comprehensive Services Tailored to Your Unique Needs</h2>
          </div>

          <ServicesItems type="services" />

        </div>
      </Row>
    </div>
  )
}