import { useLinkAction } from '@/hooks/useScrollTop';
import Link, { LinkProps } from 'next/link';
import { FC, HTMLProps } from 'react';

export const MyButton: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({ children, ref, onClick, ...rest }) => {
  const linkAction = useLinkAction();

  return (
    <Link
      onClick={(e) => {
        onClick;
        linkAction(e, rest.href);
      }}
      {...rest}
    >
      {children}
    </Link>
  )
}
