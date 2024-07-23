import { useRouter } from "next/router";
import { useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { useClearStates } from "./useClearStates";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const useLinkAction = () => {
  const { pathname } = useRouter();
  const clearStates = useClearStates();

  return useCallback((e: any, to: string) => {
    if (pathname === to) {
      e.preventDefault();

      clearStates();

      const scroller = document.scrollingElement as HTMLDivElement;
      const scrollType = (type = "smooth") => scroller && (scroller.style.scrollBehavior = type);
      scrollType("auto")
      gsap.to(window, { scrollTo: 0, duration: 0.3, ease: "ease" }).then(() => scrollType());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])
}
