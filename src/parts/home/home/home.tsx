import { Row } from '@/common/row/row';
import s from './home.module.scss';
import { gsap } from "gsap";
import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { IBMPlexSans } from '@/pages/_app';
import { useAtomValue, useSetAtom } from 'jotai';
import { mouseActionArea } from '@/components/action/action';
import { isMobile } from 'react-device-detect';
import { isMobileDevice } from '@/state';
import MyImage from '@/components/image/image';

export const HomeStep = () => {
  const setArea = useSetAtom(mouseActionArea);
  const isMob = useAtomValue(isMobileDevice);

  const shapeRef1 = useRef<any>();
  const shapeRef2 = useRef<any>();

  useEffect(() => {
    const action = (evt: any) => {
      if (isMobile) {
        return
      }

      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      gsap.to(shapeRef1.current, {
        x: mouseX,
        y: mouseY,
        delay: .02,
      })

      gsap.to(shapeRef2.current, {
        x: mouseX,
        y: mouseY,
        delay: 0,
      })
    }

    document.body.addEventListener("mousemove", action)

    return () => {
      document.body.removeEventListener("mousemove", action)
    }
  }, [])

  return (
    <div
      className={clsx(s.root, {
        [s.mobile]: isMob
      })}
      onMouseOver={() => setArea({ area: 'hidden' })}
      onMouseOut={() => setArea({ area: 'default' })}
    >

      <div className={s.shapes}>
        <div className={s.bg} />
        <div className={clsx(s.shape, s.shape1)} ref={shapeRef1} />
        <div className={clsx(s.shape, s.shape2)} ref={shapeRef2} />
      </div>

      {/* action */}
      <div className={clsx(s.textHolder, s.textHolder1)}>
        <div className={s.container}>
          <Row>
            <div className={s.textWrap}>
              <MyImage src="/img/icons/home.svg" alt="icon" width={48} height={24} />
              <h1 className={IBMPlexSans.className}>Mobile Development<br /><span>& Design Agency</span></h1>
              <h2>Delivering <span>full-cycle mobile solutions</span> for startups and tech companies. Trusted for over 5 years, we turn your ideas into reality.</h2>
            </div>
          </Row>
        </div>
      </div>

      <div className={clsx(s.textHolder, s.textHolder2)}>
        <div className={s.container}>
          <Row>
            <div className={s.textWrap}>
              <MyImage src="/img/icons/home.svg" alt="icon" width={48} height={24} />
              <h1 className={IBMPlexSans.className}>Mobile Development<br /><span>& Design Agency</span></h1>
              <h2>Delivering <span>full-cycle mobile solutions</span> for startups and tech companies. Trusted for over 5 years, we turn your ideas into reality.</h2>
            </div>
          </Row>
        </div>
      </div>
    </div>
  )
}