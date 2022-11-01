import '@/common/styles/global.css';

import localFont from '@next/font/local';
import { Analytics } from '@vercel/analytics/react';
import { MotionConfig } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { MouseVariantProvider } from '@/modules/customMouse';

const ArticulatCF = localFont({
  src: '../common/fonts/ArticulatCF-Bold.otf',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bruno Dzięcielski | Full stack Developer</title>
        <meta name="description" content="EDIT HERE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="__font" className={ArticulatCF.className}>
        <MotionConfig
          transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        >
          <MouseVariantProvider>
            <Component {...pageProps} />
          </MouseVariantProvider>
        </MotionConfig>
      </div>
      <Analytics />
    </>
  );
}
