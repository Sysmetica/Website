import css from "./cases.module.scss"
import { Row } from '@/common/row/row';
import { Button } from '@/components/button/button';
import MyImage from '@/components/image/image';
import { CaseStudiesProps } from "@/types/casestudies";
import Link from 'next/link';

export const Cases = ({ cases }: { cases: CaseStudiesProps }) => {
  return (
    <div className={css.cases}>
      {cases.data.map(({
        attributes: {
          title,
          portrait,
          landscape,
          href,
          description,
          site,
          tags,
          template,
          slug,
        }
      }) => {
        return (
          <div className={`${css.health}`} key={title}>
            <Row>
              <div className={css.wrapp} >
                <div className={css.image_wrapp} >
                  <div className={css.image} data-parallax data-fade data-child >
                    <MyImage
                      src={landscape.data?.attributes.url}
                      alt={title}
                      width={381}
                      height={772}
                      imgClass={css.desk}
                      upload={true}
                    />
                    <MyImage
                      src={portrait.data?.attributes.url}
                      alt={title}
                      width={270}
                      height={545}
                      imgClass={css.mobile}
                      upload={true}
                    />
                  </div>
                </div>

                <div className={css.content}>
                  {href && <Link href={href} className={css.mobile_link} title={title} data-fade />}
                  <div className={css.tags} data-fade data-child>
                    {tags.map(tag => <p key={tag.text}>{tag.text}</p>)}
                  </div>
                  <h2 data-fade>{title}</h2>
                  <p className={css.subtitle} data-fade>{description}</p>
                  <div className={css.buttons} data-fade data-child>
                    {template && (
                      <Button type={['fill']} link={`/case-studies/${slug}`}>
                        <>
                          {`View Case Studie`}
                          <div className={css.ico}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                              <path d="M3 13L13 3M13 3H3M13 3V13" stroke="white" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </>
                      </Button>
                    )}
                    {site && href && (
                      <a className={css.site} href={href}>
                        {site}
                        <div className={css.ico}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                            <path d="M6.6668 8.66697C6.9531 9.04972 7.31837 9.36642 7.73783 9.5956C8.1573 9.82477 8.62114 9.96105 9.0979 9.99519C9.57466 10.0293 10.0532 9.96055 10.501 9.79349C10.9489 9.62643 11.3555 9.36502 11.6935 9.02697L13.6935 7.02697C14.3007 6.3983 14.6366 5.55629 14.629 4.6823C14.6215 3.80831 14.2709 2.97227 13.6529 2.35424C13.0348 1.73621 12.1988 1.38565 11.3248 1.37806C10.4508 1.37046 9.60881 1.70644 8.98013 2.31364L7.83347 3.45364M9.33347 7.33364C9.04716 6.95088 8.68189 6.63418 8.26243 6.40501C7.84297 6.17584 7.37913 6.03956 6.90237 6.00541C6.4256 5.97127 5.94708 6.04006 5.49924 6.20711C5.0514 6.37417 4.64472 6.63559 4.3068 6.97364L2.3068 8.97364C1.69961 9.60231 1.36363 10.4443 1.37122 11.3183C1.37881 12.1923 1.72938 13.0283 2.3474 13.6464C2.96543 14.2644 3.80147 14.615 4.67546 14.6226C5.54945 14.6301 6.39146 14.2942 7.02013 13.687L8.16013 12.547" stroke="#1D1D1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Row>
          </div>
        )
      })}
    </div>
  )
}
