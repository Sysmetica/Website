import { TemplateMedium } from './templates/medium/TemplateMedium';
import { TemplateSmall } from './templates/small/TemplateSmall';

type Cases = {
  type?: "medium" | "large" | undefined
}

export const PageCases = ({ type }: Cases) => {



  switch (type) {
    case "medium":
      return <TemplateMedium />
    default:
      return <TemplateSmall />
  }
}