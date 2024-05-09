import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function useAnimation(props: any, scope: any = null) {

  useGSAP(
    (context, contextSafe: any) => {
      let resize: any, tls: any = [];

      const initAnimaton = () => {
        const section = scope ? scope : document.body;
        const fades = section.querySelectorAll("[data-fade]") as NodeListOf<HTMLDivElement>;
        const parallaxes = section.querySelectorAll("[data-parallax]") as NodeListOf<HTMLDivElement>;
        const paths = section.querySelectorAll("[data-paths]") as NodeListOf<SVGPathElement>;
        resize = new ResizeObserver(() => ScrollTrigger.refresh());


        // Fade svg stroke length
        const animateSVGPath = (path: SVGPathElement) => {
          // const { length } = path.dataset;

          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: path,
              start: () => "top 90%",
              toggleActions: "play none none reverse",
            },

          }
          );
          // gsap.set(path, { opacity: 1 });
          tl.to(path, { duration: 1.5, opacity: 1, strokeDashoffset: 0 })

        };


        // Fade elements
        const animateFades = (trigger: HTMLDivElement) => {
          const { y, x, child, fade } = trigger.dataset;
          let tl = gsap.timeline({
            defaults: { ease: "power2.out", },
            scrollTrigger: {
              trigger,
              start: () => fade == "in" ? "top 98%" : "top 95%",
              toggleActions: "play none none reverse",
            },
          });

          switch (fade) {
            case "in":
              tl.fromTo(child ? trigger.children : trigger,
                { opacity: 0, },
                { duration: 1, opacity: 1, stagger: 0.05, }
              );
              break;
            default:

              if (x) {
                tl.fromTo(child ? trigger.children : trigger,
                  { x, opacity: 0, },
                  { duration: 1, x: 0, opacity: 1, stagger: 0.05, }
                );
              } else {
                tl.fromTo(child ? trigger.children : trigger,
                  { ...(y ? { y } : { y: "50px" }), opacity: 0, },
                  { duration: 1, y: 0, opacity: 1, stagger: 0.05, }
                );
              }
              break;
          }
          tls.push(tl);

        };

        // Parallax elememnts
        const animateParallaxes = (trigger: HTMLDivElement) => {
          const { top } = trigger.getBoundingClientRect()
          const { per } = trigger.dataset;

          const { innerHeight } = window;
          const posStart = top > innerHeight ? "bottom" : top;
          gsap
            .timeline({
              scrollTrigger: { trigger, scrub: true, start: `top ${posStart}`, end: "bottom top", },
            })
            .to(trigger, {
              ...(!per ? { y: 100 } : { yPercent: per })
              , ease: "none"
            });
        };

        parallaxes.forEach(animateParallaxes)
        fades.forEach(animateFades)
        paths.forEach(animateSVGPath);
        resize.observe(section);

      }
      const st = setTimeout(initAnimaton, 200);

      return () => {
        tls.length && tls.forEach((tl: any) => tl.revert())
        clearTimeout(st);
        resize?.disconnect()
        ScrollTrigger.killAll();
      };
    },
    { dependencies: [props], revertOnUpdate: true, scope }
  );

}
