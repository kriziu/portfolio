import '@/common/styles/global.css';

import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>EDIT HERE</title>
        <meta name="description" content="EDIT HERE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="__font" className={inter.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
