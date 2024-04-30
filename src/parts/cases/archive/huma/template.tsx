import { Intro } from './sections/intro/Intro';
import { Role } from './sections/role/Role';
import { Product } from './sections/product/Product';
import { Tools } from './sections/tools/Tools';
import { CaseItemRelation } from '@/types/casestudies';
import { CaseItem } from '@/parts/home/casestudies/caseItem';

export const HumaTemplate = ({ relation }: { relation: CaseItemRelation }) => {
  return (
    <>
      <Intro />
      <Role />
      <Product />
      <Tools />
      {relation.data && <CaseItem caseItem={relation.data.attributes} />}
    </>
  )
}