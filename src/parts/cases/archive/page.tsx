import { HumaLarge } from './huma/large/template';
import { HumaSmall } from './huma/small/template';

enum TEMPLATE {
  SHORT = 'short',
  LARGE = 'large',
}

export type ArchiveCaseProps = {
  slug: string
  template: TEMPLATE
}

export const ArchiveCase = ({ slug, template }: ArchiveCaseProps) => {
  switch (slug) {
    case 'huma':

      switch (template) {
        case TEMPLATE.LARGE:
          return <HumaLarge />
        default:
          return <HumaSmall />
      }

    // case 'beat-metric':
    //   return <HumaSmall />
  }
}