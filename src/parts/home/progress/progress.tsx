import { Row } from '@/common/row/row';
import s from './progress.module.scss';
import { IBMPlexSans } from '@/pages/_app';
import clsx from 'clsx';
import MyImage from '@/components/image/image';

export const Progress = () => {
  return (
    <div className={s.root}>
      <Row>
        <div className={s.progress}>
          <div className={clsx(s.item, s.icon)}>
            <MyImage src="/img/str-line.svg" alt="icon" width={100} height={36} />
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