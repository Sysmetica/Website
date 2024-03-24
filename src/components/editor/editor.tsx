import { BlocksRenderer, BlocksContent } from "@strapi/blocks-react-renderer";
import s from './editor.module.scss';

export const EditorParser = ({ content }: { content: BlocksContent }) => {
  if (!content) {
    return null;
  }

  return (
    <div className={s.root}>
      <BlocksRenderer
        content={content}
      />
    </div>
  )
}
