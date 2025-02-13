import css from "./beat.module.scss"
import MyImage from '@/components/image/image';

export const BeatMetric = () => {
  return (
    <div className={css.beat}>
      <div className={css.wrapp}>
        <div className={css.image}>
          <div className={css.key}>
            <div className={css.metric} data-parallax data-per="-10">
              <MyImage src={`/img/beat-metric.png`} alt="Phone" width={1767} height={1082} data-fade />
            </div>
          </div>
        </div>
        <div className={css.logo} data-fade></div>
      </div>
    </div>
  )
}