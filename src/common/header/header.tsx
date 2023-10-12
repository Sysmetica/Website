import MyImage from "@/components/image/image";
import { Row } from "../row/row";
import s from './header.module.scss';
import { Button } from "@/components/button/button";
import Link from "next/link";
import clsx from "clsx";
import { useAtom } from "jotai";
import { menuState } from "@/state";

export const Header = () => {
  const [menu, setMenu] = useAtom(menuState);

  return (
    <header className={clsx(s.root, {
      [s.open]: menu
    })}>
      <Row>
        <div className={s.headerWrap}>
          <Link className={s.logo} href={'/'}>
            <MyImage src="/img/logo.svg" alt="sysmetica logo" width={165} height={32} />
          </Link>
          <ul className={s.menu}>
            <Link href={'/services'}>Services</Link>
            <Link href={'/case-studies'}>Case Studies</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/career'}>Careers</Link>
          </ul>
          <div className={s.buttonWrap}>
            <Button type={['fill']} link={'/contact'}>Contact Us</Button>
          </div>
          <span className={s.menuIcon} onClick={() => setMenu(!menu)} />
        </div>
      </Row>
    </header>
  )
}