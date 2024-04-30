import { IBMPlexSans } from '@/pages/_app';
import css from "./product.module.scss"
import { Row } from '@/common/row/row';
import MyImage from '@/components/image/image';


export const Product = () => {

  const rows = [
    {
      title: "Apple Watch Integration",
      subtitle: "This feature allows users to receive heartbeat notifications directly on their wrist, view a comprehensive history of their measurements, and collect statistics aggregated from both the Beat Metric app and Apple Watch.",
      image: "/img/product_4.svg"
    },
    {
      title: "Data History and Statistics",
      subtitle: "Enhances user engagement with detailed health analytics and personalized insights based on their heart rate data.",
      image: "/img/product_5.svg"
    },
    {
      title: "Connectivity & Synchronization",
      subtitle: "Streamlining integration and data sharing with other health tracking applications for a unified health management experience",
      image: "/img/product_6.svg"
    },
  ]


  return (

    <div className={css.product}>
      <Row>
        <div className={css.wrapp}>

          <div className={css.title} >
            <h2 className={IBMPlexSans.className} data-fade>Product Summary</h2>
            <p data-fade>
              Beat Metric is a revolutionary tool designed for individuals who require consistent and accurate heart rate monitoring. It offers a user-friendly interface, precise heartbeat tracking, and seamless integration with health devices. This app caters to anyone looking to stay informed about their cardiac health, whether for fitness tracking, medical reasons, or personal wellness goals.
            </p>
          </div>



          <div className={css.column}>

            {rows.map(row => (
              <div className={css.row} key={row.title} data-fade>
                <div className={css.icon}>
                  <MyImage src={row.image} alt={row.title} width={42} height={42} />
                </div>
                <div>
                  <h3>{row.title}</h3>
                  <p>{row.subtitle}</p>
                </div>
              </div>

            ))}


          </div>
        </div>
      </Row>
    </div>


  )
}