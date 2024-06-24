import { Row } from '@/common/row/row';
import s from './home.module.scss';
import { gsap } from "gsap";
import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { IBMPlexSans } from '@/pages/_app';
import { useAtomValue, useSetAtom } from 'jotai';
import { mouseActionArea } from '@/components/action/action';
import { isMobile } from 'react-device-detect';
import { isMobileDevice } from '@/state';
import { makeSelectedString } from '@/utils';
import HomeIcon from '../../../../public/img/icons/home.svg';

import { useGSAP } from "@gsap/react";

type HomeStepProps = {
  title: string
  subtitle: string
  selectedString: string
}

const splittinSpan = (span: any) => {
  return `<span class='word'><span class="wc" data-wc><span class="c" data-c>${span}</span> </span> </span>`;

};

const splitText = (txt: any) => txt.split(" ").map(splittinSpan).join(" ");


export const HomeStep = ({ title, subtitle, selectedString }: HomeStepProps) => {
  const setArea = useSetAtom(mouseActionArea);
  const isMob = useAtomValue(isMobileDevice);
  const intro = useRef<any>(null)

  const shapeRef1 = useRef<any>();
  const shapeRef2 = useRef<any>();

  const action = (evt: any) => {
    if (isMobile) {
      return
    }
    // console.log(evt.clientY, evt.pageY);
    const mouseX = evt.pageX;
    const mouseY = evt.pageY;

    gsap.to(shapeRef1.current, {
      x: mouseX,
      y: mouseY,
      delay: .02,
    })

    gsap.to(shapeRef2.current, {
      x: mouseX,
      y: mouseY,
      delay: 0,
    })
  }



  useGSAP(
    (context, contextSafe: any) => {

      const initAnimaton = () => {
        const section = intro.current as HTMLDivElement;
        const fades = section.querySelectorAll("[data-split]") as NodeListOf<HTMLDivElement>;

        const animSplit = (text: any) => {

          const child: any = text.childNodes || text.children;

          const isSplited = text.dataset.splited;
          if (!isSplited) {

            const innerText = [...child].map((el: any) => {
              switch (el.nodeName) {
                case "BR":
                  return el.outerHTML;
                case "#text":
                  return splitText(el.textContent);
                case "SPAN":
                  return splittinSpan(el.outerHTML);
                default:
                  break;
              }
            });

            text.setAttribute("data-splited", "true");
            text.innerHTML = innerText.join("");
          }
          const chars = text.querySelectorAll(".c");

          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: text,
              start: "top 90%",
              toggleActions: "play none none reverse",
              onLeaveBack: () => text.classList.remove("done"),
            },
          });

          tl.set(text, { opacity: 1 }).fromTo(
            chars,
            {
              yPercent: 100,
            },
            {
              duration: 1.4,
              yPercent: 0,
              ease: "power3.out",
              stagger: 0.02,
              onComplete: () => text.classList.add("done"),
            }
          );
        }



        fades.forEach(animSplit)
      }
      const st = setTimeout(initAnimaton, 200);

      return () => {
        clearTimeout(st);
      };
    },
    { dependencies: [intro], revertOnUpdate: true, }
  );

  return (
    <div
      className={s.root}
      ref={intro}
      {...isMob && {
        onMouseMove: (e) => action(e),
        onMouseOver: () => setArea({ area: 'hidden' }),
        onMouseOut: () => setArea({ area: 'default' }),
      }}
    >
      <div className={s.shapes}>
        <div className={s.bg} />
        <div className={clsx(s.shape, s.shape1)} ref={shapeRef1} />
        <div className={clsx(s.shape, s.shape2)} ref={shapeRef2} />
      </div>

      {/* action */}
      <div className={clsx(s.textHolder, s.textHolder1)}>
        <div className={s.container}>
          <Row>
            <div className={s.textWrap}>
              <HomeIcon />
              <h1 className={IBMPlexSans.className} data-split>{title}</h1>
              <h2 dangerouslySetInnerHTML={{ __html: makeSelectedString(subtitle, selectedString) }} data-split />
            </div>
          </Row>
        </div>
      </div>

      <div className={clsx(s.textHolder, s.textHolder2)}>
        <div className={s.container}>
          <Row>
            <div className={s.textWrap}>
              <HomeIcon />
              <h1 className={IBMPlexSans.className} data-split>{title}</h1>
              <h2 dangerouslySetInnerHTML={{ __html: makeSelectedString(subtitle, selectedString) }} data-split />
            </div>
          </Row>
        </div>
      </div>
    </div >
  )
}