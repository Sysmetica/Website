import MyImage from '@/components/image/image';
import s from './process.module.scss';
import clsx from 'clsx';
import { IBMPlexSans } from '@/pages/_app';

export const Process = () => {
  return (
    <div className={s.root}>

      <div className={s.line} />

      <div className={clsx(s.step, s.step1)}>
        <MyImage src="/img/icons/services/eye.svg" alt="" width={48} height={48} />
        <h3>{`Initializing the Problem Vision`}</h3>
      </div>

      <div className={s.items}>
        <MyImage src="/img/icons/services/diamond-bg-1.svg" alt="" width={500} height={648} imgClass={s.bg} />

        <div className={s.item}>
          <div className={s.text}>
            <div className={s.wrap}>
              <span className={IBMPlexSans.className}>{`Discover`}</span>
              <h3 className={IBMPlexSans.className}>{`Explore 'Why' & 'How'`}</h3>
              <p>{`We craft insightful product strategies through immersive research, user empathy, and a profound understanding of issues and client needs.`}</p>
            </div>
          </div>
          <div className={s.list}>
            <div><span>{`Research`}</span></div>
            <div><span>{`Client Empathy`}</span></div>
            <div><span>{`Product Strategy`}</span></div>
          </div>
        </div>

        <div className={s.item}>
          <div className={s.text}>
            <div className={s.wrap}>
              <span className={IBMPlexSans.className}>{`Define`}</span>
              <h3 className={IBMPlexSans.className}>{`Innovate, Prototype, Enhance`}</h3>
              <p>{`Streamlining our focus by crafting ideas, visualizing through prototyping, and diligently refining concepts to enhance user experience and interactions with products.`}</p>
            </div>
          </div>
          <div className={s.list}>
            <div><span>{`Ideation`}</span></div>
            <div><span>{`Prototyping`}</span></div>
            <div><span>{`Experience Strategy`}</span></div>
          </div>
        </div>

      </div>

      <div className={clsx(s.step, s.step2)}>
        <MyImage src="/img/icons/services/lightbulb.svg" alt="" width={48} height={48} />
        <h3>{`Problem Definition & Planning`}</h3>
        <p>{`Roadmap & Map of Product Evolution`}</p>
      </div>

      <div className={s.items}>
        <MyImage src="/img/icons/services/diamond-bg-2.svg" alt="" width={500} height={648} imgClass={s.bg} />

        <div className={s.item}>
          <div className={s.text}>
            <div className={s.wrap}>
              <span className={IBMPlexSans.className}>{`Design & Develop`}</span>
              <h3 className={IBMPlexSans.className}>{`Conception to Realization`}</h3>
              <p>{`Navigating through the stages of design, we diligently develop and test potential solutions, ensuring innovative and functional outcomes for user-centric products and services.`}</p>
            </div>
          </div>
          <div className={s.list}>
            <div><span>{`Information Architecture Mapping`}</span></div>
            <div><span>{`Designing & Prototyping`}</span></div>
            <div><span>{`Usability Testing`}</span></div>
          </div>
        </div>

        <div className={clsx(s.item, s.last)}>
          <div className={s.text}>
            <div className={s.wrap}>
              <span className={IBMPlexSans.className}>{`Deliver`}</span>
              <h3 className={IBMPlexSans.className}>{`Implementation & Feedback`}</h3>
              <p>{`We implement and measure solutions, delivering with attentiveness and refining based on received feedback, ensuring effectiveness and user satisfaction.`}</p>
            </div>
          </div>
          <div className={s.list}>
            <div><span>{`Development`}</span></div>
            <div><span>{`Testing & Analytics`}</span></div>
            <div><span>{`Refinement & Delivery`}</span></div>
          </div>
        </div>

      </div>

      <div className={clsx(s.step, s.step3)}>
        <MyImage src="/img/icons/services/rocket.svg" alt="" width={48} height={48} />
        <h3>{`Launching the Solution`}</h3>
      </div>

      <div className={s.space}>
        <MyImage src="/img/icons/services/diamond.png" alt="" width={124} height={160} />
        <MyImage src="/img/icons/services/diamond.png" alt="" width={124} height={160} />
      </div>

      <div className={clsx(s.step, s.step4)}>
        <MyImage src="/img/icons/services/refresh-cw.svg" alt="" width={48} height={48} />
        <h3>{`Iteration & Support`}</h3>
        <p>{`We continuously refine the products to meet the evolving demands of users and businesses`}</p>
      </div>

    </div>
  )
}