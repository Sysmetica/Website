import { CareersList } from "@/components/careers/careers";
import { CareerPageFields } from "@/types/career";
import s from './list.module.scss';
import { Row } from "@/common/row/row";
import { OptionsProps } from "@/types/options";

type CareersProps = {
  careers: CareerPageFields['attributes']['careers']
}

export const Careers = ({ careers }: CareersProps) => {
  return (
    <div className={s.root}>
      <Row>
        <CareersList careers={careers} type="buttonPlus" />
      </Row>
    </div>
  )
}