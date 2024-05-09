import MyImage from "@/components/image/image";
import { Row } from "../row/row";
import s from './header.module.scss';
import { Button } from "@/components/button/button";
import clsx from "clsx";
import { useAtom } from "jotai";
import { menuState } from "@/state";
import { useRouter } from "next/router";
import { SocialLinks } from "../socialLinks/socialLinks";
import { EScrollDirection, useGetScrollPosition } from "@/hooks";
import { MenuLink } from "../menuLink/menuLink";
import { OptionsProps } from "@/types/options";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { MyButton } from "@/components/link/button";
gsap.registerPlugin(ScrollTrigger);

export const Header = ({ options }: { options: OptionsProps }) => {
  const [menu, setMenu] = useAtom(menuState);
  const { pathname } = useRouter();
  const scrollDirection = useGetScrollPosition();
  const isContactPage = pathname === '/contact';
  const logoType = options.attributes.theme === 'light' ? '-p' : '';
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (context, contextSafe: any) => {
      const initAnimaton = () => {
        const section = headerRef.current as HTMLDivElement;
        const fades = section.querySelectorAll("[data-child]") as NodeListOf<HTMLDivElement>;

        let tl = gsap.timeline({ defaults: { ease: "power2.out", }, });

        tl.fromTo(fades,
          { y: "-50px", opacity: 0, },
          { duration: 1, y: 0, opacity: 1, stagger: 0.05, }
        ).then(e => {
          fades.forEach(f => f.removeAttribute("data-child"))
          tl.revert().kill()
        })

      }
      const st = setTimeout(initAnimaton, 200);

      return () => {
        clearTimeout(st);
      };
    },
    { dependencies: [], revertOnUpdate: true, }
  );

  return (
    <header className={clsx(s.root, {
      [s.open]: menu,
      [s.hide]: scrollDirection === EScrollDirection.DOWN
    })} ref={headerRef}>
      <Row>
        <div className={s.headerWrap}>
          <MyButton className={s.logo} href={'/'} data-child>
            <MyImage src={`/img/logo${logoType}.svg`} alt="Sysmetica logo" width={165} height={32} />
          </MyButton>
          <ul className={s.menu}>
            {options.attributes.menu
              .filter((i) => i.name !== null)
              .map(({ name, slug }) => {
                return (
                  <MenuLink href={slug as string} key={slug} data-child>{name as string}</MenuLink>
                )
              })}
            <div className={s.mobileButtons}>
              <Button type={['fill']} link={'/contact'}>Contact Us</Button>
              <div className={s.social}>
                <SocialLinks />
              </div>
            </div>
          </ul>
          <div className={s.buttonWrap} data-child>
            <Button type={[!isContactPage ? 'fill' : '']} link={'/contact'}>Contact Us</Button>
          </div>
          <span className={s.menuIcon} data-child onClick={() => {
            setMenu(!menu);
            document.body.style.overflow = !menu ? 'hidden' : '';
          }} />
        </div>
      </Row>
    </header>
  )
}