import { NextSeo } from "next-seo"
import { MetaDataProps } from "./types";
import { OptionsContext } from "@/common/layout/layout";
import { useContext } from "react";

export const MetaData = ({ global }: MetaDataProps) => {
  const { attributes: { theme } } = useContext(OptionsContext);

  return (
    <NextSeo
      title={global.attributes.title}
      description={global.attributes.description}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: theme === 'light' ? '/img/favicon/favicon16-p.png' : '/img/favicon/favicon16.png',
          sizes: '16x16',
        },
        {
          rel: 'icon',
          href: theme === 'light' ? '/img/favicon/favicon32-p.png' : '/img/favicon/favicon32.png',
          sizes: '32x32',
        },
        {
          rel: 'icon',
          href: theme === 'light' ? '/img/favicon/favicon48-p.png' : '/img/favicon/favicon48.png',
          sizes: '48x48',
        },
      ]}
    />
  )
}