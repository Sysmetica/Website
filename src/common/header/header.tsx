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

export const Header = () => {
  const [menu, setMenu] = useAtom(menuState);
  const { pathname } = useRouter();
  const isContactPage = pathname === '/contact';

  return (
    <header className={clsx(s.root, {
      [s.open]: menu
    })}>
      <Row>
        <div className={s.headerWrap}>
          <Link className={s.logo} href={'/'}>
            <MyImage src="/img/logo.svg" alt="Sysmetica logo" width={165} height={32} />
          </Link>
          <ul className={s.menu}>
            <Link href={'/services'}>Services</Link>
            <Link href={'/case-studies'}>Case Studies</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/career'}>Careers</Link>
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