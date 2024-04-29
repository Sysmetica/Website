import { Intro } from './sections/intro/Intro';
import { Role } from './sections/role/Role';
import { Product } from './sections/product/Product';
import { Tools } from './sections/tools/Tools';
import { Case } from './sections/case/Case';
import { CaseItemRelation } from '@/types/casestudies';

export const HumaSmall = ({ relation }: { relation: CaseItemRelation }) => {
  return (
    <>
      <Intro />
      <Role />
      <Product />
      <Tools />
      {relation.data && <Case />}
    </>
  )
}