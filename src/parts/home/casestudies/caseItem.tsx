import { Row } from '@/common/row/row';
import s from './caseItem.module.scss';
import MyImage from '@/components/image/image';
import 'swiper/css';
import { IBMPlexSans } from '@/pages/_app';
import { CaseItemProps } from '@/types/casestudies';
import { Button } from '@/components/button/button';

export const CaseItem = ({ caseItem }: { caseItem: CaseItemProps }) => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.textHolder}>
          <div className={s.textWrap}>
            <div className={s.tags} data-fade_ data-child_>
              {caseItem.tags.map(({ text }) => {
                return (
                  <span className={s.tag} key={text}>{text}</span>
                )
              })}
            </div>
            <h2 className={IBMPlexSans.className} data-fade_>{caseItem.title}</h2>
            <p data-fade_>{caseItem.description}</p>
            <div className={s.buttons} data-fade_ data-child_>
              {caseItem.template && (
                <Button type={['fill']} link={`/case-studies/${caseItem.slug}`}>
                  <>
                    {`View Case Studie`}
                    <div className={s.ico}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                        <path d="M3 13L13 3M13 3H3M13 3V13" stroke="white" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </>
                </Button>
              )}
              {caseItem.href && (
                <a href={caseItem.href} target='_blank' className={s.link}>
                  {caseItem.site}
                  <MyImage src="/img/icons/link.svg" alt="link icon" width={16} height={16} />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className={s.imageWrap} data-fade_ data-child_ data-image>
          <MyImage
            src={caseItem.image.data?.attributes.url}
            alt={caseItem.title}
            width={1920}
            height={931}
            retina={2}
            imgClass={s.land}
            upload={true}
          />
        </div>
      </div>
    </div>
  )
}