import { useLinkAction } from '@/hooks/useScrollTop';
import Link, { LinkProps } from 'next/link';
import { FC, HTMLProps } from 'react';

export const MyLink: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({ children, ref, ...rest }) => {
  const linkAction = useLinkAction();

  return (
    <Link
      {...rest}
      onClick={(e) => {
        linkAction(e, rest.href);
      }}
    >
      {children}
    </Link>
  )
}
