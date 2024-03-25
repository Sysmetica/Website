import MyImage from "@/components/image/image";
import s from './team.module.scss';
import { Row } from "@/common/row/row";
import Link from "next/link";
import { IBMPlexSans } from "@/pages/_app";
import { TeamsProps } from "@/types/about";

type TeamProps = {
  teams: TeamsProps
}

export const Team = ({ teams }: TeamProps) => {
  if (!teams.data.length) {
    return null;
  }

  return (
    <div className={s.root} id="team">
      <Row>
        <div className={s.teams}>
          {teams.data.map(({ attributes: { name, photo, role, description, linkedin } }) => {
            return (
              <div className={s.item} key={name}>
                <div className={s.image}>
                  <MyImage src={photo.data.attributes.url} alt={name} width={364} height={418} retina={2} upload={true} />
                  <Link href={linkedin} className={s.linkedin} target="_blank">
                    <MyImage src="/img/icons/linkedin.svg" alt="linkedin icon" width={24} height={32} />
                  </Link>
                  {description && (
                    <div className={s.description}>
                      <div className={s.text}>
                        <MyImage src="/img/icons/quote.svg" alt="quote icon" width={32} height={32} />
                        <p>{description}</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className={s.name}>
                  <p className={IBMPlexSans.className}>{name}</p>
                  <span>{role}</span>
                </div>
              </div>
            )
          })}
        </div>
      </Row>
    </div>
  )
}