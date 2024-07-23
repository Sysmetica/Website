import s from './casestudies.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import clsx from 'clsx';
import { CaseStudiesProps } from '@/types/casestudies';
import { CaseItem } from './caseItem';
import { MyButton } from '@/components/link/button';

export const Casestudies = ({ casestudies }: { casestudies: CaseStudiesProps }) => {
  if (!casestudies.data.length) {
    return null;
  }

  return (
    <div className={s.root}>
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