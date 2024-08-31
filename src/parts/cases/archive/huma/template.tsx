import { Intro } from './sections/intro/Intro';
import { Role } from './sections/role/Role';
import { Product } from './sections/product/Product';
import { Tools } from './sections/tools/Tools';
import { CaseItemRelation } from '@/types/casestudies';
import { CaseItem } from '@/parts/home/casestudies/caseItem';
import { Row } from '@/common/row/row';

export const HumaTemplate = ({ relation }: { relation: CaseItemRelation }) => {
  return (
    <>
      <Intro />
      <Role />
      <Product />
      <Tools />
      {relation.data && <Row> <CaseItem caseItem={relation.data.attributes} long={true} /> </Row>}
    </>
  )
}