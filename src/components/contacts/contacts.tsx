import { Button } from "@/components/button/button";
import s from './contacts.module.scss';
import { Row } from "@/common/row/row";
import { IBMPlexSans } from "@/pages/_app";
// import contactsAnimation from "../../../public/animations/contacts.json";
import MyImage from "../image/image";

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
          {/* <Lottie
            animationData={contactsAnimation}
            loop={true}
            style={{ height: 190 }}
            data-fade
          /> */}
          <MyImage src="/img/icons/contact.svg" alt="loading icon" width={100} height={100} data-fade />
          <h3 className={IBMPlexSans.className} data-fade>{title}</h3>
          <p data-fade>{text}</p>
          <div data-fade>
            <Button type={['fill']} link={'/contact'} >Contact Us</Button>
          </div>
        </div>
      </Row>
    </div>
  )
}