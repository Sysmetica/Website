import { IBMPlexSans } from '@/pages/_app';
import s from './career.module.scss';
import MyImage from '@/components/image/image';
import { CareerPageFields } from '@/types/career';
import Link from 'next/link';
import clsx from 'clsx';
import { Row } from '@/common/row/row';

export const CareersList = ({ careers }: { careers: CareerPageFields['attributes']['careers'] }) => {
  return (
    <div className={clsx(s.root, s.career)}>
      <div className={s.items}>
        {careers.data.map(({ attributes: { title, slug, description, level, tags } }) => {
          const firstTag = tags[0];

          return (
            <div className={s.item} key={title}>
              <Link href={`career/${slug}`} className={s.link} />

              <div className={s.content}>
                <MyImage src="/img/icons/career1.svg" alt="text" width={48} height={48} imgClass={s.ico} />
                <h3 className={IBMPlexSans.className}>{title}</h3>
                <p>{level.replace('_', ' ')}</p>
                <div className={s.tags}>
                  <div className={s.tag} >
                    <MyImage src={`/img/icons/${firstTag.icon}.svg`} alt="text" width={24} height={24} />
                    <span>{firstTag.text}</span>
                  </div>
                </div>
              </div>

              <div className={clsx(s.content, s.back)}>
                <MyImage src="/img/icons/career1.svg" alt="text" width={48} height={48} imgClass={s.ico} />
                <h3 className={IBMPlexSans.className}>Submit Your CV</h3>
                <p>Step into your next career opportunity</p>
                <div className={s.tags}>
                  <div className={s.tag}>
                    <MyImage src={`/img/icons/message.svg`} alt="text" width={24} height={24} />
                    <span>We will contact you very soon</span>
                  </div>
                </div>
              </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}