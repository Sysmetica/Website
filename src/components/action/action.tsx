import { useEffect, useRef } from "react";
import s from './action.module.scss';
import { gsap } from "gsap";
import { atom, useAtomValue } from "jotai";
import clsx from "clsx";
import { isMobile } from 'react-device-detect';
import { isMobileDevice } from "@/state";

type mouseActionAreaProp = {
  area: 'hidden' | 'open' | 'default' | 'none' | 'drag' | 'submit' | 'link' | 'button',
  title?: string
}

export const mouseActionArea = atom<mouseActionAreaProp>({
  area: 'default',
})

export const Action = () => {
  const { area, title } = useAtomValue(mouseActionArea);
  const isMob = useAtomValue(isMobileDevice);

  // console.log('--- area ', area);

  const circleRef = useRef<any>()
  const pointRef = useRef<any>()
  const dragRef = useRef<any>()
  // const openRef = useRef<any>()
  // const submitRef = useRef<any>()

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
        duration: 0.3,
      })

      gsap.to(pointRef.current, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
      })

      gsap.to(dragRef.current, {
        x: mouseX,
        y: mouseY,
        duration: 0.4,
      })

      // gsap.to(openRef.current, {
      //   x: mouseX,
      //   y: mouseY,
      //   duration: 0.3,
      // })

      // gsap.to(submitRef.current, {
      //   x: mouseX,
      //   y: mouseY,
      //   duration: 0.3,
      // })

      // gsap.to(dragRef.current, {
      //   x: mouseX,
      //   y: mouseY,
      //   duration: 0.3,
      // })
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
      {/* <div className={s.pointerActions}>

        <div ref={openRef} className={clsx(s.open, s.action, {
          [s.visible]: area === 'open'
        })} />

        <div ref={dragRef} className={clsx(s.drag, s.action, {
          [s.visible]: area === 'drag'
        })}>{title || "Drag"}</div>

        <div ref={submitRef} className={clsx(s.submit, s.action, {
          [s.visible]: area === 'submit'
        })} />

      </div> */}

      <div className={clsx(s.pointerActions, s.blendedMode)}>

        <div ref={dragRef} className={clsx(s.drag, s.hidden, {
          [s.visible]: area === 'drag'
        })} />

        <div ref={circleRef} className={clsx(s.circle, s.action, {
          [s.link]: area === 'link',
          [s.button]: area === 'button'
        })}><div /></div>

        <div ref={pointRef} className={clsx(s.point, s.action, {
          [s.dragging]: area === 'drag',
          [s.link]: area === 'link',
          [s.button]: area === 'button',
        })}><div /></div>

      </div>
    </div>
  )
}