import type { AppProps } from 'next/app';
import 'normalize.css/normalize.css';
import '../styles/common.scss';
import { Poppins, Caveat } from 'next/font/google';
import localFont from 'next/font/local';
import { ApolloProvider } from "@apollo/client";
import client from '@/graphql/client';
import Head from 'next/head';
// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export const poppinsFont = Poppins({
  weight: ['400', '500', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})
export const cavetFont = Caveat({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const IBMPlexSans = localFont({
  src: [
    {
      path: '../../public/fonts/IBMPlexSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>

      <Head>
        <title>{`Sysmetica – Mobile Development and Design Agency`}</title>
      </Head>

      <main className={poppinsFont.className}>

        {/* <GoogleReCaptchaProvider
          reCaptchaKey="your_site_key"
          scriptProps={{
            async: false,
            defer: false,
            appendTo: "head",
            nonce: undefined,
          }}
        > */}
        <Component {...pageProps} />
        {/* </GoogleReCaptchaProvider> */}

        <style jsx global>{
          `
          :root {
            --font-IBMPlexSans: ${IBMPlexSans.style.fontFamily};
          }
        `
        }</style>

        <style jsx global>{
          `
          body {
            background: ${pageProps.options.attributes.theme === 'dark' ? '#000' : '#fff'};
          }
        `
        }</style>

      </main>
    </ApolloProvider>
  )
}
