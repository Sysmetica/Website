import { Action, mouseActionArea } from '@/components/action/action';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import s from './layout.module.scss';
import { useSetAtom } from 'jotai';
import { isMobile } from 'react-device-detect';
import { useEffect } from 'react';
import { csModal, isMobileDevice, menuState } from '@/state';
import clsx from 'clsx';
import { useRouter } from 'next/router';

export const Layout = ({ children, type = '' }: any) => {
  const router = useRouter();
  const setDevice = useSetAtom(isMobileDevice);
  const setArea = useSetAtom(mouseActionArea);
  const setMenuState = useSetAtom(menuState);
  const setModal = useSetAtom(csModal);

  useEffect(() => {
    const handleRouteChange = () => {
      setArea({ area: 'default' });
      setMenuState(false);
      setModal(false);
      document.body.style.overflow = '';
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  useEffect(() => {
    setDevice(isMobile)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={clsx(s.root, s[type])}>
      {/* <MyImage src="/img/bg.svg" alt="" width={881} height={600} imgClass={s.bg} /> */}
      <Header />
      <div className={s.content}>
        {children}
      </div>
      <Footer />
      <Action />
    </div>
  )
}