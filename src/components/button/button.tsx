import clsx from 'clsx';
import s from './button.module.scss';
import { MyButton } from '../link/button';
import { useSetAtom } from 'jotai/react';
import { mouseActionArea } from '../action/action';

type ButtonProps = {
  children: string | any
  link?: string
  refVal?: any
  type?: string[]
  onClick?: (a: any) => void
  stat?: boolean
}

export const Button = ({ children, link = "#", refVal, type = [], onClick, stat }: ButtonProps) => {
  const setArea = useSetAtom(mouseActionArea);

  if (stat) {
    return (
      <button
        ref={refVal}
        className={clsx(s.root, type.map((k) => s[k]))}
        onClick={onClick}
        onMouseOver={() => setArea({ area: 'button' })}
        onMouseOut={() => setArea({ area: 'default' })}
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