import { IBMPlexSans, cavetFont } from '@/pages/_app';
import css from "./tmp.module.scss"
import { Row } from '@/common/row/row';
import { Button } from '@/components/button/button';
import MyImage from '@/components/image/image';
import { useSetAtom } from 'jotai';
import { mouseActionArea } from '@/components/action/action';


export const TemplateMedium = () => {
  const setArea = useSetAtom(mouseActionArea);

  const tools = [
    {
      title: "Timeline of Tasks",
      subtitle: "Patients are given a timeline outlining the tasks they need to complete and receive timely reminders.",
    },
    {
      title: "Vital Signs",
      subtitle: "Patients can use their phones and integrated devices to capture and monitor health vitals safely and remotely.",
    },
    {
      title: "Questionnaires",
      subtitle: "The app provides validated clinical questionnaires, for example the Oxford Knee Score, EQ-5D, Global Health Score and Promis CAT.",
    },
    {
      title: "Educational Content",
      subtitle: "We support patients with educational content about their symptoms, care and treatment.",
    },
    {
      title: "Connected Devices",
      subtitle: "We offer both manual data entry and connection to a number of medical devices to aid data collection.",
    },
    {
      title: "Telemedicine",
      subtitle: "Patients can receive additional support from their clinical team through secure video and audio consultations.",
    }
  ]



  return (
    <>
      <div className={css.intro}>
        <Row>
          <div className={css.wrapp}>
            <div className={css.title}>
              <p className={css.tag}>HEALTHCARE</p>
              <h1 className={IBMPlexSans.className}>Huma, a remote patient monitoring platform </h1>
              <p className={css.subtitle}>An application that advances connected care for patients and accelerates research and therapies</p>

              <a href="https://www.huma.com/" className={css.huma} target='_blank'>
                huma.com
                <div className={css.ico}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                    <path d="M6.6668 8.66697C6.9531 9.04972 7.31837 9.36642 7.73783 9.5956C8.1573 9.82477 8.62114 9.96105 9.0979 9.99519C9.57466 10.0293 10.0532 9.96055 10.501 9.79349C10.9489 9.62643 11.3555 9.36502 11.6935 9.02697L13.6935 7.02697C14.3007 6.3983 14.6366 5.55629 14.629 4.6823C14.6215 3.80831 14.2709 2.97227 13.6529 2.35424C13.0348 1.73621 12.1988 1.38565 11.3248 1.37806C10.4508 1.37046 9.60881 1.70644 8.98013 2.31364L7.83347 3.45364M9.33347 7.33364C9.04716 6.95088 8.68189 6.63418 8.26243 6.40501C7.84297 6.17584 7.37913 6.03956 6.90237 6.00541C6.4256 5.97127 5.94708 6.04006 5.49924 6.20711C5.0514 6.37417 4.64472 6.63559 4.3068 6.97364L2.3068 8.97364C1.69961 9.60231 1.36363 10.4443 1.37122 11.3183C1.37881 12.1923 1.72938 13.0283 2.3474 13.6464C2.96543 14.2644 3.80147 14.615 4.67546 14.6226C5.54945 14.6301 6.39146 14.2942 7.02013 13.687L8.16013 12.547" stroke="#1D1D1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>


            </div>
          </div>
        </Row>
        <div className={css.back}></div>

      </div>

      <div className={css.role}>
        <Row>
          <div className={css.wrapp}>
            <div className={css.column}>
              <div className={css.row}>
                <h2 className={IBMPlexSans.className}>Our Role in the Product</h2>
                <p>Our primary role is centered around the development of the mobile application. Our development process is deeply committed to understanding the unique needs of both patients and healthcare providers. We leverage a vast library of features to tailor the application to meet these specific requirements.</p>
              </div>
              <div className={css.row}>
                <h2 className={IBMPlexSans.className}>27 m+ patients</h2>
                <p>Huma`s digital-first health platforms cater to a network of 27 million patients, offering innovative and accessible healthcare solutions</p>
              </div>
              <div className={css.row}>
                <h2 className={IBMPlexSans.className}>3000+ hospitals</h2>
                <p>Over 3,000 hospitals and clinics are supported across the platforms to secure the most sustainable impact for patients.</p>
              </div>
            </div>
          </div>
        </Row>

        <div className={css.hand}>

          <div className={css.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
              <path d="M92.1657 12.3389C70.492 11.2972 47.6107 13.939 31.6748 30.4509C23.1657 39.2676 20.3797 53.5648 34.0358 58.7071C43.3368 62.2094 59.7805 62.6276 64.8697 52.1285C70.4896 40.5346 43.0172 51.3612 40.2917 53.0638C27.5348 61.0326 19.4201 70.8766 11.5949 83.3902C8.6636 88.0778 8.29121 84.8336 8.94833 81.2114C9.51846 78.0686 10.25 74.509 11.6319 71.6297C12.0533 70.7516 10.5451 76.8443 10.2605 77.7937C9.04057 81.8649 7.79227 86.6131 13.4193 87.0792C14.3233 87.154 22.7904 87.1222 23.1022 85.8726C23.2644 85.2224 18.0786 82.1621 17.4618 81.5815C13.4562 77.8106 12.2357 74.6893 12.9293 69.3695" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          <div className={css.h}>
            <MyImage src={`/img/cases_hand.png`} alt="Phone" width={680} height={840} />
          </div>
        </div>
      </div>


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
      <div className={css.tools}>
        <Row>
          <div className={css.wrapp}>

            <div className={css.title}>
              <h2 className={IBMPlexSans.className}>Patient Engagement Tools</h2>
              <p>
                Explore a mobile app designed to enhance patient engagement through task management, questionnaires, device integration, remote monitoring, educational resources, and telemedicine consultations for comprehensive health management.
              </p>
            </div>

            <div className={css.column}>
              <div className={css.diamond}>
                <MyImage src={`/img/icons/services/diamond-bg-2.svg`} alt="" width={500} height={648} />
              </div>
              <div className={css.stroke}></div>

              <div className={css.grid}>
                {tools.map(tool =>
                  <div className={css.row} key={tool.title}>
                    <p className={css.t}>{tool.title}</p>
                    <p className={css.s}>{tool.subtitle}</p>
                  </div>
                )}
              </div>

            </div>

          </div>
        </Row>
      </div>

      <div className={`${css.health}`}
        onMouseOver={() => setArea({ area: 'drag', title: "About Project" })}
        onMouseOut={() => setArea({ area: 'default', title: "About Project" })}>
        <Row>
          <div className={css.wrapp}>

            <div className={css.content}>
              <div className={css.tag}>
                <p>HEALTHCARE</p>
              </div>

              <h2>Beat Metric, a heart rate measurement app </h2>
              <p className={css.subtitle}>We designed and developed a precise, user-friendly heart rate monitoring tool, integrating seamlessly with health devices for fitness, medical, or wellness tracking.</p>
              <div className={css.buttons}>
                <a href="/" className={css.huma} target='_blank'>
                  appstorelink.here
                  <div className={css.ico}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                      <path d="M6.6668 8.66697C6.9531 9.04972 7.31837 9.36642 7.73783 9.5956C8.1573 9.82477 8.62114 9.96105 9.0979 9.99519C9.57466 10.0293 10.0532 9.96055 10.501 9.79349C10.9489 9.62643 11.3555 9.36502 11.6935 9.02697L13.6935 7.02697C14.3007 6.3983 14.6366 5.55629 14.629 4.6823C14.6215 3.80831 14.2709 2.97227 13.6529 2.35424C13.0348 1.73621 12.1988 1.38565 11.3248 1.37806C10.4508 1.37046 9.60881 1.70644 8.98013 2.31364L7.83347 3.45364M9.33347 7.33364C9.04716 6.95088 8.68189 6.63418 8.26243 6.40501C7.84297 6.17584 7.37913 6.03956 6.90237 6.00541C6.4256 5.97127 5.94708 6.04006 5.49924 6.20711C5.0514 6.37417 4.64472 6.63559 4.3068 6.97364L2.3068 8.97364C1.69961 9.60231 1.36363 10.4443 1.37122 11.3183C1.37881 12.1923 1.72938 13.0283 2.3474 13.6464C2.96543 14.2644 3.80147 14.615 4.67546 14.6226C5.54945 14.6301 6.39146 14.2942 7.02013 13.687L8.16013 12.547" stroke="#1D1D1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </a>
              </div>

            </div>

            <div className={css.image}>
              <MyImage src={`/img/iphone-big.png`} alt="Phone" width={1440} height={1000} imgClass={css.desk} />
              <MyImage src={`/img/iphone-mobile.png`} alt="Phone" width={270} height={545} imgClass={css.mobile} />

            </div>
          </div>

        </Row>
      </div>
    </>

  )
}