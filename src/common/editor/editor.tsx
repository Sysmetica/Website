import s from './editor.module.scss';

/**
 * @deprecated The method should not be used
 */

export const Editor = ({ children }: any) => {
  return (
    <div className={s.root}>
      {children}
    </div>
  )
}