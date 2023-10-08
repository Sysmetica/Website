import s from './editor.module.scss';

export const Editor = ({ children }: any) => {
  return (
    <div className={s.root}>
      {children}
    </div>
  )
}