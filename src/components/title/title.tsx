import { IBMPlexSans } from '@/pages/_app';
import s from './title.module.scss';
import { Row } from '@/common/row/row';

type TitleProps = {
  title: string
  subtitle: string
}

export const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div className={s.root}>
      <Row>
        <div className={s.wrap}>
          <h1 className={IBMPlexSans.className}>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </Row>
    </div>
  )
}