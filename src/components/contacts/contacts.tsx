import { Button } from "@/components/button/button";
import s from './contacts.module.scss';
import { Row } from "@/common/row/row";
import MyImage from "@/components/image/image";
import { IBMPlexSans } from "@/pages/_app";

type ContactsProps = {
  title?: string
  text?: string
}

export const Contacts = ({
  title = `Got an Idea? Let's Talk!`,
  text = `We'll explore it together and provide a tailored estimation. Click the button below to fill out the form`,
}: ContactsProps) => {
  return (
    <div className={s.root}>
      <Row>
        <div className={s.wrap}>
          <MyImage src="/img/icons/loading.svg" alt="loading icon" width={100} height={100} />
          <h3 className={IBMPlexSans.className}>{title}</h3>
          <p>{text}</p>
          <Button type={['fill']}>Contact Us</Button>
        </div>
      </Row>
    </div>
  )
}