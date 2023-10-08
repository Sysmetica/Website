import { Action } from '@/components/action/action';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import s from './layout.module.scss';
import { useSetAtom } from 'jotai';
import { isMobile } from 'react-device-detect';
import { useEffect } from 'react';
import { isMobileDevice } from '@/state';
import clsx from 'clsx';

export const Layout = ({ children, type = '' }: any) => {
  const setDevice = useSetAtom(isMobileDevice)

  useEffect(() => {
    setDevice(isMobile)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={clsx(s.root, s[type])}>
      <Header />
      <div className={s.content}>
        {children}
      </div>
      <Footer />
      {/* <Action /> */}
    </div>
  )
}