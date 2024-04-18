import { TemplateLarge } from './templates/large/template';
import { TemplateSmall } from './templates/small/template';

type Cases = {
  type?: "large" | undefined
}

export const ArchiveCase = ({ type }: Cases) => {
  switch (type) {
    case "large":
      return <TemplateLarge />
    default:
      return <TemplateSmall />
  }
}