import { Row } from "@/common/row/row";
import css from "./cases.module.scss"
import { CaseItem } from "@/parts/home/casestudies/caseItem";
import { CaseStudiesProps } from "@/types/casestudies";

export const Cases = ({ cases }: { cases: CaseStudiesProps }) => {
  return (
    <Row>
      <div className={css.cases}>
        {cases.data.map(({ attributes }) =>
          <CaseItem key={attributes.title} caseItem={attributes} long={true} />
        )}
      </div>
    </Row>
  )
}
