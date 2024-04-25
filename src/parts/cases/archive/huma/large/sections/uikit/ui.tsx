import css from "./ui.module.scss"
import MyImage from '@/components/image/image';
import { IBMPlexSans } from "@/pages/_app";


export const UIKit = () => {


  return (

    <div className={css.ui} >
      <div className={css.title}>
        <h2 className={IBMPlexSans.className}>
          UI Kit & Designs
        </h2>
        <p>
          Our designers created a UI kit to streamline design and development, ensure a consistent user experience, and improve collaboration among teams.
        </p>
      </div>

      <div className={css.image}>
        <MyImage src={`/img/aukit.png`} alt="UI Kit & Designs" width={2710} height={2077} />
      </div>

    </div >


  )
}