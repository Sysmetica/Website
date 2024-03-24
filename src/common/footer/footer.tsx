import MyImage from '@/components/image/image';
import { Row } from '../row/row';
import s from './footer.module.scss';
import { SocialLinks } from '../socialLinks/socialLinks';
import { MenuLink } from '../menuLink/menuLink';
import { OptionsProps } from '@/types/options';

export const Footer = ({ options }: { options: OptionsProps }) => {
  const logoType = options.attributes.theme === 'light' ? '-p' : '';
  const copyText = options.attributes.copy;

  return (
    <footer className={s.root}>
      <Row>

        <div className={s.top}>
          <div className={s.logo}>
            <MyImage src={`/img/logo${logoType}.svg`} alt="Sysmetica logo" width={165} height={32} />
          </div>
          <div className={s.menu}>
            {options.attributes.menu
              .filter((i) => i.name !== null)
              .map(({ name, slug }) => {
                return (
                  <MenuLink href={slug as string} key={slug}>{name as string}</MenuLink>
                )
              })}
          </div>
        </div>

        <div className={s.bottom}>
          <p className={s.copy}>{copyText}</p>
          <div className={s.links}>
            <div className={s.menu}>
              <MenuLink href="/terms-of-service">{`Terms of Service`}</MenuLink>
              <MenuLink href="/privacy-policy">{`Privacy Policy`}</MenuLink>
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