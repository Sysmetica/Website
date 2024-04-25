import { Intro } from './sections/intro/Intro';
import { Product } from './sections/product/Product';
import { Case } from './sections/case/Case';
import { BeatMetric } from './sections/beat/beat';
import { DesignProcess } from './sections/design/design';
import { UIKit } from './sections/uikit/ui';
import { Wireframes } from './sections/wireframes/wireframes';
import { Modes } from './sections/modes/modes';
import { Users } from './sections/users/users';

export const HumaLarge = () => {
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
      <Case />
    </>
  )
}