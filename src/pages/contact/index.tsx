import React, { FC, useState } from 'react'
import { CONTACT_PAGE, CREATE_TALK, META, OPTIONS } from '@/graphql/queries'
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
import { FORM_ERROR, FORM_ERROR_VALIDATION, FORM_SUCCESS } from '@/components/form/const'
import { OptionsProps } from '@/types/options'
import { GlobalProps } from '@/components/seo/types'
import { SeoContext } from '@/components/seo/seoContext'
import { MyInput } from '@/components/input/input'
import { MyTextarea } from '@/components/input/textarea'
import { mouseActionArea } from '@/components/action/action'
import { useSetAtom } from 'jotai/react'
import { isValidEmail, maxLengthValidation } from '@/utils'
import { MAX_INPUT, MAX_TEXT } from '@/const'
import { usePreventDataLoss } from '@/hooks/usePreventDataLoss'

interface Props {
  pageData: {
    attributes: {
      title: string
      text: string
    }
  }
  options: OptionsProps
  globalMeta: GlobalProps
}

const defaultData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const Contacts: FC<Props> = ({ pageData, options, globalMeta }) => {
  const {
    attributes: {
      title,
      text,
    }
  } = pageData
  // console.log('pageData ', pageData);

  const setArea = useSetAtom(mouseActionArea);
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
    if (!name || !email || !message || isEmailNotValid) {
      setSendStatus({
        status: 'error',
        message: FORM_ERROR_VALIDATION,
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
        message: FORM_SUCCESS,
      });
    }).catch((err) => {
      setSendStatus({
        status: 'error',
        message: err.message || FORM_ERROR,
      })
    });
  };

  const handleInput = (event: any) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const isEmailNotValid = !form.email || !isValidEmail(form.email);

  usePreventDataLoss(form);

  return (
    <Layout options={options}>
      <SeoContext globalMeta={globalMeta}>
        <div className={g.root}>
          <Row>
            <div className={g.rootWrap}>

              <div className={g.text} data-fade data-child>
                {title && <h3 className={IBMPlexSans.className} >{title}</h3>}
                {text && <p>{text}</p>}
                {options.attributes.email && (
                  <a
                    href={`mailto:${options.attributes.email}`}
                    target='_blank'
                    className={g.email}
                    onMouseOver={() => setArea({ area: 'button' })}
                    onMouseOut={() => setArea({ area: 'default' })}
                  >
                    {options.attributes.email}
                  </a>
                )}
              </div>

              <div className={g.form}>
                <form onSubmit={handleSubmit}>
                  <div className={g.fields} data-fade data-child >

                    <div className={g.wrap}>
                      <label htmlFor="name">{`Full Name *`}</label>
                      <MyInput
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={handleInput}
                        placeholder='Your full name'
                        className={clsx({
                          [g.disabled]: (touch && !form.name) || maxLengthValidation(form.name, MAX_INPUT)
                        })}
                      />
                    </div>

                    <div className={g.wrap}>
                      <label htmlFor="email">{`Your Email *`}</label>
                      <MyInput
                        id="email"
                        type="text"
                        value={form.email}
                        onChange={handleInput}
                        placeholder='Your email'
                        className={clsx({
                          [g.disabled]: (touch && isEmailNotValid) || maxLengthValidation(form.email, MAX_INPUT)
                        })}
                      />
                    </div>

                    <div className={g.wrap}>
                      <label htmlFor="subject">{`Subject`}</label>
                      <MyInput
                        id="subject"
                        type="text"
                        value={form.subject}
                        onChange={handleInput}
                        placeholder='How can we help'
                        className={clsx({
                          [g.disabled]: touch && maxLengthValidation(form.subject, MAX_INPUT)
                        })}
                      />
                    </div>

                    <div className={g.wrap}>
                      <label htmlFor="message">{`Message`}</label>
                      <MyTextarea
                        id="message"
                        value={form.message}
                        onChange={handleInput}
                        placeholder='Brief description of your idea'
                        className={clsx({
                          [g.disabled]: touch && maxLengthValidation(form.message, MAX_TEXT)
                        })}
                      />
                    </div>

                  </div>
                  <div className={clsx(g.buttonWrap, {
                    [g.loading]: loading,
                    [g.done]: sendStatus.status === 'success',
                    [g.error]: sendStatus.status === 'error',
                  })}>

                    {!!sendStatus.message && <p className={g.success}>{sendStatus.message}</p>}

                    <div className={g.done} />
                    <div className={g.loading} />

                    <div data-fade className={g.button}>
                      <Button stat={true} type={['fill']}>{`Submit`}</Button>
                    </div>

                  </div>
                </form>
              </div>

            </div>
          </Row>
        </div>
      </SeoContext>
    </Layout>
  )
}

export default Contacts

export const getStaticProps: GetStaticProps<any> = async () => {
  const { data } = await client.query({ query: CONTACT_PAGE })
  const pageData: CareerPageFields = data.contactPage.data;

  // options
  const optionsData = await client.query({ query: OPTIONS });
  const options = optionsData.data.option.data;

  // meta
  const globalMetaData = await client.query({ query: META });
  const globalMeta = globalMetaData.data.meta.data;

  return {
    props: {
      pageData,
      options,
      globalMeta,
    },
    revalidate: 10,
  }
}