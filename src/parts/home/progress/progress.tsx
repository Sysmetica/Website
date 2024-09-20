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

  // useGSAP(
  //   (context, contextSafe: any) => {
  //     // let tls: any = [];

  //     const initAnimaton = () => {
  //       const section = wrapRef.current;
  //       const counts = section.querySelectorAll("[data-count]") as NodeListOf<HTMLDivElement>;

  //       // Fade elements
  //       const animateCount = (trigger: HTMLDivElement) => {
  //         const { count } = trigger.dataset;
  //         let tl = gsap.timeline({
  //           defaults: { duration: 2, textContent: count, ease: "power2.out", },
  //           scrollTrigger: {
  //             trigger,
  //             start: () => "top 102%",
  //             toggleActions: "play none none reverse",
  //           },
  //         });
  //         tl.to(trigger, { snap: { textContent: 1 }, }, 0)
  //         // tl.then(() => {
  //         //   tl.kill()
  //         // })
  //       };

  //       counts.forEach(animateCount)

  //     }
  //     const st = setTimeout(initAnimaton, 200);

  //     return () => {
  //       clearTimeout(st);
  //     };
  //   },
  //   { dependencies: [], revertOnUpdate: true }
  // );


  const items = [
    { titel: "Client Satisfaction", count: 100, mark: "%" },
    { titel: "Total Jobs", count: 52, mark: "+" },
    { titel: "Clients Worldwide", count: 10, mark: "+" },
  ]


  return (
    <div className={s.root}>
      <Row>
        <div className={s.progress} data-fade ref={wrapRef}>
          <div className={clsx(s.item, s.icon)}>
            <LineIcon />
          </div>
          {items.map(item =>
            <div className={s.item} key={item.titel}>
              <div className={clsx(IBMPlexSans.className, s.num)}>
                <div data-count="100" style={{ display: "inline-block" }}>{item.count}</div>
                <span>{item.mark}</span>
              </div>
              <p>{item.titel}</p>
            </div>
          )}
        </div>
      </Row>
    </div>
  )
}