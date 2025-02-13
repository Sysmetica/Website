import { IBMPlexSans } from '@/pages/_app';
import css from "./tools.module.scss"
import { Row } from '@/common/row/row';

const tools = [
  {
    title: "Timeline of Tasks",
    subtitle: "Patients are given a timeline outlining the tasks they need to complete and receive timely reminders.",
  },
  {
    title: "Vital Signs",
    subtitle: "Patients can use their phones and integrated devices to capture and monitor health vitals safely and remotely.",
  },
  {
    title: "Questionnaires",
    subtitle: "The app provides validated clinical questionnaires, for example the Oxford Knee Score, EQ-5D, Global Health Score and Promis CAT.",
  },
  {
    title: "Educational Content",
    subtitle: "We support patients with educational content about their symptoms, care and treatment.",
  },
  {
    title: "Connected Devices",
    subtitle: "We offer both manual data entry and connection to a number of medical devices to aid data collection.",
  },
  {
    title: "Telemedicine",
    subtitle: "Patients can receive additional support from their clinical team through secure video and audio consultations.",
  }
]

export const Tools = () => {
  return (
    <div className={css.tools}>
      <Row>
        <div className={css.wrapp}>
          <div className={css.title}>
            <h2 className={IBMPlexSans.className} data-fade>Patient Engagement Tools</h2>
            <p data-fade>
              Explore a mobile app designed to enhance patient engagement through task management, questionnaires, device integration, remote monitoring, educational resources, and telemedicine consultations for comprehensive health management.
            </p>
          </div>
          <div className={css.column}>
            <div className={css.diamond}>
              <div className={css.d}></div>
            </div>
            <div className={css.stroke}></div>
            <div className={css.grid}>
              {tools.map(tool =>
                <div className={css.row} key={tool.title} data-fade>
                  <p className={css.t}>{tool.title}</p>
                  <p className={css.s}>{tool.subtitle}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Row>
    </div>
  )
}