import { CareersList } from "@/components/careers/careers";
import { CareerPageFields } from "@/types/career";
import s from './list.module.scss';
import { Row } from "@/common/row/row";

export const Careers = ({ careers }: { careers: CareerPageFields['attributes']['careers'] }) => {
  return (
    <div className={s.root}>
      <Row>
        <CareersList careers={careers} />
      </Row>
    </div>
  )
}