import MyImage from "@/components/image/image";
import { Row } from "../row/row";
import s from './header.module.scss';
import { Button } from "@/components/button/button";
import Link from "next/link";
import clsx from "clsx";
import { useAtom } from "jotai";
import { menuState } from "@/state";
import { useRouter } from "next/router";
import { SocialLinks } from "../socialLinks/socialLinks";
import { EScrollDirection, useGetScrollPosition } from "@/hooks";
import { MenuLink } from "../menuLink/menuLink";
import { OptionsProps } from "@/types/options";

export const Header = ({ theme }: { theme: OptionsProps['attributes']['theme'] }) => {
  const [menu, setMenu] = useAtom(menuState);
  const { pathname } = useRouter();
  const scrollDirection = useGetScrollPosition();
  const isContactPage = pathname === '/contact';

  return (
    <header className={clsx(s.root, {
      [s.open]: menu,
      [s.hide]: scrollDirection === EScrollDirection.DOWN
    })}>
      <Row>
        <div className={s.headerWrap}>
          <Link className={s.logo} href={'/'}>
            {theme === 'dark' ? (
              <MyImage src="/img/logo.svg" alt="Sysmetica logo" width={165} height={32} />
            ) : (
              <MyImage src="/img/logo2.svg" alt="Sysmetica logo" width={165} height={32} />
            )}
          </Link>
          <ul className={s.menu}>
            <MenuLink href="/services">Services</MenuLink>
            <MenuLink href="/case-studies">Case Studies</MenuLink>
            <MenuLink href="/about">About</MenuLink>
            <MenuLink href="/career">Careers</MenuLink>

            <div className={s.mobileButtons}>
              <Button type={['fill']} link={'/contact'}>Contact Us</Button>
              <div className={s.social}>
                <SocialLinks />
              </div>
            </div>
          </ul>
          <div className={s.buttonWrap}>
            <Button type={[!isContactPage ? 'fill' : '']} link={'/contact'}>Contact Us</Button>
          </div>
          <span className={s.menuIcon} onClick={() => {
            setMenu(!menu);
            document.body.style.overflow = !menu ? 'hidden' : '';
          }} />
        </div>
      </Row>
    </header>
  )
}