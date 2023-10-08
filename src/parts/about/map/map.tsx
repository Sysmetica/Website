import { Row } from "@/common/row/row";
import s from './map.module.scss';
import { IBMPlexSans } from "@/pages/_app";
import MyImage from "@/components/image/image";

export const Map = () => {
  return (
    <div className={s.root}>
      <Row>
        <div className={s.wrap}>
          <div className={s.action}>
            <MyImage src="/img/map.svg" alt="map image" width={555} height={337} />
          </div>
          <div className={s.text}>
            <h2 className={IBMPlexSans.className}>Meet Our<br />Experienced<br />Leaders</h2>
            <p>Get acquainted with our adept leaders, each boasting over 7 years of individual proficiency in the industry</p>
          </div>
        </div>
      </Row>
    </div>
  )
}