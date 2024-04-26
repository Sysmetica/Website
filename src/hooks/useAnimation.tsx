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
      const paths = section.querySelectorAll("[data-paths]") as NodeListOf<SVGPathElement>;

      paths.forEach(path => {

      });

      // Fade elements
      const animateSVGPath = (path: SVGPathElement) => {
        // const { length } = path.dataset;

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: path,
            start: () => "top 90%",
            toggleActions: "play none none reverse",

          },
        });
        // gsap.set(path, { opacity: 1 });
        tl.to(path, { duration: 1.5, opacity: 1, strokeDashoffset: 0 })
      };


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
          { ...(y ? { y } : { y: "50px" }), opacity: 0, },
          { duration: 1, y: 0, opacity: 1, stagger: 0.05,  }
        );
      };

      // Parallax elememnts
      const animateParallaxes = (trigger: HTMLDivElement) => {
        const { top } = trigger.getBoundingClientRect()
        const { per } = trigger.dataset;

        const { innerHeight } = window;
        const posStart = top > innerHeight ? "bottom" : top;
        gsap
          .timeline({
            scrollTrigger: { trigger, scrub: .5, start: `top ${posStart}`, end: "bottom top", },
          })
          .to(trigger, {
            ...(!per ? { y: 100 } : { yPercent: per })
            , ease: "none"
          });
      };

      parallaxes.forEach(animateParallaxes)
      fades.forEach(animateFades)
      paths.forEach(animateSVGPath);
      const resize = new ResizeObserver(() => ScrollTrigger.refresh());
      resize.observe(section);

      return () => {
        resize.disconnect()
        ScrollTrigger.killAll()
      };
    },
    { dependencies: [], revertOnUpdate: true, }
  );

}
