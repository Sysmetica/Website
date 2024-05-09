import { useContext, useRef, useState } from 'react';
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
import { FORM_ERROR, FORM_ERROR_VALIDATION, FORM_SUCCESS } from '../form/const';
import FileIcon from '../../../public/img/icons/file.svg';
import { OptionsContext } from '@/common/layout/layout';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MyButton } from '../link/button';

const defaultFormData = {
  name: '',
  email: '',
  number: '',
  vacancy: '',
  file: '',
}

const sendStatusDefault = {
  status: 'error',
  message: ''
}

type CvFormProps = {
  svList: CareersProps['data']
  activeCv?: CareersProps['data'][0]['attributes']['slug']
}

const CvForm = ({ svList, activeCv }: CvFormProps) => {
  const setModal = useSetAtom(csModal);
  const [sendStatus, setSendStatus] = useState(sendStatusDefault);
  const [myLoading, setMyLoading] = useState(false);
  const [touch, setTouch] = useState(false);
  const [selectStat, setSelectState] = useState(false);
  const [files, setFiles] = useState<FileList | null>();
  const [form, setForm] = useState({ ...defaultFormData, vacancy: activeCv || '' });
  const [createCv, { data, loading, error }] = useMutation(CREATE_CV);
  const { attributes: { theme } } = useContext(OptionsContext);
  const formRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null)
  const logoType = theme === 'light' ? '-p' : '';

  const closeModal = (e: any) => {
    e.preventDefault();

    const { tls, open } = animationRef.current;

    const close = () => {
      setTouch(false);
      setModal(false);
      setFiles(null);
      document.body.style.overflow = '';
      open && open.kill()
    }

    tls.length && open ? tls.forEach((tl: any, i: number) => {
      tl && tl.timeScale(2).reverse()
      !i && tl.then(() => open.reverse().then(close))
    }) : close()
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
      setTouch(false);
      setFiles(null);
      setMyLoading(false);
      setSendStatus({
        status: 'success',
        message: FORM_SUCCESS,
      });
    }).catch((err) => {
      setSendStatus({
        status: 'error',
        message: FORM_ERROR,
      })
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
    setTouch(true);

    const formData = new FormData();

    if (!files || !form.name || !form.email) {
      setSendStatus({
        status: 'error',
        message: FORM_ERROR_VALIDATION,
      })
      return
    }

    setMyLoading(true);

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
        setMyLoading(false);
      })
  };

  useGSAP(
    () => {
      let tls: any = [];

      const initAnimaton = (section: any) => {
        const fades = section.querySelectorAll("[data-fade]") as NodeListOf<HTMLDivElement>;

        // Fade elements
        const animateFades = (trigger: HTMLDivElement) => {
          const { child, fade } = trigger.dataset;
          let tl = gsap.timeline({
            defaults: { ease: "power2.out", },
          });
          tl.fromTo(child ? trigger.children : trigger,
            { y: "50px", opacity: 0, },
            { duration: 1, y: 0, opacity: 1, stagger: 0.05, }
          );
          tls.push(tl);
        };
        animationRef.current = { ...animationRef.current, tls }


        fades.forEach(animateFades)
      }
      const st = setTimeout(e => {
        const section = formRef.current as HTMLDivElement;

        const open = gsap.timeline({
          onComplete: e => initAnimaton(section)
        });
        animationRef.current = { open }

        open.to(formRef.current, { opacity: 1, duration: .3, })

      }, 200);

      return () => {
        tls.length && tls.forEach((tl: any) => tl.revert())
        clearTimeout(st);
      };
    },
    { dependencies: [], revertOnUpdate: true }
  );

  return (
    <div className={clsx(g.root, s.root)} ref={formRef}>
      <Row>
        <div className={g.rootWrap}>

          <div className={s.head} data-fade data-child>
            <MyButton href={'/'}>
              <MyImage src={`/img/logo${logoType}.svg`} alt="sysmetica logo" width={165} height={32} />
            </MyButton>
            <Button type={['close']} onClick={closeModal}>Close</Button>
          </div>

          <div className={g.text} data-fade>
            <h3 className={IBMPlexSans.className}>{`Submit Your CV`}</h3>
            <p>{`Step into your next career opportunity! We will contact you very soon. For any additional questions, reach out by email`}</p>
            <span>hello@sysmetica.io</span>
          </div>

          <div className={g.form}>
            <form onSubmit={handleSubmit}>
              <div className={g.fields} data-fade data-child>
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
                      [g.disabled]: touch && !isValidEmail(form.email)
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
                      [g.disabled]: touch && (!!form.number && !isValidNumber(form.number))
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
                    [g.disabled]: touch && !files?.[0]?.name
                  })}>
                    <input
                      id="file"
                      type="file"
                      onChange={(e) => setFiles(e.target.files)}
                    />
                    <div className={g.note}>
                      <FileIcon />
                      <p>{`* Drag & Drop CV here or Browse`}</p>
                      <span>{`Accepted formats: .pdf, .doc, .docx, .txt, .odt, .rtf, and .html (30 MB max)`}</span>
                    </div>
                  </div>
                  {files?.[0]?.name && <div className={g.attach}>{files?.[0]?.name}<span className={g.remove} onClick={() => setFiles(null)}></span></div>}
                </div>

                <div className={clsx(g.buttonWrap, {
                  [g.loading]: myLoading,
                  [g.done]: sendStatus.status === 'success',
                  [g.error]: sendStatus.status === 'error',
                })}>

                  {!!sendStatus.message && <p className={g.success}>{sendStatus.message}</p>}

                  <div className={g.done} />
                  <div className={g.loading} />
                  <Button stat={true} type={['fill']}>Submit</Button>
                </div>

              </div>

            </form>
          </div>

        </div>
      </Row>
    </div>
  )
}

export default CvForm