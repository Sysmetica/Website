import s from './gallery.module.scss';
import MyImage from "@/components/image/image";
import { GalleryProps } from "@/types/about";
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

export const Gallery = ({ gallery }: { gallery: GalleryProps }) => {
  const [pause, setPause] = useState(false);

  if (!gallery.data.length) {
    return null;
  }

  const galleryItems = gallery.data.slice(0, 9);

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
        {galleryItems.map(({ attributes: { url } }, index) => {
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
                  upload={true}
                />
              </div>
            </div>
          )
        })}
      </div>

      <div className={clsx(s.images, s.close)}>
        {galleryItems.map(({ attributes: { url } }, index) => {
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
                  upload={true}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}