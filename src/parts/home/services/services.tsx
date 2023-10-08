import { Row } from '@/common/row/row';
import s from './services.module.scss';
import { Button } from '@/components/button/button';
import clsx from 'clsx';
import { IBMPlexSans } from '@/pages/_app';
import MyImage from '@/components/image/image';

export const Services = () => {
  return (
    <div className={s.root}>
      <Row>
        <div className={s.rootWrap}>

          <div className={s.text}>
            <h2 className={IBMPlexSans.className}>Turning ideas into reality</h2>
            <p>Crafting outstanding digital products is a sophisticated process. We are here to navigate you through this complex journey. Trust in our expertise to transform your most ambitious ideas into tangible success</p>
          </div>

          <div className={s.items}>

            <div className={clsx(s.item, s.mob)}>
              <div className={s.icon}>
                <MyImage src="/img/testicon1.svg" alt="test icon" width={48} height={48} />
              </div>
              <div className={s.text}>
                <h3 className={clsx(s.title, IBMPlexSans.className)}>Mobile Development</h3>
                <div className={s.tags}>
                  <span className={s.tag}>Native Development</span>
                  <span className={s.tag}>Compliance</span>
                  <span className={s.tag}>Maintenance & Support</span>
                  <span className={s.tag}>Backend Integration</span>
                  <span className={s.tag}>Security</span>
                </div>
              </div>
            </div>

            <div className={clsx(s.item, s.backend)}>
              <div className={s.icon}>
                <MyImage src="/img/testicon1.svg" alt="test icon" width={48} height={48} />
              </div>
              <div className={s.text}>
                <h3 className={clsx(s.title, IBMPlexSans.className)}>Back-End</h3>
                <div className={s.tags}>
                  <span className={s.tag}>Native Development</span>
                  <span className={s.tag}>Compliance</span>
                  <span className={s.tag}>Maintenance & Support</span>
                  <span className={s.tag}>Backend Integration</span>
                  <span className={s.tag}>Security</span>
                </div>
              </div>
            </div>

            <div className={clsx(s.item, s.qa)}>
              <div className={s.icon}>
                <MyImage src="/img/testicon1.svg" alt="test icon" width={48} height={48} />
              </div>
              <div className={s.text}>
                <h3 className={clsx(s.title, IBMPlexSans.className)}>Manual QA</h3>
                <div className={s.tags}>
                  <span className={s.tag}>Native Development</span>
                  <span className={s.tag}>Compliance</span>
                  <span className={s.tag}>Maintenance & Support</span>
                  <span className={s.tag}>Backend Integration</span>
                  <span className={s.tag}>Security</span>
                </div>
              </div>
            </div>

            <div className={clsx(s.item, s.design)}>
              <div className={s.icon}>
                <MyImage src="/img/testicon1.svg" alt="test icon" width={48} height={48} />
              </div>
              <div className={s.text}>
                <h3 className={clsx(s.title, IBMPlexSans.className)}>Design</h3>
                <div className={s.tags}>
                  <span className={s.tag}>UI/UX Consulting & Setup</span>
                  <span className={s.tag}>Product Redesign & Refinement</span>
                  <span className={s.tag}>Mobile App Design</span>
                  <span className={s.tag}>Custom Web Design & Development</span>
                </div>
              </div>
            </div>

          </div>

          <div className={s.buttonWrap}>
            <Button>Our Services</Button>
          </div>

        </div>
      </Row>
    </div>
  )
}