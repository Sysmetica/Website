import css from './caseItem.module.scss';
import MyImage from '@/components/image/image';
import 'swiper/css';
import { IBMPlexSans } from '@/pages/_app';
import { CaseItemProps } from '@/types/casestudies';
import Link from 'next/link';

export const CaseItem = ({ caseItem, long = false }: { caseItem: CaseItemProps, long?: boolean }) => {
  const { title, description, slug, tags, homeImage, archiveImage } = caseItem;

  return (
    <Link
      className={css.item}
      href={`/case-studies/${slug}`}
      title={title}
      data-fade={true}
    >
      <div className={css.image}>
        <div className={css.tags} data-fade data-child>
          {tags.map(({ text }) => <span className={css.tag} key={text}>{text}</span>)}
        </div>
        {long ? (
          <MyImage
            src={archiveImage.data?.attributes.url}
            alt={title}
            width={1140}
            height={560}
            upload={true}
            imgClass={css.long}
          />
        ) : (
          <MyImage
            src={homeImage.data?.attributes.url}
            alt={title}
            width={679}
            height={443}
            upload={true}
            imgClass={css.home}
          />
        )}
      </div>
      <div className={css.textWrap}>
        <h2 className={IBMPlexSans.className}>{title}</h2>
        <p className={long ? css.md : css.sm} >{description}</p>
        {long && <div className={css.icon}></div>}
      </div>
    </Link>
  )
}