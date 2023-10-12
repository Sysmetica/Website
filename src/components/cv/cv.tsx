import { useEffect, useRef, useState } from 'react';
import s from './cv.module.scss';
import g from '@/components/form/form.module.scss';
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
import { isValidEmail, isValidNumber } from '@/utils';
import axios from 'axios';

const defaultFormData = {
  name: '',
  email: '',
  number: '',
  vacancy: '',
  file: -1,
}

const sendStatusDefault = {
  status: 'error',
  message: ''
}

const SUCCESS = 'Thank you! Your application has been received. We will contact you in the next 24 hours.';
const ERROR_VALIDATION = 'please, fill all required fields';
const ERROR_FORM = 'hmmmmmmm form NOT working...';

const CvForm = ({ svList, activeCv }: { svList: CareersProps['data'], activeCv?: CareersProps['data'][0]['attributes']['slug'] }) => {
  const setModal = useSetAtom(csModal);
  const [sendStatus, setSendStatus] = useState(sendStatusDefault);
  const [selectStat, setSelectState] = useState(false);
  const [files, setFiles] = useState<FileList | null>();
  const [form, setForm] = useState({
    ...defaultFormData,
    vacancy: activeCv || ''
  });
  const [createCv, { data, loading, error }] = useMutation(CREATE_CV);

  const closeModal = (e: any) => {
    e.preventDefault();
    setModal(false);
    document.body.style.overflow = '';
  };

  const addCv = async ({ name, email, number, vacancy, file }: typeof defaultFormData) => {
    await createCv({
      variables: {
        name: name,
        email: email,
        number: number,
        vacancy: vacancy,
        file: file,
      },
    }).then(({ data }: any) => {
      setForm(defaultFormData);
      setSendStatus({
        status: 'success',
        message: SUCCESS,
      });
      console.log('success ', data);

      setTimeout(() => {
        setSendStatus(sendStatusDefault);
      }, 3000);
    }).catch((err) => {
      setSendStatus({
        status: 'error',
        message: ERROR_FORM,
      })
      console.log('err ', err);
    });
  };

  const handleInput = (e: any) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData();

    if (!files || !form.name || !form.email) {
      setSendStatus({
        status: 'error',
        message: ERROR_VALIDATION,
      })
      return
    }

    formData.append('files', files[0]);

    // first, we need to upload the file
    axios.post(`${process.env.NEXT_PUBLIC_STRAPI_API_UPLOAD}`, formData)
      .then((response) => {
        addCv({ ...form, file: response.data[0].id });
      }).catch((error) => {
        setSendStatus({
          status: 'error',
          message: String(error),
        })
      })
  };

  // if (loading) return 'Submitting...';
  // if (error) return `Submission error! ${error.message}`;

  return (
    <div className={clsx(g.root, s.root)}>
      <Row>
        <div className={g.rootWrap}>

          <div className={s.head}>
            <MyImage src="/img/logo.svg" alt="sysmetica logo" width={165} height={32} />
            <Button type={['close']} onClick={closeModal}>Close</Button>
          </div>

          <div className={g.text}>
            <h3 className={IBMPlexSans.className}>{`Submit Your CV`}</h3>
            <p>{`Step into your next career opportunity! We will contact you very soon. For any additional questions, reach out by email`}</p>
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
                      [g.disabled]: !form.name
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
                      [g.disabled]: !isValidEmail(form.email)
                    })}
                  />
                </div>
                <div className={g.wrap}>
                  <label htmlFor="number">{`Phone Number`}</label>
                  <input
                    id="number"
                    type="text"
                    value={form.number}
                    onChange={handleInput}
                    placeholder='Phone number'
                    className={clsx({
                      [g.disabled]: !!form.number && !isValidNumber(form.number)
                    })}
                  />
                </div>
                <div className={g.wrap}>
                  <label htmlFor="vacancy">{`Vacancy you're applying to`}</label>
                  <div
                    className={clsx(g.vacancyWrap, {
                      [g.active]: selectStat
                    })}
                    onClick={() => setSelectState(!selectStat)}
                  >
                    <input
                      id="vacancy"
                      type="text"
                      value={form.vacancy}
                      onChange={handleInput}
                      placeholder='Select vacancy'
                      className={g.vacancy}
                    />
                  </div>
                  <div className={g.list}>
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
                            [g.active]: title === form.vacancy
                          })}
                        >{title}</span>
                      )
                    })}
                  </div>
                </div>

                {/* file */}
                <div className={g.wrap}>
                  <div className={clsx(g.drop, {
                    [g.disabled]: !files?.[0].name
                  })}>
                    <input
                      id="file"
                      type="file"
                      onChange={(e) => setFiles(e.target.files)}
                    />
                    <div className={g.note}>
                      <MyImage src="/img/icons/file.svg" alt="file icon" width={40} height={40} />
                      <p>{`* Drag & Drop CV here or Browse`}</p>
                      <span>{`Accepted formats: .pdf, .doc, .docx, .txt, .odt, .rtf, and .html (30 MB max)`}</span>
                    </div>
                  </div>
                  {files?.[0].name && <div className={g.attach}>{files?.[0].name}</div>}
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
  )
}

export default CvForm