import type { AppProps } from 'next/app';
import 'normalize.css/normalize.css';
import '../styles/common.scss';
import { Poppins, Caveat } from 'next/font/google';
import localFont from 'next/font/local';
import { ApolloProvider } from "@apollo/client";
import client from '@/graphql/client';
import Head from 'next/head';
import Script from 'next/script';

export const poppinsFont = Poppins({
  weight: ['400', '500', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const cavetFont = Caveat({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const IBMPlexSans = localFont({
  src: [
    {
      path: '../../public/fonts/IBMPlexSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>

      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-1Q7W45Y5Q3"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1Q7W45Y5Q3');
          `,
        }}
      />

      <Head>
        <title>{`Sysmetica – Mobile Development and Design Agency`}</title>
      </Head>

      <main>
        <Component {...pageProps} />

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
            background: ${pageProps.options?.attributes?.theme === 'dark' ? '#000' : '#fff'};
            font-family: ${poppinsFont.style.fontFamily};
          }
        `
        }</style>

      </main>
    </ApolloProvider>
  );
}
