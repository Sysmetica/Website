import { Row } from '@/common/row/row';
import s from '@/components/services/services.module.scss';
import { Button } from '@/components/button/button';
import { IBMPlexSans } from '@/pages/_app';
import { ServicesItems } from '@/components/services/services';

export const Services = () => {

  const textContent = {
    title: `Your Expert Team in Mobile Solutions`,
    subtitle: "Crafting outstanding digital products is a sophisticated process. We are here to navigate you through this complex journey.",
    button: "Explore Our Services"
  }

  return (
    <div className={s.root}>
      <Row>
        <div className={s.wrapper}>

          <div className={s.text_content}>
            <h2 className={IBMPlexSans.className} data-fade>{textContent.title}</h2>

            <div className={s.description} data-fade>
              <p >{textContent.subtitle}</p>
              <div className={`${s.button} ${s.desktop}`} >
                <Button link={'/services'} type={['fill']} >{textContent.button}</Button>
              </div>
            </div>
          </div>

          <div className={s.back} data-fade></div>

          <ServicesItems />

          <div className={`${s.button} ${s.mobile}`} data-fade>
            <Button link={'/services'} type={['fill']} >{textContent.button}</Button>
          </div>

          {/* <div className={s.buttonWrap} data-fade>
            <Button link={'/services'}>{`Our Services`}</Button>
          </div> */}

        </div>
      </Row>
    </div>
  )
}