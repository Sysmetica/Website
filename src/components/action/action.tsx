import { useEffect, useRef } from "react";
import s from './action.module.scss';
import { gsap } from "gsap";
import { atom, useAtomValue } from "jotai";
import clsx from "clsx";
import { isMobile } from 'react-device-detect';
import { isMobileDevice } from "@/state";

type mouseActionAreaProp = {
  area: 'hidden' | 'open' | 'default' | 'none' | 'drag'
}

export const mouseActionArea = atom<mouseActionAreaProp>({
  area: 'default',
})

export const Action = () => {
  const { area } = useAtomValue(mouseActionArea);
  const isMob = useAtomValue(isMobileDevice);

  const circleRef = useRef<any>()
  const pointRef = useRef<any>()
  const openRef = useRef<any>()
  const dragRef = useRef<any>()

  useEffect(() => {
    const mouseAction = (evt: any) => {
      if (isMobile) {
        return
      }

      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      gsap.to(circleRef.current, {
        x: mouseX,
        y: mouseY,
        delay: .07,
      })

      gsap.to(pointRef.current, {
        x: mouseX,
        y: mouseY,
        delay: .01,
      })

      gsap.to(openRef.current, {
        x: mouseX,
        y: mouseY,
        delay: 0,
      })

      gsap.to(dragRef.current, {
        x: mouseX,
        y: mouseY,
        delay: .05,
      })
    }

    document.body.addEventListener('mousemove', mouseAction);

    return () => {
      document.body.removeEventListener('mousemove', mouseAction);
    }
  }, [])

  return (
    <div className={clsx(s.root, {
      [s.mob]: isMob
    })}>
      <div className={s.pointerActions}>
        <div ref={openRef} className={clsx(s.open, s.action, {
          [s.visible]: area === 'open'
        })} />
        <div ref={dragRef} className={clsx(s.drag, s.action, {
          [s.visible]: area === 'drag'
        })}>Drag</div>
      </div>
      <div className={clsx(s.pointerActions, s.blendedMode)}>
        <div ref={circleRef} className={clsx(s.circle, s.action, {
          [s.visible]: area === 'default'
        })} />
        <div ref={pointRef} className={clsx(s.point, s.action, {
          [s.visible]: area === 'default'
        })} />
      </div>
    </div>
  )
}