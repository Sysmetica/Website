import MyImage from '@/components/image/image';
import { Row } from '../row/row';
import s from './footer.module.scss';
import Link from 'next/link';
import { SocialLinks } from '../socialLinks/socialLinks';
import { MenuLink } from '../menuLink/menuLink';
import { OptionsProps } from '@/types/options';

export const Footer = ({ theme }: { theme: OptionsProps['attributes']['theme'] }) => {
  return (
    <footer className={s.root}>
      <Row>

        <div className={s.top}>
          <div className={s.logo}>
            {theme === 'dark' ? (
              <MyImage src="/img/logo.svg" alt="Sysmetica logo" width={165} height={32} />
            ) : (
              <MyImage src="/img/logo2.svg" alt="Sysmetica logo" width={165} height={32} />
            )}
          </div>
          <div className={s.menu}>
            <MenuLink href="/services">Services</MenuLink>
            <MenuLink href="/case-studies">Case Studies</MenuLink>
            <MenuLink href="/about">About</MenuLink>
            <MenuLink href="/career">Careers</MenuLink>
          </div>
        </div>

        <div className={s.bottom}>
          <p className={s.copy}>© 2023 Sysmetica</p>
          <div className={s.links}>
            <div className={s.menu}>
              <MenuLink href="/terms-of-service">Terms of Service</MenuLink>
              <MenuLink href="/privacy-policy">Privacy Policy</MenuLink>
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