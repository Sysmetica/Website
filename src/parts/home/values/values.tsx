import { Row } from '@/common/row/row';
import s from './values.module.scss';
import { IBMPlexSans } from '@/pages/_app';
import MyImage from '@/components/image/image';
import { HomeValues } from '@/types/home';

type ValuesProps = {
  values: HomeValues[]
}

export const Values = ({ values }: ValuesProps) => {
  return (
    <div className={s.root}>
      <Row>

        <div className={s.textWrap}>
          <div className={s.text}>
            <h2 className={IBMPlexSans.className}>The values behind our company</h2>
          </div>
        </div>

        <div className={s.items}>
          {values.map((value) => {
            return (
              <div className={s.item} key={value.title}>
                <MyImage src="/img/icons/value1.svg" alt="text" width={48} height={48} />
                <h3 className={IBMPlexSans.className}>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            )
          })}
        </div>

      </Row>
    </div>
  )
}