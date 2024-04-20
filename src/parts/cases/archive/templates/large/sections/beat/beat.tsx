import css from "./beat.module.scss"
import { Row } from '@/common/row/row';
import MyImage from '@/components/image/image';


export const BeatMetric = () => {

  return (

    <div className={css.beat} >
      <div className={css.wrapp}>
        <div className={css.image}>
          <div className={css.key}>
            <MyImage src={`/img/beat-metric.png`} alt="Phone" width={1767} height={1082} />
          </div>
        </div>
        <div className={css.logo}></div>
      </div>
    </div >


  )
}