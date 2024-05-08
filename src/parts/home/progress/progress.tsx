import { Row } from '@/common/row/row';
import s from './progress.module.scss';
import { IBMPlexSans } from '@/pages/_app';
import clsx from 'clsx';
import LineIcon from '../../../../public/img/str-line.svg';

export const Progress = () => {
  return (
    <div className={s.root}>
      <Row>
        <div className={s.progress} data-fade data-child>
          <div className={clsx(s.item, s.icon)}>
            <LineIcon />
          </div>
          <div className={s.item}>
            <div className={clsx(IBMPlexSans.className, s.num)}>100<span>%</span></div>
            <p>Client Satisfaction</p>
          </div>
          <div className={s.item}>
            <div className={clsx(IBMPlexSans.className, s.num)}>52<span>+</span></div>
            <p>Total Jobs</p>
          </div>
          <div className={s.item}>
            <div className={clsx(IBMPlexSans.className, s.num)}>10<span>+</span></div>
            <p>Clients Worldwide</p>
          </div>
        </div>
      </Row>
    </div>
  )
}