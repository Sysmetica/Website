import { TemplateLarge } from './templates/large/template';
import { TemplateSmall } from './templates/small/template';

type ArchiveCaseProps = {
  template: string
}

export const ArchiveCase = ({ template }: ArchiveCaseProps) => {
  switch (template) {
    case 'huma':
      return <TemplateLarge />
  }
}