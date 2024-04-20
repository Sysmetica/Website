import { Intro } from './sections/intro/Intro';
import { Product } from './sections/product/Product';
import { Case } from './sections/case/Case';
import { BeatMetric } from './sections/beat/beat';
import { DesignProcess } from './sections/design/design';
import { UIKit } from './sections/uikit/ui';


export const TemplateLarge = () => {

  return (
    <>
      <Intro />
      <BeatMetric />
      <Product />
      <DesignProcess />
      <UIKit />
      <Case />
    </>

  )
}