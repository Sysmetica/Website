import { useRef, useState } from 'react';
import s from './cv.module.scss';
import { CREATE_CV } from '@/graphql/queries';
import { useMutation } from '@apollo/client';
import { Row } from '@/common/row/row';
import { IBMPlexSans } from '@/pages/_app';
import { Button } from '../button/button';
import MyImage from '../image/image';
import { useSetAtom } from 'jotai';
import { CareersProps } from '@/types/career';
import clsx from 'clsx';
import { csModal } from '@/state';

const defaultData = {
  name: '',
  email: '',
  number: '',
  vacancy: '',
  file: '',
}

const SUCCESS = 'Thank you! Your application has been received. We will contact you in the next 24 hours.';

const CvForm = ({ svList }: { svList: CareersProps['data'] }) => {
  const setModal = useSetAtom(csModal);
  const [createCv, { data, loading, error }] = useMutation(CREATE_CV);
  const [form, setForm] = useState(defaultData);
  const [sendStatus, setSendStatus] = useState('');

  const addCv = async ({ name, email, number, vacancy, file }: any) => {
    await createCv({
      variables: {
        name: name,
        email: email,
        number: number,
        vacancy: vacancy,
        file: file,
      },
    }).then(({ data }: any) => {
      setForm(defaultData);
      setSendStatus(SUCCESS);
    });
  };

  const handleInput = (event: any) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    addCv(form);
  };

  const closeModal = (e: any) => {
    e.preventDefault();
    setModal(false);
    document.body.style.overflow = '';
    setSendStatus('');
  };

  const [selectStat, setSelectState] = useState(false);

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const isValidNumber = (email: string) => {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(email);
  }

  // if (loading) return 'Submitting...';
  // if (error) return `Submission error! ${error.message}`;

  console.log('form ', form)

  return (
    <div className={s.root}>
      <Row>
        <div className={s.rootWrap}>

          <div className={s.head}>
            <MyImage src="/img/logo.svg" alt="sysmetica logo" width={165} height={32} />
            <Button type={['close']} onClick={closeModal}>Close</Button>
          </div>

          <div className={s.text}>
            <h3 className={IBMPlexSans.className}>{`Submit Your CV`}</h3>
            <p>{`Step into your next career opportunity! We will contact you very soon. For any additional questions, reach out by email`}</p>
            <span>hello@sysmetica.io</span>
          </div>

          <div className={s.form}>
            <form onSubmit={handleSubmit}>
              <div className={s.fields}>
                <div className={s.wrap}>
                  <label htmlFor="name">{`Full Name *`}</label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={handleInput}
                    placeholder='Your full name'
                    className={clsx({
                      [s.disabled]: !form.name
                    })}
                  />
                </div>
                <div className={s.wrap}>
                  <label htmlFor="email">{`Your Email *`}</label>
                  <input
                    id="email"
                    type="text"
                    value={form.email}
                    onChange={handleInput}
                    placeholder='Your email'
                    className={clsx({
                      [s.disabled]: !isValidEmail(form.email)
                    })}
                  />
                </div>
                <div className={s.wrap}>
                  <label htmlFor="number">{`Phone Number`}</label>
                  <input
                    id="number"
                    type="text"
                    value={form.number}
                    onChange={handleInput}
                    placeholder='Phone number'
                    className={clsx({
                      [s.disabled]: !!form.number && !isValidNumber(form.number)
                    })}
                  />
                </div>
                <div className={s.wrap}>
                  <label htmlFor="vacancy">{`Vacancy you're applying to`}</label>
                  <div
                    className={clsx(s.vacancyWrap, {
                      [s.active]: selectStat
                    })}
                    onClick={() => setSelectState(!selectStat)}
                  >
                    <input
                      id="vacancy"
                      type="text"
                      value={form.vacancy}
                      onChange={handleInput}
                      placeholder='Select vacancy'
                      className={s.vacancy}
                    />
                  </div>
                  <div className={s.list}>
                    {svList.map(({ attributes: { title } }) => {
                      return (
                        <span
                          key={title}
                          onClick={
                            () => {
                              setForm((prev) => ({
                                ...prev,
                                vacancy: title
                              }))
                              setSelectState(false)
                            }
                          }
                          className={clsx({
                            [s.active]: title === form.vacancy
                          })}
                        >{title}</span>
                      )
                    })}
                  </div>
                </div>

                {/* file */}
                <div className={s.wrap}>
                  <div className={clsx(s.drop, {
                    [s.disabled]: !form.file
                  })}>
                    <input
                      id="file"
                      type="file"
                      value={form.file}
                      onChange={handleInput}
                    />
                    <div className="note">
                      <MyImage src="/img/icons/file.svg" alt="file icon" width={40} height={40} />
                      <p>{`* Drag & Drop CV here or Browse`}</p>
                      <span>{`Accepted formats: .pdf, .doc, .docx, .txt, .odt, .rtf, and .html (30 MB max)`}</span>
                    </div>
                  </div>
                  {form.file && <div className={s.attach}>{form.file}</div>}
                </div>

              </div>
              <div className={s.buttonWrap}>
                {loading && 'loading...'}
                {!!sendStatus && <p className={s.success}>{sendStatus}</p>}
                {!!sendStatus ? (
                  <div className={s.done} />
                ) : (
                  <Button stat={true} type={['fill']}>Submit</Button>
                )}
              </div>
            </form>
          </div>

        </div>
      </Row>
    </div>
  )
}

export default CvForm