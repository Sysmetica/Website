import { IBMPlexSans } from '@/pages/_app';
import s from './title.module.scss';
import { Row } from '@/common/row/row';
import clsx from 'clsx';

type TitleProps = {
  title: string
  subtitle: string
  type?: 'center' | ''
}

export const Title = ({ title, subtitle, type = '' }: TitleProps) => {
  if (!title && !subtitle) {
    return null;
  }

  return (
    <div className={s.root}>
      <Row>
        <div className={clsx(s.wrap, {
          [s.center]: type === 'center',
        })}>
          <h1 className={IBMPlexSans.className}>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </Row>
    </div>
  )
}