import clsx from 'clsx';
import s from './button.module.scss';
import Link from 'next/link';

type ButtonProps = {
  children: string
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
    <Link
      href={link}
      ref={refVal}
      className={clsx(s.root, type.map((k) => s[k]))}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}