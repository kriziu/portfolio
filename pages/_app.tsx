import '@/common/styles/global.css';

import localFont from '@next/font/local';
import { MotionConfig } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { MouseVariantProvider } from '@/modules/customMouse';

const foundersFont = localFont({
  src: '../common/fonts/FoundersGrotesk-Bold.otf',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>EDIT HERE</title>
        <meta name="description" content="EDIT HERE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="__font" className={`${foundersFont.className}`}>
        <MotionConfig
          transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 0.2 }}
        >
          <MouseVariantProvider>
            <Component {...pageProps} />
          </MouseVariantProvider>
        </MotionConfig>
      </div>
    </>
  );
}
