import { Row } from "@/common/row/row";
import css from "./users.module.scss"
import MyImage from '@/components/image/image';
import { cavetFont, IBMPlexSans } from "@/pages/_app";
// import Map from '../../../public/img/icons/linkedin.svg'
import Map from '../../../../../../../../public/img/wireframes-map.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode } from "swiper/modules";


export const Users = () => {

  const sliderIcons = ["/img/user_5.png", "/img/user_2.png", "/img/user_3.png", "/img/user_4.png", "/img/user_1.png",]


  return (

    <div className={css.users} >

      <Row>
        <div className={css.title}>
          <h2 className={IBMPlexSans.className} data-fade>
            Users
            <span className={css.c} ></span>
          </h2>
          <p data-fade>
            Beat Metric serves a wide range of users, from fitness enthusiasts and athletes to individuals with health conditions that necessitate regular heartbeat monitoring. By combining a clear summary of heart rate data with an easy-to-navigate interface, it supports anyone looking to enhance their health monitoring practices.          </p>
        </div>
      </Row>


      <Row>
        <div className={css.wrapper}>
          <div className={css.discription}>
            <div className={css.col}  >
              <div className={css.icon_left} data-fade></div>
              <p className={cavetFont.className} data-fade>
                Persona 1: Jordan, vigilant about cardiac health due to a family history, prefers an easy-to-use app that provides consistent heart monitoring and integrates well with health devices for a comprehensive health overview.              </p>
            </div>
            <div className={css.col}>
              <div className={css.icon_right} data-fade></div>
              <p className={cavetFont.className} data-fade>
                Persona 2:  Sarah is a tech-savvy fitness coach focused on optimizing workouts with accurate heart rate data, seeking a tool that offers deep analytics and seamless device integration
              </p>
            </div>

          </div>
          <div className={css.grid}>

            <div>
              <div className={css.star} data-fade></div>
              <div className={css.star} data-fade></div>
              <div className={css.star} data-fade></div>
              <div className={css.phone} data-fade></div>
            </div>


            <div>
              {sliderIcons.map(icon => (
                <div className={css.item} key={icon} data-fade > 
                  <div className={css.icon} >
                    <div className={css.photo}>
                      <MyImage src={`${icon}`} alt="User Flow & Wireframes" width={153} height={208} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </Row>


    </div >


  )
}