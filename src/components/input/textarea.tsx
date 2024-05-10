import { useSetAtom } from 'jotai/react';
import { FC, HTMLProps } from 'react';
import { mouseActionArea } from '../action/action';

export const MyTextarea: FC<HTMLProps<HTMLTextAreaElement>> = ({ ref, ...rest }) => {
  const setArea = useSetAtom(mouseActionArea);

  return (
    <textarea
      onMouseOver={() => setArea({ area: 'input' })}
      onMouseOut={() => setArea({ area: 'default' })}
      {...rest}
    />
  )
}
