import { useAnimation } from '@/hooks/useAnimation';
import { CaseItemRelation } from '@/types/casestudies';
import { BeatMetricTemplate } from './beat-metric/template';
import { HumaTemplate } from './huma/template';

// NOT USED TEMPORARY - layouts are full and large by default
enum TEMPLATE {
  SHORT = 'short',
  LARGE = 'large',
}
// 

export type ArchiveCaseProps = {
  slug: string
  template: TEMPLATE
  caseStudie: CaseItemRelation
}

export const ArchiveCase = ({ slug, template, caseStudie }: ArchiveCaseProps) => {
  useAnimation();

  switch (slug) {
    case 'huma':
      return <HumaTemplate relation={caseStudie} />

    case 'beat-metric':
      return <BeatMetricTemplate relation={caseStudie} />
  }
}