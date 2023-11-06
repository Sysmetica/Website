import clsx from 'clsx';
import MyImage from '@/components/image/image';
import { IBMPlexSans } from '@/pages/_app';
import s from './services.module.scss';
import { useSetAtom } from 'jotai';
import { mouseActionArea } from '../action/action';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const ServicesItems = () => {
  const { pathname } = useRouter();
  const setArea = useSetAtom(mouseActionArea);
  const isNotServices = pathname !== '/services';

  return (
    <div
      className={s.items}
      onMouseOver={() => {
        isNotServices && setArea({ area: 'open' })
      }}
      onMouseOut={() => {
        isNotServices && setArea({ area: 'default' })
      }}
    >

      <div className={clsx(s.item, s.mob)}>
        {isNotServices && <Link href={'/services'} className={s.link} />}
        <div className={s.icon}>
          <MyImage src="/img/icons/services/mobile.svg" alt="test icon" width={146} height={146} />
        </div>
        <div className={s.text}>
          <h3 className={clsx(s.title, IBMPlexSans.className)}>Mobile Development</h3>
          <div className={s.tags}>
            <span className={s.tag}>Native Development</span>
            <span className={s.tag}>Compliance</span>
            <span className={s.tag}>Maintenance & Support</span>
            <span className={s.tag}>Backend Integration</span>
            <span className={s.tag}>Security</span>
          </div>
        </div>
      </div>

      <div className={clsx(s.item, s.backend)}>
        {isNotServices && <Link href={'/services'} className={s.link} />}
        <div className={s.icon}>
          <MyImage src="/img/icons/services/be.svg" alt="test icon" width={48} height={48} />
        </div>
        <div className={s.text}>
          <h3 className={clsx(s.title, IBMPlexSans.className)}>Back-End</h3>
          <div className={s.tags}>
            <span className={s.tag}>Database Management</span>
            <span className={s.tag}>User Authentication</span>
            <span className={s.tag}>API Development</span>
            <span className={s.tag}>Data Processing</span>
            <span className={s.tag}>Security & Compliance</span>
            <span className={s.tag}>Testing & Maintenance</span>
          </div>
        </div>
      </div>

      <div className={clsx(s.item, s.qa)}>
        {isNotServices && <Link href={'/services'} className={s.link} />}
        <div className={s.icon}>
          <MyImage src="/img/icons/services/qa.svg" alt="test icon" width={48} height={48} />
        </div>
        <div className={s.text}>
          <h3 className={clsx(s.title, IBMPlexSans.className)}>Manual QA</h3>
          <div className={s.tags}>
            <span className={s.tag}>Test Case Development</span>
            <span className={s.tag}>Exploratory Testing</span>
            <span className={s.tag}>Usability Testing</span>
            <span className={s.tag}>Cross-Platform Testing</span>
            <span className={s.tag}>Regression Testing</span>
            <span className={s.tag}>Compliance & Performance Testing</span>
          </div>
        </div>
      </div>

      <div className={clsx(s.item, s.design)}>
        {isNotServices && <Link href={'/services'} className={s.link} />}
        <div className={s.icon}>
          <MyImage src="/img/icons/services/design.svg" alt="test icon" width={48} height={48} />
        </div>
        <div className={s.text}>
          <h3 className={clsx(s.title, IBMPlexSans.className)}>Design</h3>
          <div className={s.tags}>
            <span className={s.tag}>UI/UX Consulting & Setup</span>
            <span className={s.tag}>Product Redesign & Refinement</span>
            <span className={s.tag}>Mobile App Design</span>
            <span className={s.tag}>Custom Web Design & Development</span>
          </div>
        </div>
      </div>

    </div>
  )
}