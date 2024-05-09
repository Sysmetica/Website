import clsx from "clsx"
import s from './menuLink.module.scss';
import { useRouter } from "next/router";
import { MyLink } from "@/components/link/link";

export const MenuLink = ({ children, href, ...rest }: { children: string, href: string }) => {
  const { pathname } = useRouter();

  return (
    <MyLink
      href={href}
      className={clsx(s.root, {
        [s.active]: pathname === href
      })}
      {...rest}
    >
      {children}
    </MyLink>
  )
}