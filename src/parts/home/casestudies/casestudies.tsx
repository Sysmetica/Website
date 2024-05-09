import s from './casestudies.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useSetAtom } from 'jotai';
import { mouseActionArea } from '@/components/action/action';
import clsx from 'clsx';
import { CaseStudiesProps } from '@/types/casestudies';
import { CaseItem } from './caseItem';
import { MyButton } from '@/components/link/button';

export const Casestudies = ({ casestudies }: { casestudies: CaseStudiesProps }) => {
  const setArea = useSetAtom(mouseActionArea);

  if (!casestudies.data.length) {
    return null;
  }

  return (
    <div
      className={s.root}
      // onMouseOver={() => setArea({ area: 'drag' })}
      // onMouseOut={() => setArea({ area: 'default' })}
    >
      <Swiper
        slidesPerView={'auto'}
        navigation
        className={s.swiper}
        draggable={true}
      >
        {casestudies.data.map(({ attributes }) => {
          return (
            <SwiperSlide className={s.slide} key={attributes.title}>
              <CaseItem caseItem={attributes} />
            </SwiperSlide>
          )
        })}

        <SwiperSlide className={clsx(s.slide, s.static)}>
          <MyButton href={'/case-studies'} className={s.link}>
            <span className={s.text}>{`Case Studies`}</span>
            <span className={s.more} />
          </MyButton>
        </SwiperSlide>
      </Swiper>
    </div >
  )
}