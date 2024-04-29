import css from "./cases.module.scss"
import { CaseItem } from "@/parts/home/casestudies/caseItem";
import { CaseStudiesProps } from "@/types/casestudies";

export const Cases = ({ cases }: { cases: CaseStudiesProps }) => {
  return (
    <div className={css.cases}>
      {cases.data.map(({ attributes }) => {
        return (
          <div key={attributes.title} className={css.root}>
            <CaseItem caseItem={attributes} />
          </div>
        )
      })}
    </div>
  )
}
