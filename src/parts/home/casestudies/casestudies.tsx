import css from './casestudies.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { CaseStudiesProps } from '@/types/casestudies';
import { CaseItem } from './caseItem';
import { Row } from '@/common/row/row';
import { Button } from '@/components/button/button';
import { Mousewheel, Scrollbar, Navigation } from 'swiper/modules';
import { IBMPlexSans } from '@/pages/_app';

export const Casestudies = ({ casestudies }: { casestudies: CaseStudiesProps }) => {
  if (!casestudies.data.length) {
    return null;
  }

  const config = {
    modules: [Mousewheel, Scrollbar, Navigation],
    spaceBetween: 16,
    navigation: {
      nextEl: "[data-nav-next]",
      prevEl: "[data-nav-prev]"
    },
    className: css.content_slider,
    draggable: true,
    mousewheel: {
      forceToAxis: true,
    },
    scrollbar: {
      el: "[data-propgress]",
      draggable: true,
      dragClass: css.content_bar_pr
    },
    breakpoints: {
      800: {
        spaceBetween: 32
      },
    }
  }


  return (
    <div className={css.root}>
      <Row>
        <div className={css.content}>
          <div className={css.content_title} >
            <h2 className={IBMPlexSans.className} data-fade>Turning ideas into reality</h2>
            <div className={css.navs} data-fade>
              <button className={css.nav} data-nav-prev></button>
              <button className={css.nav} data-nav-next></button>
            </div>
            <div className={css.link} data-fade={true}>
              <Button type={['fill']} link={'/case-studies'} >{`Case Studies`}</Button>
            </div>
          </div>
          <Swiper {...config} slidesPerView={"auto"}  >
            {casestudies.data.map(({ attributes }) =>
              <SwiperSlide className={css.slide} key={attributes.title}>
                <CaseItem caseItem={attributes} />
              </SwiperSlide>
            )}
          </Swiper>
          <div className={css.content_bar} data-propgress={true}></div>
        </div>
      </Row >

    </div >
  )
}