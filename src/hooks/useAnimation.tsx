import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function useAnimation() {

  useGSAP(
    (context, contextSafe: any) => {
      const section = document.body;

      const fades = section.querySelectorAll("[data-fade]") as NodeListOf<HTMLDivElement>;
      const parallaxes = section.querySelectorAll("[data-parallax]") as NodeListOf<HTMLDivElement>;


      // Fade elements
      const animateFades = (trigger: HTMLDivElement) => {
        const { y, child } = trigger.dataset;
        let tl = gsap.timeline({
          defaults: { ease: "power2.out", },
          scrollTrigger: {
            trigger,
            start: () => "top 95%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(child ? trigger.children : trigger,
          { ...(y ? { y } : { y: "2vw" }), opacity: 0, },
          { duration: 1.4, y: 0, opacity: 1, stagger: 0.04, }
        );
      };

      // Parallax elememnts
      const animateParallaxes = (trigger: HTMLDivElement) => {
        const { top } = trigger.getBoundingClientRect()
        const { innerHeight } = window;
        const posStart = top > innerHeight ? "bottom" : top;
        gsap
          .timeline({
            scrollTrigger: { trigger, scrub: .5, start: `top ${posStart}`, end: "bottom top", },
          })
          .to(trigger, { y: 100, ease: "none" });
      };

      parallaxes.forEach(animateParallaxes)
      fades.forEach(animateFades)

      return () => {
        ScrollTrigger.killAll()
      };
    },
    { dependencies: [], revertOnUpdate: true, }
  );

}
