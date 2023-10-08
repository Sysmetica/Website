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

  // console.log('menu ', menu)

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
            <a href="">Services</a>
            <a href="">Case Studies</a>
            <a href="">About</a>
            <a href="">Careers</a>
          </ul>
          <div className={s.buttonWrap}>
            <Button type={['fill']}>Contact Us</Button>
          </div>
          <span className={s.menuIcon} onClick={() => setMenu(!menu)} />
        </div>
      </Row>
    </header>
  )
}