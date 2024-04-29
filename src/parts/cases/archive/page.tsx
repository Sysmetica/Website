import { useAnimation } from '@/hooks/useAnimation';
import { HumaLarge } from './huma/large/template';
import { HumaSmall } from './huma/small/template';
import { CaseItemProps, CaseItemRelation } from '@/types/casestudies';

enum TEMPLATE {
  SHORT = 'short',
  LARGE = 'large',
}

export type ArchiveCaseProps = {
  slug: string
  template: TEMPLATE
  caseStudie: CaseItemRelation
}

export const ArchiveCase = ({ slug, template, caseStudie }: ArchiveCaseProps) => {
  useAnimation();

  switch (slug) {
    case 'huma':

      switch (template) {
        case TEMPLATE.LARGE:
          return <HumaLarge relation={caseStudie} />
        default:
          return <HumaSmall relation={caseStudie} />
      }

    // case 'beat-metric':
    //   return <HumaSmall />
  }
}