import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import s from './layout.module.scss';
import { useSetAtom } from 'jotai';
import { isMobile } from 'react-device-detect';
import { createContext, useEffect, useState } from 'react';
import { isMobileDevice } from '@/state';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { OptionsProps } from '@/types/options';
import { useAnimation } from '@/hooks/useAnimation';
import { useClearStates } from '@/hooks/useClearStates';

type LayoutProps = {
  children: any
  type?: string
  options: OptionsProps
}

export const OptionsContext = createContext<OptionsProps>(null!);

export const Layout = ({ children, type = '', options }: LayoutProps) => {
  const router = useRouter();
  const setDevice = useSetAtom(isMobileDevice);
  useAnimation(router.asPath);
  const clearStates = useClearStates();

  useEffect(() => {
    clearStates()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])

  const [theme] = useState(options);

  useEffect(() => {
    setDevice(isMobile)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <OptionsContext.Provider value={options}>
      <div className={clsx(s.root, s[type])} data-theme={theme.attributes.theme}>
        <Header options={options} />
        <div className={s.content}>
          {children}
        </div>
        <Footer options={options} />
      </div>
    </OptionsContext.Provider>
  )
}