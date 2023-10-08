import MyImage from '@/components/image/image';
import { Row } from '../row/row';
import s from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={s.root}>
      <Row>

        <div className={s.top}>
          <div className={s.logo}>
            <MyImage src="/img/logo.svg" alt="sysmetica logo" width={165} height={32} />
          </div>
          <div className={s.menu}>
            <a href="">Services</a>
            <a href="">Case Studies</a>
            <a href="">About</a>
            <a href="">Careers</a>
          </div>
        </div>

        <div className={s.bottom}>
          <p className={s.copy}>© 2023 Sysmetica</p>
          <div className={s.links}>
            <div className={s.menu}>
              <a href="">Terms of Service</a>
              <a href="">Privacy Policy</a>
            </div>
            <div className={s.social}>
              <a href="" target='_black'>
                <MyImage src="/img/upwork.svg" alt='upwork logo' width={86} height={24} />
              </a>
              <a href="" target='_black'>
                <MyImage src="/img//icons/linkedin.svg" alt='linkedin icon' width={24} height={24} />
              </a>
              <a href="" target='_black'>
                <MyImage src="/img//icons/instagram.svg" alt='instagram icon' width={24} height={24} />
              </a>
            </div>
          </div>
        </div>

      </Row>
    </footer>
  )
}