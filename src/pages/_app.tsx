import type { AppProps } from 'next/app';
import 'normalize.css/normalize.css';
import '../styles/common.scss';
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import { ApolloProvider } from "@apollo/client";
import client from '@/graphql/client'

export const poppinsFont = Poppins({
  weight: ['400', '500', '600'],
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
      <main className={poppinsFont.className}>
        <Component {...pageProps} />
        <style jsx global>{
          `
          :root {
            --font-IBMPlexSans: ${IBMPlexSans.style.fontFamily};
          }
        `
        }</style>
      </main>
    </ApolloProvider>
  )
}

function createApolloClient() {
  throw new Error('Function not implemented.');
}
