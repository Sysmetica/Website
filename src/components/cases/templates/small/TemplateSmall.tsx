import { IBMPlexSans, cavetFont } from '@/pages/_app';
import css from "./tmp.module.scss"
import { Row } from '@/common/row/row';
import { Button } from '@/components/button/button';
import MyImage from '@/components/image/image';

export const TemplateSmall = () => {

  const tags = ["Healthcare Innovation", "Streaming Services Development", "Telecommunication Solutions", "Social Networking Platforms", "Apple Watch Integration", "Apple TV Applications", "Digital Transformation", "User Experience Design",]


  return (
    <>
      <div className={css.intro}>
        <Row>
          <div className={css.wrapp}>
            <div className={css.title}>
              <div>
                <h1 className={IBMPlexSans.className}>Explore our Case Studies</h1>
                <p className={css.subtitle}>Our work spans from enhancing healthcare with accurate monitoring tools to advancing entertainment through innovative streaming services</p>
              </div>

              <div className={css.description}>
                <div className={css.icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <path d="M92.1657 12.3389C70.492 11.2972 47.6107 13.939 31.6748 30.4509C23.1657 39.2676 20.3797 53.5648 34.0358 58.7071C43.3368 62.2094 59.7805 62.6276 64.8697 52.1285C70.4896 40.5346 43.0172 51.3612 40.2917 53.0638C27.5348 61.0326 19.4201 70.8766 11.5949 83.3902C8.6636 88.0778 8.29121 84.8336 8.94833 81.2114C9.51846 78.0686 10.25 74.509 11.6319 71.6297C12.0533 70.7516 10.5451 76.8443 10.2605 77.7937C9.04057 81.8649 7.79227 86.6131 13.4193 87.0792C14.3233 87.154 22.7904 87.1222 23.1022 85.8726C23.2644 85.2224 18.0786 82.1621 17.4618 81.5815C13.4562 77.8106 12.2357 74.6893 12.9293 69.3695" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <p className={cavetFont.className}>Our experience encompasses the following domains:</p>
              </div>
            </div>

            <div className={css.tags}>
              {tags.map(t => <p key={t}>{t}</p>)}
            </div>
          </div>
        </Row>
        <div className={css.back}></div>

      </div>

      <div className={`${css.health} ${css.top}`}>
        <Row>
          <div className={css.wrapp}>
            <div className={css.image}>
              <MyImage src={`/img/iphone.png`} alt="Phone" width={381} height={772} imgClass={css.desk} />
              <MyImage src={`/img/iphone-mobile.png`} alt="Phone" width={270} height={545} imgClass={css.mobile} />
            </div>
            <div className={css.content}>
              <div className={css.tag}>
                <p>HEALTHCARE</p>
              </div>

              <h2>Huma, a remote patient monitoring platform </h2>
              <p className={css.subtitle}>An application that advances connected care for patients and accelerates research and therapies.</p>
              <div className={css.buttons}>
                <Button type={['fill']} link={'/contact'}>
                  <>
                    View Case Study
                    <div className={css.ico}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                        <path d="M3 13L13 3M13 3H3M13 3V13" stroke="white" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                  </>
                </Button>
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
          </div>

        </Row>
      </div>
      <div className={`${css.health} ${css.bottom}`}>
        <Row>
          <div className={css.wrapp}>

            <div className={css.content}>
              <div className={css.tag}>
                <p>HEALTHCARE</p>
              </div>

              <h2>Beat Metric, a heart rate measurement app </h2>
              <p className={css.subtitle}>We designed and developed a precise, user-friendly heart rate monitoring tool, integrating seamlessly with health devices for fitness, medical, or wellness tracking.</p>
              <div className={css.buttons}>
                <Button type={['fill']} link={'/contact'}>
                  <>
                    View Case Study
                    <div className={css.ico}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                        <path d="M3 13L13 3M13 3H3M13 3V13" stroke="white" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                  </>
                </Button>
              </div>

            </div>

            <div className={css.image}>
              <MyImage src={`/img/iphone-red.png`} alt="Phone" width={381} height={772} imgClass={css.desk} />
              <MyImage src={`/img/iphone-mobile.png`} alt="Phone" width={270} height={545} imgClass={css.mobile} />

            </div>
          </div>

        </Row>
      </div>
    </>

  )
}