import clsx from "clsx"
import Link from "next/link"
import s from './menuLink.module.scss';
import { useRouter } from "next/router";

export const MenuLink = ({ children, href, ...rest }: { children: string, href: string }) => {
  const { pathname } = useRouter();

  return (
    <Link
      href={href}
      className={clsx(s.root, {
        [s.active]: pathname === href
      })}
      {...rest}
    >
      {children}
    </Link>
  )
}