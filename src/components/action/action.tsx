import { useEffect, useRef } from "react";
import s from './action.module.scss';
import { gsap } from "gsap";
import { atom, useAtomValue } from "jotai";
import clsx from "clsx";
import { isMobile } from 'react-device-detect';

type mouseActionAreaProp = {
  area: 'hidden' | 'open' | 'default' | 'none' | 'drag' | 'submit' | 'link' | 'button' | 'input',
  title?: string
}

export const mouseActionArea = atom<mouseActionAreaProp>({
  area: 'default',
})

export const Action = () => {
  const { area, title } = useAtomValue(mouseActionArea);

  // console.log('--- area ', area);

  const circleRef = useRef<any>()
  const pointRef = useRef<any>()
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
        duration: 0.1,
      })

      gsap.to(pointRef.current, {
        x: mouseX,
        y: mouseY,
        duration: 0.05,
      })

      gsap.to(dragRef.current, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
      })
    }

    document.body.addEventListener('mousemove', mouseAction);

    return () => {
      document.body.removeEventListener('mousemove', mouseAction);
    }
  }, [])

  return (
    <div className={s.root}>
      <div className={clsx(s.pointerActions, s.blendedMode)}>

        <div ref={dragRef} className={clsx(s.drag, s.hidden, {
          [s.visible]: area === 'drag'
        })} />

        <div ref={circleRef} className={clsx(s.circle, s.action, {
          [s.link]: area === 'link',
          [s.button]: area === 'button',
          [s.input]: area === 'input',
        })}><div /></div>

        <div ref={pointRef} className={clsx(s.point, s.action, {
          [s.dragging]: area === 'drag',
          [s.link]: area === 'link',
          [s.button]: area === 'button',
          [s.input]: area === 'input',
        })}><div /></div>

      </div>
    </div>
  )
}