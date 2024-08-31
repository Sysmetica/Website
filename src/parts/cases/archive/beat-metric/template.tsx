import { Intro } from './sections/intro/Intro';
import { Product } from './sections/product/Product';
import { BeatMetric } from './sections/beat/beat';
import { DesignProcess } from './sections/design/design';
import { UIKit } from './sections/uikit/ui';
import { Wireframes } from './sections/wireframes/wireframes';
import { Modes } from './sections/modes/modes';
import { Users } from './sections/users/users';
import { CaseItemRelation } from '@/types/casestudies';
import { CaseItem } from '@/parts/home/casestudies/caseItem';
import { Row } from '@/common/row/row';

export const BeatMetricTemplate = ({ relation }: { relation: CaseItemRelation }) => {
  return (
    <>
      <Intro />
      <BeatMetric />
      <Product />
      <DesignProcess />
      <Users />
      <Wireframes />
      <UIKit />
      <Modes />
      {relation.data && <Row> <CaseItem caseItem={relation.data.attributes} long={true} /> </Row>}
    </>
  )
}