import { Row } from "@/common/row/row";
import css from "./wireframes.module.scss"
import MyImage from '@/components/image/image';
import { cavetFont, IBMPlexSans } from "@/pages/_app";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode } from "swiper/modules";
import { MapSVG } from "./map-svg";

const sliderIcons = [
  "/img/greeting.svg",
  "/img/info.svg",
  "/img/measurement.svg",
  "/img/detected.svg",
]

export const Wireframes = () => {
  return (
    <div className={css.wireframes}>
      <Row>
        <div className={css.title}>
          <h2 className={IBMPlexSans.className} data-fade>
            User Flow & Wireframes
          </h2>
          <p data-fade>
            The user experience is intentionally streamlined and intuitive, allowing users to effortlessly engage with the apps essential features right from their initial interaction.
          </p>
        </div>
      </Row>
      <div className={css.map} data-fade>
        <Swiper
          modules={[FreeMode]}
          freeMode={true}
          slidesPerView={'auto'}
          className={css.swiper}
        >
          <SwiperSlide className={css.icon}>
            <MapSVG />
          </SwiperSlide>
        </Swiper>
      </div>
      <Row>
        <div className={css.grid}>
          <div className={css.discription}>
            <p className={cavetFont.className} data-fade>{`Our wireframes showcase the app’s main screens, including the home dashboard, historical data overview, settings, and device synchronization options. Each screen is designed for maximum readability and minimalistic aesthetic appeal.`}</p>
            <div className={css.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                <path data-paths data-length="273.983" d="M92.1657 12.3389C70.492 11.2972 47.6107 13.939 31.6748 30.4509C23.1657 39.2676 20.3797 53.5648 34.0358 58.7071C43.3368 62.2094 59.7805 62.6276 64.8697 52.1285C70.4896 40.5346 43.0172 51.3612 40.2917 53.0638C27.5348 61.0326 19.4201 70.8766 11.5949 83.3902C8.6636 88.0778 8.29121 84.8336 8.94833 81.2114C9.51846 78.0686 10.25 74.509 11.6319 71.6297C12.0533 70.7516 10.5451 76.8443 10.2605 77.7937C9.04057 81.8649 7.79227 86.6131 13.4193 87.0792C14.3233 87.154 22.7904 87.1222 23.1022 85.8726C23.2644 85.2224 18.0786 82.1621 17.4618 81.5815C13.4562 77.8106 12.2357 74.6893 12.9293 69.3695" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <Swiper
            modules={[FreeMode]}
            freeMode={true}
            slidesPerView={'auto'}
            className={css.swiper}
          >
            <SwiperSlide className={css.slide} data-fade data-child>
              {sliderIcons.map(icon => (
                <div className={css.icon} key={icon}>
                  <MyImage src={`${icon}`} alt="User Flow & Wireframes" width={184} height={399} />
                </div>
              ))}
            </SwiperSlide>
          </Swiper>
        </div>
      </Row>
    </div>
  )
}