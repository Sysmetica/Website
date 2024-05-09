import { useSetAtom } from 'jotai/react';
import Link, { LinkProps } from 'next/link';
import { FC, HTMLProps } from 'react';
import { mouseActionArea } from '../action/action';

export const MyLink: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({ children, ref, ...rest }) => {
  const setArea = useSetAtom(mouseActionArea);

  return (
    <Link
      onMouseOver={() => setArea({ area: 'link' })}
      onMouseOut={() => setArea({ area: 'default' })}
      {...rest}
    >
      {children}
    </Link>
  )
}
