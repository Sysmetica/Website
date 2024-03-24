import { IBMPlexSans } from '@/pages/_app';
import s from './career.module.scss';
import MyImage from '@/components/image/image';
import { CareerPageFields } from '@/types/career';
import Link from 'next/link';
import clsx from 'clsx';
import { mouseActionArea } from '../action/action';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { csModal, isMobileDevice } from '@/state';
import CvForm from '@/components/cv/cv';

type CareersListProps = {
  careers: CareerPageFields['attributes']['careers']
  type?: 'buttonPlus'
}

export const CareersList = ({ careers, type }: CareersListProps) => {
  const setArea = useSetAtom(mouseActionArea);
  const isMob = useAtomValue(isMobileDevice);
  const [modal, setModal] = useAtom(csModal);

  const modalHandler = (e: any) => {
    e.preventDefault();
    setModal(true);
    document.body.style.overflow = 'hidden';
  }

  return (
    <>
      <div className={clsx(s.root, s.career, {
        [s.mobile]: isMob
      })}>
        <div className={s.items}>

          {careers.data.map(({ attributes: { title, slug, level, tags, icon } }) => {
            const firstTag = tags[0];
            return (
              <div
                className={s.item}
                key={title}
                onMouseOver={() => setArea({ area: 'submit' })}
                onMouseOut={() => setArea({ area: 'default' })}
              >
                <Link href={`career/${slug}`} className={s.link} />
                <div className={s.content}>
                  <div className={s.icon} />
                  <MyImage src={`/img/icons/careers/${icon}.svg`} alt="text" width={48} height={48} imgClass={s.ico} />
                  <h3 className={IBMPlexSans.className}>{title}</h3>
                  <p>{level.replace('_', ' ')}</p>
                  <div className={s.tags}>
                    <div className={s.tag} >
                      <MyImage src={`/img/icons/${firstTag.icon}.svg`} alt="text" width={24} height={24} />
                      <span>{firstTag.text}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

          {type === 'buttonPlus' && (
            <div
              className={s.item}
              onMouseOver={() => setArea({ area: 'submit' })}
              onMouseOut={() => setArea({ area: 'default' })}
              onClick={modalHandler}
            >
              <div className={clsx(s.content, s.button)}>
                <div className={s.icon} />
                <MyImage src="/img/icons/submit.svg" alt="text" width={48} height={48} imgClass={s.ico} />
                <h3 className={IBMPlexSans.className}>Submit Your CV</h3>
                <p>{`Step into your next career opportunity`}</p>
                <div className={s.tags}>
                  <div className={s.tag}>
                    <MyImage src={`/img/icons/message.svg`} alt="text" width={24} height={24} />
                    <span>{`We will contact you very soon`}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
      {modal && <CvForm svList={careers.data} />}
    </>
  )
}