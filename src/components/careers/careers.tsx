import { IBMPlexSans } from '@/pages/_app';
import s from './career.module.scss';
import MyImage from '@/components/image/image';
import { CareerPageFields } from '@/types/career';
import clsx from 'clsx';
import { mouseActionArea } from '../action/action';
import { useAtom, useSetAtom } from 'jotai';
import { csModal } from '@/state';
import CvForm from '@/components/cv/cv';
import { MyButton } from '../link/button';

type CareersListProps = {
  careers: CareerPageFields['attributes']['careers']
  type?: 'buttonPlus'
}

export const CareersList = ({ careers, type }: CareersListProps) => {
  const setArea = useSetAtom(mouseActionArea);
  const [modal, setModal] = useAtom(csModal);

  const modalHandler = (e: any) => {
    e.preventDefault();
    setModal(true);
    document.body.style.overflow = 'hidden';
  }

  return (
    <>
      <div className={s.root}>
        <div className={s.items} data-fade data-child>

          {careers.data.map(({ attributes: { title, slug, level, tags, icon } }) => {
            const firstTag = tags[0];
            return (
              <div className={s.item} key={title}>
                <MyButton href={`career/${slug}`} className={s.link} />
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
              onClick={modalHandler}
              onMouseOver={() => setArea({ area: 'button' })}
              onMouseOut={() => setArea({ area: 'default' })}
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