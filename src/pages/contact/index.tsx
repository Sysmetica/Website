import React, { FC, useState } from 'react'
import { CONTACT_PAGE, CREATE_TALK } from '@/graphql/queries'
import { GetStaticProps } from 'next/types'
import client from '@/graphql/client'
import { Layout } from '@/common/layout/layout'
import { CareerPageFields } from '@/types/career'
import { Row } from '@/common/row/row'
import { IBMPlexSans } from '../_app'
import clsx from 'clsx'
import { Button } from '@/components/button/button'
import { useMutation } from '@apollo/client'
import g from '@/components/form/form.module.scss';

interface Props {
  pageData: CareerPageFields
}

const defaultData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const SUCCESS = 'Thank you! Your application has been received. We will contact you in the next 24 hours.';
const ERROR = 'please, fill all required fields';
const ERROR_FORM = 'hmmmmmmm form NOT working...';

const Career: FC<Props> = ({ pageData }) => {
  const [form, setForm] = useState(defaultData);
  const [touch, setTouch] = useState(false);
  const [createTalk, { data, loading, error }] = useMutation(CREATE_TALK);
  const [sendStatus, setSendStatus] = useState<{
    status: 'success' | 'error',
    message: string,
  }>({
    status: 'error',
    message: ''
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setTouch(true);
    addTalk(form);
  };

  const addTalk = async ({ name, email, subject, message }: any) => {
    if (!name && !email && !message) {
      setSendStatus({
        status: 'error',
        message: ERROR,
      })
      return
    }
    await createTalk({
      variables: {
        name: name,
        email: email,
        subject: subject,
        message: message,
      },
    }).then(({ data }: any) => {
      setForm(defaultData);
      setTouch(false);
      setSendStatus({
        status: 'success',
        message: SUCCESS,
      });

      setTimeout(() => {
        setSendStatus({
          status: 'error',
          message: '',
        });
      }, 3000);
    }).catch((err) => {
      setSendStatus({
        status: 'error',
        message: ERROR_FORM,
      })
    });
  };

  const handleInput = (event: any) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  return (
    <Layout>
      <div className={g.root}>
        <Row>
          <div className={g.rootWrap}>

            <div className={g.text}>
              <h3 className={IBMPlexSans.className}>{`Got an Idea? Let's Talk!`}</h3>
              <p>{`If you have any additional questions, reach out by email`}</p>
              <span>hello@sysmetica.io</span>
            </div>

            <div className={g.form}>
              <form onSubmit={handleSubmit}>
                <div className={g.fields}>

                  <div className={g.wrap}>
                    <label htmlFor="name">{`Full Name *`}</label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={handleInput}
                      placeholder='Your full name'
                      className={clsx({
                        [g.disabled]: touch && !form.name
                      })}
                    />
                  </div>

                  <div className={g.wrap}>
                    <label htmlFor="email">{`Your Email *`}</label>
                    <input
                      id="email"
                      type="text"
                      value={form.email}
                      onChange={handleInput}
                      placeholder='Your email'
                      className={clsx({
                        [g.disabled]: touch && (!form.email || !isValidEmail(form.email))
                      })}
                    />
                  </div>

                  <div className={g.wrap}>
                    <label htmlFor="subject">{`Subject`}</label>
                    <input
                      id="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleInput}
                      placeholder='How can we help'
                    />
                  </div>

                  <div className={g.wrap}>
                    <label htmlFor="message">{`Message`}</label>
                    <textarea
                      id="message"
                      value={form.message}
                      onChange={handleInput}
                      placeholder='Brief description of your idea'
                      className={clsx({
                        [g.disabled]: touch && !form.message
                      })}
                    />
                  </div>

                </div>
                <div className={g.buttonWrap}>
                  {!!sendStatus.message && <p className={g.success}>{sendStatus.message}</p>}
                  {sendStatus.status === 'success' ? (
                    <div className={g.done} />
                  ) : (
                    <Button stat={true} type={['fill']}>Submit</Button>
                  )}
                </div>
                {loading && <div className={g.loading}>loading...</div>}
              </form>
            </div>

          </div>
        </Row>
      </div>
    </Layout>
  )
}

export default Career

export const getStaticProps: GetStaticProps<any> = async () => {
  const { data } = await client.query({ query: CONTACT_PAGE })
  const pageData: CareerPageFields = data.contactPage.data;

  return {
    props: {
      pageData
    },
    revalidate: 10,
  }
}