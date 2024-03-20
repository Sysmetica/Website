import { Row } from '@/common/row/row';
import s from './casestudies.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import MyImage from '@/components/image/image';
import 'swiper/css';
import { IBMPlexSans } from '@/pages/_app';
import { useAtomValue, useSetAtom } from 'jotai';
import { mouseActionArea } from '@/components/action/action';
import clsx from 'clsx';
import Link from 'next/link';
import { CaseStudies } from '@/types/casestudies';
import { isMobileDevice } from '@/state';

export const Casestudies = ({ casestudies }: { casestudies: CaseStudies }) => {
  const setArea = useSetAtom(mouseActionArea);
  const isMob = useAtomValue(isMobileDevice);

  if (!casestudies.data.length) {
    return null;
  }

  return (
    <div
      className={clsx(s.root, {
        [s.mobile]: isMob
      })}
      onMouseOver={() => setArea({ area: 'drag' })}
      onMouseOut={() => setArea({ area: 'default' })}
    >
      <Swiper
        slidesPerView={'auto'}
        navigation
        className={s.swiper}
        draggable={true}
      >
        {casestudies.data.map(({ attributes: { title, description, site, href, landscape, portrait, tags } }) => {
          return (
            <SwiperSlide className={s.slide} key={title}>
              <div className={s.textHolder}>
                <Row>
                  <div className={s.textWrap}>
                    <div className={s.tags}>
                      <div className={s.icon} />
                      {tags.map(({ text }) => {
                        return (
                          <span className={s.tag} key={text}>{text}</span>
                        )
                      })}
                    </div>
                    <h2 className={IBMPlexSans.className}>{title}</h2>
                    <p>{description}</p>
                    <a href={href} target='_blank' className={s.link}>
                      {site}
                      <MyImage src="/img/icons/link.svg" alt="link icon" width={16} height={16} />
                    </a>
                  </div>
                </Row>
              </div>
              <div className={s.imageWrap}>
                <MyImage src={landscape.data.attributes.url} alt='slide image' width={1920} height={931} retina={2} imgClass={s.land} upload={true} />
                <MyImage src={portrait.data.attributes.url} alt='slide image' width={931} height={1441} retina={2} imgClass={s.port} upload={true} />
              </div>
            </SwiperSlide>
          )
        })}

        <SwiperSlide className={clsx(s.slide, s.static)}>
          <Link href={'/case-studies'} className={s.link}>
            <span className={s.text}>Case Studies</span>
            <span className={s.more} />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div >
  )
}