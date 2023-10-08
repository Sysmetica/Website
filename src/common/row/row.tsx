import s from './row.module.scss';

export const Row = ({ children }: any) => {
  return (
    <div className={s.root}>
      {children}
    </div>
  )
}