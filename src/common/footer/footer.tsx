import MyImage from '@/components/image/image';
import { Row } from '../row/row';
import s from './footer.module.scss';
import Link from 'next/link';
import { SocialLinks } from '../socialLinks/socialLinks';

export const Footer = () => {
  return (
    <footer className={s.root}>
      <Row>

        <div className={s.top}>
          <div className={s.logo}>
            <MyImage src="/img/logo.svg" alt="sysmetica logo" width={165} height={32} />
          </div>
          <div className={s.menu}>
            <Link href={'/services'}>Services</Link>
            <Link href={'/case-studies'}>Case Studies</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/career'}>Careers</Link>
          </div>
        </div>

        <div className={s.bottom}>
          <p className={s.copy}>© 2023 Sysmetica</p>
          <div className={s.links}>
            <div className={s.menu}>
              <Link href={'/terms-of-service'}>Terms of Service</Link>
              <Link href={'/privacy-policy'}>Privacy Policy</Link>
            </div>
            <div className={s.social}>
              <SocialLinks />
            </div>
          </div>
        </div>

      </Row>
    </footer>
  )
}