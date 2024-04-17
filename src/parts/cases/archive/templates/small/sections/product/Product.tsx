import { IBMPlexSans } from '@/pages/_app';
import css from "./product.module.scss"
import { Row } from '@/common/row/row';
import MyImage from '@/components/image/image';


export const Product = () => {


  return (

    <div className={css.product}>
      <Row>
        <div className={css.wrapp}>

          <div className={css.title}>
            <h2 className={IBMPlexSans.className}>Product Summary</h2>
            <p>Revolutionizing healthcare, this app bridges the gap between patients and clinicians. It provides personalized care plans, tailored to meet individual needs, with a broad range of features. Through real-time monitoring and data visualization, the platform ensures continuous observation and immediate care for patients. It also delivers targeted educational content, empowering patients to manage their health proactively.</p>
          </div>



          <div className={css.column}>
            <div className={css.row}>
              <div className={css.icon}>
                <MyImage src={`/img/product_1.svg`} alt="Product" width={42} height={42} />
              </div>
              <div>
                <h3>Empowering Patients with Knowledge</h3>
                <p>Provides targeted educational content, enabling proactive and effective health management.</p>
              </div>
            </div>
            <div className={css.row}>
              <div className={css.icon}>
                <MyImage src={`/img/product_2.svg`} alt="Product" width={42} height={42} />
              </div>
              <div>
                <h3>Real-Time Patient Monitoring</h3>
                <p>Ensures timely care with real-time monitoring and advanced data visualization, elevating patient care standards.</p>
              </div>
            </div>
            <div className={css.row}>
              <div className={css.icon}>
                <MyImage src={`/img/product_3.svg`} alt="Product" width={42} height={42} />
              </div>
              <div>
                <h3>Healthcare Without Borders</h3>
                <p>Offers healthcare access anywhere, overcoming geographical barriers and ensuring constant connection with care teams.</p>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </div>


  )
}