import { Row } from '@/common/row/row';
import s from './home.module.scss';
import { gsap } from "gsap";
import { useRef, useState } from 'react';
import clsx from 'clsx';
import { IBMPlexSans } from '@/pages/_app';
import { useAtomValue } from 'jotai';
import { isMobile } from 'react-device-detect';
import { isMobileDevice } from '@/state';
import { makeSelectedString } from '@/utils';
import HomeIcon from '../../../../public/img/icons/home.svg';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { useGSAP } from "@gsap/react";
import { Button } from '@/components/button/button';
type HomeStepProps = {
  title: string
  subtitle: string
  selectedString: string
}

const splittinSpan = (span: any) => {
  return `<span class='word'><span class="wc" data-wc><span class="c" data-c>${span}</span> </span> </span>`;
};

const splitText = (txt: any) => txt.split(" ").map(splittinSpan).join(" ");

const ScheduleData = {
  title: "Schedule a Meeting",
  link: "https://calendly.com/nestor-popko/30min"
}

const ScheduleButton = () => {
  return <>
    <div className={s.link}>
      <div data-fade>
        <Button link={ScheduleData.link} target="_blank">{ScheduleData.title}</Button>
      </div>
    </div>
  </>
}

export const HomeStep = ({ title, subtitle, selectedString }: HomeStepProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const isMob = useAtomValue(isMobileDevice);
  const intro = useRef<any>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)

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
    isLoaded && handleParallax(evt);
  }

  function handleParallax(e: any) {
    let fixer = -0.005;

    const pageX = (e.pageX - window.innerWidth / 2) * fixer;
    const pageY = (e.pageY - window.innerHeight / 2) * fixer;

    const items = parallaxRef.current?.children as any

    [...items].forEach((item: HTMLDivElement) => {
      const speed = Number(item.dataset.coff);


      gsap.to(item, {
        x: pageX * speed,
        y: pageY * speed,
        duration: 1
      });
    });
  }

  useGSAP(
    () => {

      const initAnimaton = () => {
        const section = intro.current as HTMLDivElement;
        const fades = section.querySelectorAll("[data-split]") as NodeListOf<HTMLDivElement>;
        const header = document.querySelector("header");

        let initialBeta: any = null;
        let initialGamma: any = null;

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

        const handleOrientation = (event: any) => {
          if (initialBeta == null || initialGamma == null) {
            initialBeta = event.beta;
            initialGamma = event.gamma;
          }

          const items = parallaxRef.current?.children as any

          [...items].forEach((item: HTMLDivElement) => {
            const speed = Number(item.dataset.coff) / 3;

            gsap.to(item, {
              x: (event.gamma - initialGamma) * speed,
              y: (event.beta - initialBeta) * speed,
              duration: 0.5
            });
          });
        }

        ScrollTrigger.create({
          trigger: intro.current,
          start: "top 10%",
          end: `bottom top+=${header?.clientHeight}`,
          onToggle: (e) => {
            e.isActive ? header?.setAttribute("data-no-bg", "true") : header?.removeAttribute("data-no-bg")
            if (isMobile || isMob) {
              e.isActive
                ? window.addEventListener('deviceorientation', handleOrientation)
                : window.removeEventListener('deviceorientation', handleOrientation);
            }
          }
        })

        fades.forEach(animSplit)
        setIsLoaded(true)
      }
      const st = setTimeout(initAnimaton, 200);

      return () => {
        clearTimeout(st);
        setIsLoaded(false)
      };
    },
    { dependencies: [intro], revertOnUpdate: true, }
  );

  return (
    <div
      className={s.root}
      ref={intro}
      {...!isMob && {
        onMouseMove: (e) => action(e),
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
              {/* <HomeIcon /> */}
              <div className={s.title}>
                <h1 className={IBMPlexSans.className} data-split>{title}</h1>
                <div className={s.icon_1} data-fade></div>
                <div className={s.icon_2} data-fade></div>
              </div>
              <h2 dangerouslySetInnerHTML={{ __html: makeSelectedString(subtitle, selectedString) }} data-split />
              <ScheduleButton />
            </div>
          </Row>
        </div>
      </div>

      <div className={clsx(s.textHolder, s.textHolder2)}>
        <div className={s.container}>
          <Row>
            <div className={s.textWrap}>
              {/* <HomeIcon /> */}
              <div className={s.title}>
                <div className={s.icon_3} data-fade></div>
                <h1 className={IBMPlexSans.className} data-split>{title}</h1>
              </div>
              <h2 dangerouslySetInnerHTML={{ __html: makeSelectedString(subtitle, selectedString) }} data-split />
              <ScheduleButton />
            </div>
          </Row>
        </div>
      </div>

      <div className={s.parallax} ref={parallaxRef} data-fade>
        <div className={clsx(s.par, s.par_1)} data-coff="9" ><div className={s.llax} /></div>
        <div className={clsx(s.par, s.par_2)} data-coff="3" ><div className={s.llax} /></div>
        <div className={clsx(s.par, s.par_3)} data-coff="3" ><div className={s.llax} /></div>
        <div className={clsx(s.par, s.par_4)} data-coff="9" ><div className={s.llax} /></div>
        <div className={clsx(s.par, s.par_5)} data-coff="3" ><div className={s.llax} /></div>
        <div className={clsx(s.par, s.par_6)} data-coff="9" ><div className={s.llax} /></div>
        <div className={clsx(s.par, s.par_7)} data-coff="3" ><div className={s.llax} /></div>
      </div>
    </div >
  )
}
