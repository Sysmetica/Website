import { Row } from '@/common/row/row';
import css from './reviews.module.scss';
import { IBMPlexSans } from '@/pages/_app';
import clsx from 'clsx';
import MyImage from '@/components/image/image';
import { ReviewsProps } from '@/types/review';

const data = {
  title: 'What Our<br />Clients Say',
  top_info: [
    {
      title: '44+ projects',
      tags: [
        {
          icon: '/img/icons/tag1.svg',
          text: '100% Job Success'
        },
        {
          icon: '/img/icons/tag2.svg',
          text: 'Top rated plus'
        }
      ],
      description: 'completed on',
      logo: '/img/logo-upwork.svg',
      link: 'https://www.upwork.com/agencies/sysmetica'
    },
    {
      title: 'More',
      stars: 5.0,
      description: 'reviews on',
      logo: '/img/logo-clutch.svg',
      link: 'https://clutch.co/profile/sysmetica'
    }
  ]
}

const Stars = ({ className, stars }: {
  className?: string,
  stars: number
}) => {
  return (
    <div className={clsx(css.data_stars, className)}>
      <div
        className={css.stars}
        style={{ '--stars': stars } as React.CSSProperties}
      />
      <div className={css.txt}>
        {stars}
      </div>
    </div>
  )
}

export const ClientReviews = ({ reviews }: { reviews: ReviewsProps }) => {
  return (
    <div className={css.root}>
      <Row>
        <div className={css.wrapper} >
          <div className={css.wrapper_title} data-fade>
            <h2 className={IBMPlexSans.className} dangerouslySetInnerHTML={{ __html: data.title }}></h2>
            <div className={css.wrapper_info}>
              {data.top_info.map((item) => (
                <a href={item.link} key={item.link} className={css.info} target='_blank'>
                  <div className={css.top}>
                    <div className={css.tags}>
                      {item.tags?.map((tag) => (
                        <span key={tag.text} className={css.tag}>
                          <MyImage src={tag.icon} alt={tag.text} width={20} height={20} />
                          <span>{tag.text}</span>
                        </span>
                      ))}
                      {item.stars && <Stars className={css.border} stars={item.stars} />}
                      <div className={css.icon} />
                    </div>
                    <div className={css.arrow}></div>
                  </div>
                  <p className={css.title}>{item.title}</p>
                  <div className={css.description}>
                    <p>{item.description}</p>
                    <MyImage src={item.logo} alt="Upwork" width={85} height={24} />
                  </div>
                </a>
              ))}
            </div>
          </div>
          {!!reviews.data.length && (
            <div className={css.wrapper_grid}>
              {reviews.data.map((item) => {
                const { attributes: { company, link, position, rating, review } } = item;
                return (
                  <a href={item.attributes.link} key={company} className={css.item} target='_blank'>
                    <div className={css.top}>
                      <p className={clsx(IBMPlexSans.className, css.title)}>{company}</p>
                      <p className={clsx(css.subtitle)}>{position}</p>
                    </div>
                    <div className={css.line}>
                    </div>
                    <p className={clsx(css.text)}>
                      {review}
                    </p>
                    <div className={css.bottom}>
                      <MyImage src="/img/logo-clutch-dark.svg" width={20} height={24} />
                      <div className={css.info}>
                        <Stars stars={rating} />
                        <div className={css.arrow}></div>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </Row>
    </div>
  )
};
