import s from './gallery.module.scss';
import MyImage from "@/components/image/image";
import { AboutPageFields } from "@/types/about";
import clsx from 'clsx';
import { useState } from 'react';

const sizes = [
  {
    width: 364,
    height: 580,
  },
  {
    width: 414,
    height: 312,
  },
  {
    width: 414,
    height: 244,
  },
  {
    width: 436,
    height: 580,
  },
  {
    width: 208,
    height: 312,
  },
  {
    width: 208,
    height: 244,
  },

  // repeat
  {
    width: 364,
    height: 580,
  },
  {
    width: 414,
    height: 312,
  },
  {
    width: 414,
    height: 244,
  },
]

export const Gallery = ({ gallery }: { gallery: AboutPageFields['attributes']['gallery'] }) => {
  const [pause, setPause] = useState(false);

  return (
    <div
      className={clsx(s.root, {
        [s.pause]: pause
      })}
      onMouseDown={() => setPause(true)}
      onMouseUp={() => setPause(false)}
      onMouseOut={() => setPause(false)}
    >
      <div className={s.images}>
        {gallery.data.map(({ attributes: { url } }, index) => {
          return (
            <div
              className={s.img}
              key={url}
              style={{
                gridArea: `img-${index}`
              }}
            >
              <div className={s.wrap}>
                <MyImage
                  src={url}
                  alt="team photo"
                  width={sizes[index].width}
                  height={sizes[index].height}
                />
              </div>
            </div>
          )
        })}
      </div>

      <div className={clsx(s.images, s.close)}>
        {gallery.data.map(({ attributes: { url } }, index) => {
          return (
            <div
              className={s.img}
              key={url}
              style={{
                gridArea: `img-${index}`
              }}
            >
              <div className={s.wrap}>
                <MyImage
                  src={url}
                  alt="team photo"
                  width={sizes[index].width}
                  height={sizes[index].height}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}