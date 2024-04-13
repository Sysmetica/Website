import { TemplateSmall } from './templates/small/TemplateSmall';

type Cases = {
  type?: string
}

export const PageCases = ({ type }: Cases) => {



  switch (type) {
    case "value":
      break;
    default:
      return <TemplateSmall />
  }
}