import css from "./design.module.scss"
import { Row } from '@/common/row/row';
import MyImage from '@/components/image/image';
import { IBMPlexSans } from "@/pages/_app";


export const DesignProcess = () => {

  const process = [
    {
      day: "14 days",
      title: "Discovery",
      tags: ["Research", "Product Strategy", "Client Empathy",]
    },
    {
      day: "14 days",
      title: "DESIGN",
      tags: ["Information Architecture Mapping", "Client Empathy", "Usability Testing"]
    },
    {
      day: "30 days",
      title: "Development",
      tags: ["Development", "Testing & Analytics", "Refinement & Delivery"]
    },
  ]

  return (

    <div className={css.design} >
      <div className={css.back}></div>
      <Row>
        <div className={css.wrapp}>
          <div className={css.title}>
            <h2 className={IBMPlexSans.className} data-fade>Design Process</h2>
            <p data-fade>
              Inspired by user feedback and the latest in UI/UX trends, our design process focuses on simplicity, accuracy, and accessibility. By emphasizing intuitive navigation and clear visuals, we ensure that users of all technological backgrounds can easily interact with our app, making heart rate monitoring a straightforward task.            </p>
          </div>
        </div>
      </Row>


      <div className={css.column}>
        <div className={css.grid} data-fade data-child>
          {process.map(proces => (
            <div className={css.row} key={proces.title}>
              <p className={css.day}>{proces.day}</p>
              <p className={`${IBMPlexSans.className} ${css.name}`}>{proces.title}</p>
              <div className={css.tags}>
                {proces.tags.map(tag => <p className={css.tag} key={tag}>{tag}</p>)}
              </div>
            </div>
          ))}
        </div>

        <div className={css.image} data-parallax data-per="20" >
          <MyImage src={`/img/pesign-process.jpg`} alt="Design Process" width={1440} height={1080}/>
        </div>

      </div>
    </div >


  )
}