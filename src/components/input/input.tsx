import { useSetAtom } from 'jotai/react';
import { FC, HTMLProps } from 'react';
import { mouseActionArea } from '../action/action';

export const MyInput: FC<HTMLProps<HTMLInputElement>> = ({ ref, ...rest }) => {
  const setArea = useSetAtom(mouseActionArea);

  return (
    <input
      onMouseOver={() => setArea({ area: 'input' })}
      onMouseOut={() => setArea({ area: 'default' })}
      {...rest}
    />
  )
}
