import { Row } from '@/common/row/row';
import s from './progress.module.scss';
import { IBMPlexSans } from '@/pages/_app';
import clsx from 'clsx';
import LineIcon from '../../../../public/img/str-line.svg';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

export const Progress = () => {
  const wrapRef = useRef<any>(null)

  useGSAP(
    (context, contextSafe: any) => {
      // let tls: any = [];

      const initAnimaton = () => {
        const section = wrapRef.current;
        const counts = section.querySelectorAll("[data-count]") as NodeListOf<HTMLDivElement>;

        // Fade elements
        const animateCount = (trigger: HTMLDivElement) => {
          const { count } = trigger.dataset;
          let tl = gsap.timeline({
            defaults: { duration: 2, textContent: count, ease: "power2.out", },
            scrollTrigger: {
              trigger,
              start: () => "top 102%",
              toggleActions: "play none none reverse",
            },
          });
          tl.to(trigger, { snap: { textContent: 1 }, }, 0)
          // tl.then(() => {
          //   tl.kill()
          // })
        };

        counts.forEach(animateCount)

      }
      const st = setTimeout(initAnimaton, 200);

      return () => {
        clearTimeout(st);
      };
    },
    { dependencies: [], revertOnUpdate: true }
  );



  return (
    <div className={s.root}>
      <Row>
        <div className={s.progress} data-fade data-child ref={wrapRef}>
          <div className={clsx(s.item, s.icon)}>
            <LineIcon />
          </div>
          <div className={s.item}>
            <div className={clsx(IBMPlexSans.className, s.num)}>
              <div data-count="100" style={{ display: "inline-block" }}></div>
              <span>%</span></div>
            <p>Client Satisfaction</p>
          </div>
          <div className={s.item}>
            <div className={clsx(IBMPlexSans.className, s.num)}>
              <div data-count="52" style={{ display: "inline-block" }}></div>
              <span>+</span></div>
            <p>Total Jobs</p>
          </div>
          <div className={s.item}>
            <div className={clsx(IBMPlexSans.className, s.num)}>
              <div data-count="10" style={{ display: "inline-block" }}></div>
              <span>+</span></div>
            <p>Clients Worldwide</p>
          </div>
        </div>
      </Row>
    </div>
  )
}