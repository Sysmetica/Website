import { FC, HTMLProps } from 'react';

export const MyTextarea: FC<HTMLProps<HTMLTextAreaElement>> = ({ ref, ...rest }) => {
  return (
    <textarea {...rest} />
  )
}
