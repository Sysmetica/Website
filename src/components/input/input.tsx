import { FC, HTMLProps } from 'react';

export const MyInput: FC<HTMLProps<HTMLInputElement>> = ({ ref, ...rest }) => {
  return (
    <input {...rest} />
  )
}
