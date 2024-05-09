import { Row } from '@/common/row/row';
import s from './info.module.scss';
import MyImage from '@/components/image/image';
import clsx from 'clsx';
import { useAtomValue, useSetAtom } from 'jotai';
import { mouseActionArea } from '@/components/action/action';
import { isMobileDevice } from '@/state';
import { InfoProps, InfoTeam } from '@/types/home';
import { useContext } from 'react';
import { OptionsContext } from '@/common/layout/layout';
import { MyButton } from '@/components/link/button';

type InfoStepProps = {
  team: InfoTeam
  info: InfoProps
}

export const InfoStep = ({ team, info }: InfoStepProps) => {
  const isMob = useAtomValue(isMobileDevice);

  const { attributes: { theme } } = useContext(OptionsContext);

  if (!info) {
    return null;
  }

  return (
    <div className={clsx(s.root, {
      [s.mobile]: isMob
    })}>
      <Row>
        <div className={s.blocks}>

          <div className={clsx(s.info, s.block)} data-fade>
            <MyButton href={info.sectionOneLink} target='_black' className={s.link} />
            <div className={s.tags}>
              <span className={s.tag}>
                <MyImage src="/img/icons/tag1.svg" alt="100% Job Success" width={20} height={20} />
                {`100% Job Success`}
              </span>
              <span className={s.tag}>
                <MyImage src="/img/icons/tag2.svg" alt="Top rated plus" width={20} height={20} />
                {`Top rated plus`}
              </span>
              <div className={s.icon} />
            </div>
            <div className={s.text}>
              <h3>{info.sectionOneTitle}</h3>
              <p>{info.sectionOneText}</p>
            </div>
          </div>

          <div className={clsx(s.team, s.block)} data-fade>
            <MyButton href={info.sectionTwoLink} className={s.link} />
            {theme === 'dark' ? (
              <div className={s.photos}>
                {team.data.map(({ attributes: { preview } }, index) => {
                  return (
                    <MyImage src={preview.data?.attributes.url} alt="" width={48} height={48} key={index} retina={2} upload={true} />
                  )
                })}
                <div className={s.icon} />
              </div>
            ) : (
              <div className={s.tags}>
                <span className={s.tag}>
                  {`We enhance business success`}
                </span>
                <div className={s.icon} />
              </div>
            )}

            <div className={s.text}>
              <h3>{info.sectionTwoTitle}</h3>
              <p>{info.sectionTwoText}</p>
            </div>
          </div>

        </div>
      </Row>
    </div>
  )
}