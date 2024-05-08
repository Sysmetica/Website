import { Row } from "@/common/row/row";
import s from './offer.module.scss';
import { IBMPlexSans } from "@/pages/_app";
import MyImage from "@/components/image/image";
import { CareerPageFields } from "@/types/career";

export const Offer = ({ offer }: { offer: CareerPageFields['attributes']['offer'] }) => {
  return (
    <div className={s.root}>
      <Row>
        <div className={s.rootWrap}>

          <div className={s.itemsWrap}>
            <h2 className={IBMPlexSans.className} data-fade>We Offer</h2>
            <div className={s.items} data-fade data-child>
              {offer.map(({ text, title }, index) => {
                return (
                  <div className={s.item} key={text}>
                    <MyImage src={`/img/icons/offer/${index + 1}.svg`} alt={text} width={48} height={48} />
                    <h4 className={IBMPlexSans.className}>{title}</h4>
                    <p>{text}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className={s.image} data-fade>
            <MyImage src="/img/offer.jpg" alt="Offer image" width={364} height={500} retina={2} />
          </div>

        </div>
      </Row>
    </div>
  )
}