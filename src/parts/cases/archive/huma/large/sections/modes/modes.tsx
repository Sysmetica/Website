import { IBMPlexSans } from '@/pages/_app';
import css from "./modes.module.scss"
import { Row } from '@/common/row/row';
import MyImage from '@/components/image/image';


export const Modes = () => {


  return (
    <div className={css.modes}>
      <Row>
        <div className={css.wrapp}>
          <div className={css.title}>

            <div className={css.mod} data-fade data-child>
              <div className={css.sun}></div>
              <div className={css.moon}></div>
            </div>

            <h2 className={IBMPlexSans.className} data-fade>Beat Metric Offers Light & Dark Modes</h2>
            <p className={css.subtitle} data-fade>
              To suit user`s preferences and enhance comfort, Beat Metric integrates seamlessly into their lifestyles. The vibrant light mode enhances daytime usability, while the soothing dark mode is perfect for evening use, ensuring comfort at any time of day.
            </p>
          </div>
          <div className={css.icon} data-parallax>
            <MyImage src={`/img/modes.png`} alt="User Flow & Wireframes" width={580} height={739} data-fade/>
          </div>

        </div>
      </Row>
      <div className={css.back} data-parallax></div>

    </div>

  )
}