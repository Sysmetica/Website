import { Row } from '@/common/row/row';
import s from './info.module.scss';
import MyImage from '@/components/image/image';
import clsx from 'clsx';
import { useAtomValue, useSetAtom } from 'jotai';
import { mouseActionArea } from '@/components/action/action';
import { isMobileDevice } from '@/state';

export const InfoStep = () => {
  const setArea = useSetAtom(mouseActionArea);
  const isMob = useAtomValue(isMobileDevice);

  return (
    <div className={clsx(s.root, {
      [s.mobile]: isMob
    })}>
      <Row>
        <div className={s.blocks}>

          <div
            className={clsx(s.info, s.block)}
            onMouseOver={() => setArea({ area: 'open' })}
            onMouseOut={() => setArea({ area: 'default' })}
          >
            <div className={s.tags}>
              <span className={s.tag}>
                <MyImage src="/img/icons/tag1.svg" alt="tag icon" width={20} height={20} />
                100% Job Success
              </span>
              <span className={s.tag}>
                <MyImage src="/img/icons/tag2.svg" alt="tag icon" width={20} height={20} />
                Top rated plus
              </span>
              <div className={s.icon} />
            </div>
            <div className={s.text}>
              <h3>{`Upwork top rated plus agency`}</h3>
              <p>{`Our combination of experience, dedication, and a solid track record guarantees that your project is handled by experts.`}</p>
            </div>
          </div>

          <div
            className={clsx(s.team, s.block)}
            onMouseOver={() => setArea({ area: 'open' })}
            onMouseOut={() => setArea({ area: 'default' })}
          >
            <div className={s.photos}>
              <MyImage src="/img/test1.png" alt="team member photo" width={48} height={48} />
              <MyImage src="/img/test1.png" alt="team member photo" width={48} height={48} />
              <MyImage src="/img/test1.png" alt="team member photo" width={48} height={48} />
              <MyImage src="/img/test1.png" alt="team member photo" width={48} height={48} />
              <div className={s.icon} />
            </div>
            <div className={s.text}>
              <h3>Meet our leadership team</h3>
              <p>Together, we work towards success, inspired by the vision and dedication of those steering</p>
            </div>
          </div>

        </div>
      </Row>
    </div>
  )
}