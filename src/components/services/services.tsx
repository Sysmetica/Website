import clsx from 'clsx';
import { IBMPlexSans } from '@/pages/_app';
import s from './services.module.scss';
import { useRouter } from 'next/router';
import MobileIcon from '../../../public/img/icons/services/mobile.svg';
import BeIcon from '../../../public/img/icons/services/be.svg';
import QaIcon from '../../../public/img/icons/services/qa.svg';
import DesignIcon from '../../../public/img/icons/services/design.svg';
import { MyButton } from '../link/button';

export const ServicesItems = ({ type = '' }: { type?: string }) => {
  const { pathname } = useRouter();
  const isNotServices = pathname !== '/services';

  return (
    <div className={clsx(s.items, s[type])}>

      <div className={clsx(s.item, s.mob)} data-fade>
        {isNotServices && <MyButton href={'/services'} className={s.link} />}
        <div className={s.icon}>
          <MobileIcon />
        </div>
        <div className={s.text}>
          <h3 className={clsx(s.title, IBMPlexSans.className)}>{`Mobile Development`}</h3>
          <div className={s.tags}>
            <span className={s.tag}>{`Native Development`}</span>
            <span className={s.tag}>{`Compliance`}</span>
            <span className={s.tag}>{`Maintenance & Support`}</span>
            <span className={s.tag}>{`Backend Integration`}</span>
            <span className={s.tag}>{`Security`}</span>
          </div>
        </div>
      </div>

      <div className={clsx(s.item, s.backend)} data-fade>
        {isNotServices && <MyButton href={'/services'} className={s.link} />}
        <div className={s.icon}>
          <BeIcon />
        </div>
        <div className={s.text}>
          <h3 className={clsx(s.title, IBMPlexSans.className)}>{`Back-End`}</h3>
          <div className={s.tags}>
            <span className={s.tag}>{`Database Management`}</span>
            <span className={s.tag}>{`User Authentication`}</span>
            <span className={s.tag}>{`API Development`}</span>
            <span className={s.tag}>{`Data Processing`}</span>
            <span className={s.tag}>{`Security & Compliance`}</span>
            <span className={s.tag}>{`Testing & Maintenance`}</span>
          </div>
        </div>
      </div>

      <div className={clsx(s.item, s.qa)} data-fade>
        {isNotServices && <MyButton href={'/services'} className={s.link} />}
        <div className={s.icon}>
          <QaIcon />
        </div>
        <div className={s.text}>
          <h3 className={clsx(s.title, IBMPlexSans.className)}>{`Manual QA`}</h3>
          <div className={s.tags}>
            <span className={s.tag}>{`Test Case Development`}</span>
            <span className={s.tag}>{`Exploratory Testing`}</span>
            <span className={s.tag}>{`Usability Testing`}</span>
            <span className={s.tag}>{`Cross-Platform Testing`}</span>
            <span className={s.tag}>{`Regression Testing`}</span>
            <span className={s.tag}>{`Compliance & Performance Testing`}</span>
          </div>
        </div>
      </div>

      <div className={clsx(s.item, s.design)} data-fade>
        {isNotServices && <MyButton href={'/services'} className={s.link} />}
        <div className={s.icon}>
          <DesignIcon />
        </div>
        <div className={s.text}>
          <h3 className={clsx(s.title, IBMPlexSans.className)}>{`Design`}</h3>
          <div className={s.tags}>
            <span className={s.tag}>{`UI/UX Consulting & Setup`}</span>
            <span className={s.tag}>{`Product Redesign & Refinement`}</span>
            <span className={s.tag}>{`Mobile App Design`}</span>
            <span className={s.tag}>{`Custom Web Design & Development`}</span>
          </div>
        </div>
      </div>

    </div>
  )
}