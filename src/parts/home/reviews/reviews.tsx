import { Row } from '@/common/row/row';
import css from './reviews.module.scss';
import { IBMPlexSans } from '@/pages/_app';
import clsx from 'clsx';
import LineIcon from '../../../../public/img/str-line.svg';
import MyImage from '@/components/image/image';

const data = {
  title: 'What Our <br /> Clients Say',

  top_info: [
    {
      title: '44+ projects',
      tags: [
        { icon: '/img/icons/tag1.svg', text: '100% Job Success' },
        { icon: '/img/icons/tag2.svg', text: 'Top rated plus' }
      ],
      description: 'completed on',
      logo: '/img/logo-upwork.svg',
      link: '/'
    },
    {
      title: 'More',
      stars: '5.0',
      description: 'reviews on',
      logo: '/img/logo-clutch.svg',
      link: '/'
    }
  ]
}

const reviews = [
  {
    name: 'Huma',
    position: 'Department Head',
    text: 'Sysmetica LLC has successfully delivered numerous projects for the client. The team consistently delivers on time and is willing to work overtime to meet deadlines. Sysmetica LLC\'s engineers are highly skilled and creative with a remarkable ability to quickly find solutions to complex problems.',
    logo: '/img/logo-clutch-dark.svg',
    stars: '3.0',
    link: '/'
  },
  {
    name: 'Airwave',
    position: 'Executive',
    text: 'Sysmetica LLC has successfully delivered numerous projects for the client. The team consistently delivers on time and is willing to work overtime to meet deadlines. Sysmetica LLC\'s engineers are highly skilled and creative with a remarkable ability to quickly find solutions to complex problems.',
    logo: '/img/logo-clutch-dark.svg',
    stars: '4.5',
    link: '/'
  },
  {
    name: 'GameSchool',
    position: 'CEO',
    text: 'Sysmetica LLC has successfully delivered numerous projects for the client. The team consistently delivers on time and is willing to work overtime to meet deadlines. Sysmetica LLC\'s engineers are highly skilled and creative with a remarkable ability to quickly find solutions to complex problems.',
    logo: '/img/logo-clutch-dark.svg',
    stars: '5.0',
    link: '/'
  },
]

const Stars = ({ className, stars }: {
  className?: string,
  stars: string
}) => {


  return (
    <div className={clsx(css.data_stars, className)}>
      <div className={css.stars}
        style={{ '--stars': Number(stars) } as React.CSSProperties}
      ></div>
      <div className={css.txt}>
        {stars}
      </div>
    </div>
  )
}

export const ClientReviews = () => {

  return (
    <div className={css.root}>
      <Row>
        <div className={css.wrapper} >
          <div className={css.wrapper_title} data-fade>
            <h2 className={IBMPlexSans.className} dangerouslySetInnerHTML={{ __html: data.title }}></h2>
            <div className={css.wrapper_info}>
              {
                data.top_info.map((item, index) => (
                  <a href={item.link} key={index} className={css.info}>
                    <div className={css.top}>
                      <div className={css.tags}>
                        {
                          item.tags?.map((tag, index) => (
                            <span key={index} className={css.tag}>
                              <MyImage src={tag.icon} alt={tag.text} width={20} height={20} />
                              <span>{tag.text}</span>
                            </span>
                          ))
                        }
                        {
                          item.stars && <Stars className={css.border} stars={item.stars} />
                        }
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
                ))
              }
            </div>
          </div>
          <div className={css.wrapper_grid}>
            {
              reviews.map((item, index) => (
                <a href={item.link} key={index} className={css.item}>
                  <div className={css.top}>
                    <p className={clsx(IBMPlexSans.className, css.title)}>{item.name}</p>
                    <p className={clsx(css.subtitle)}>{item.position}</p>
                  </div>
                  <div className={css.line}>
                  </div>
                  <p className={clsx(css.text)}>
                    {item.text}
                  </p>
                  <div className={css.bottom}>
                    <MyImage src={item.logo} width={20} height={24} />
                    <div className={css.info}>
                      <Stars stars={item.stars} />
                      <div className={css.arrow}></div>
                    </div>
                  </div>
                </a>
              ))
            }

          </div>
        </div>
      </Row>
    </div>
  )
}