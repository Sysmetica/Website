import css from './caseItem.module.scss';
import MyImage from '@/components/image/image';
import 'swiper/css';
import { IBMPlexSans } from '@/pages/_app';
import { CaseItemProps } from '@/types/casestudies';
import Link from 'next/link';

export const CaseItem = ({ caseItem, long = false }: { caseItem: CaseItemProps, long?: boolean }) => {

  const { title, description, slug, tags, } = caseItem;

  let imgURL = caseItem.desktop.data?.attributes.url;

  // THIS IS TEMP JPGS
  if (title.includes("Huma")) imgURL = '/img/temp_service_1.jpg';
  if (title.includes("Beat Metric")) imgURL = '/img/temp_service_2.jpg';



  return (
    <Link className={css.item} href={`/case-studies/${slug}`} title={title} data-fade={true} >
      <div className={css.image} >
        <div className={css.tags} data-fade data-child>
          {tags.map(({ text }) => <span className={css.tag} key={text}>{text}</span>)}
        </div>
        <MyImage src={imgURL} alt={title} width={1140} height={560} />
      </div>
      <div className={css.textWrap}>
        <h2 className={IBMPlexSans.className}>{title}</h2>
        <p className={long ? css.md : css.sm} >{description}</p>

        {long && <div className={css.icon}></div>}
      </div>

    </Link>
  )
}