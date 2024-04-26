import css from "./ui.module.scss"
import MyImage from '@/components/image/image';
import { IBMPlexSans } from "@/pages/_app";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);


export const UIKit = () => {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const trigger = wrapRef.current as HTMLDivElement;
    const child = trigger?.children[0] as HTMLDivElement;
    let tl: any = null;
    setTimeout(() => {
      tl = gsap
        .timeline({ scrollTrigger: { trigger, scrub: .8, start: `top 110%`, end: "bottom top" }, })
        .to(child, { x: child.clientWidth - window.innerWidth * 0.9, ease: "none" });
    }, 500)

    return () => {
      tl?.kill();
    }
  }, [])



  return (

    <div className={css.ui} >
      <div className={css.title}>
        <h2 className={IBMPlexSans.className} data-fade>
          UI Kit & Designs
        </h2>
        <p data-fade>
          Our designers created a UI kit to streamline design and development, ensure a consistent user experience, and improve collaboration among teams.
        </p>
      </div>

      <div className={css.image} ref={wrapRef}>
        <MyImage src={`/img/aukit.png`} alt="UI Kit & Designs" width={2710} height={2077} />
      </div>

    </div >


  )
}