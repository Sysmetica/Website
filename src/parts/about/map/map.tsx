import { Row } from "@/common/row/row";
import s from './map.module.scss';
import { IBMPlexSans } from "@/pages/_app";
import MyImage from "@/components/image/image";
import { OptionsContext } from "@/common/layout/layout";
import { useContext } from "react";
import { MapProps } from "@/types/about";

export const Map = ({ data }: { data: MapProps }) => {
  const { attributes: { theme } } = useContext(OptionsContext);
  const imgPath = theme === 'light' ? '-p' : '';

  if (!data?.title && !data?.text) {
    return null;
  }

  return (
    <div className={s.root}>
      <Row>
        <div className={s.wrap}>
          <div className={s.action}>
            <MyImage src={`/img/map${imgPath}.svg`} alt="map image" width={555} height={337} data-fade="in"/>
          </div>
          <div className={s.text} >
            <h2 className={IBMPlexSans.className} data-fade>{data.title}</h2>
            <p data-fade>{data.text}</p>
          </div>
        </div>
      </Row>
    </div>
  )
}
