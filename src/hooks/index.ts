import { useEffect, useState } from 'react'

export enum EScrollDirection {
  DOWN = 'down',
  UP = 'up',
}

export const useGetScrollPosition = () => {
  const [direction, setDirection] = useState<string>(EScrollDirection.UP)

  useEffect(() => {
    let lastScrollTop = 0
    const scrollDirect = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop
      if (st > lastScrollTop) {
        setDirection(EScrollDirection.DOWN)
      } else {
        setDirection(EScrollDirection.UP)
      }
      lastScrollTop = st <= 0 ? 0 : st
    }
    window.addEventListener('scroll', scrollDirect, false)
    return () => {
      window.removeEventListener('scroll', scrollDirect)
    }
  }, [])

  return direction
}
