import clsx from 'clsx';
import s from './button.module.scss';
import { MyButton } from '../link/button';

type ButtonProps = {
  children: string | any
  link?: string
  refVal?: any
  type?: string[]
  onClick?: (a: any) => void
  stat?: boolean
}

export const Button = ({ children, link = "#", refVal, type = [], onClick, stat }: ButtonProps) => {
  if (stat) {
    return (
      <button
        ref={refVal}
        className={clsx(s.root, type.map((k) => s[k]))}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }

  return (
    <MyButton
      href={link}
      ref={refVal}
      className={clsx(s.root, type.map((k) => s[k]))}
      onClick={onClick}
    >
      {children}
    </MyButton>
  )
}