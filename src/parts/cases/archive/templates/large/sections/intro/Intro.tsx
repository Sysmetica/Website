import { IBMPlexSans } from '@/pages/_app';
import css from "./intro.module.scss"
import { Row } from '@/common/row/row';


export const Intro = () => {


  return (
    <div className={css.intro}>
      <Row>
        <div className={css.wrapp}>
          <div className={css.title}>
            <p className={css.tag}>HEALTHCARE</p>
            <h1 className={IBMPlexSans.className}>Beat Metric: Effortless Heart Monitoring </h1>
            <p className={css.subtitle}>We designed and developed a precise, user-friendly heart rate monitoring tool, integrating seamlessly with health devices for fitness, medical, or wellness tracking.</p>
          </div>
        </div>
      </Row>
      <div className={css.back}></div>

    </div>

  )
}