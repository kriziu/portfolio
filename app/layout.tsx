import '@/common/styles/global.css';

import { ReactNode } from 'react';

import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import localFont from 'next/font/local';

const ArticulatCF = localFont({
  src: '../common/fonts/ArticulatCF-Bold.otf',
});

export const metadata: Metadata = {
  title: 'Bruno Dzięcielski | Expert Full Stack Developer in Web Development',
  description:
    'Discover the portfolio of Bruno Dzięcielski, a seasoned Full Stack Developer specializing in Web Development. Explore projects demonstrating expertise in React.js.',
  keywords: [
    'Bruno Dzięcielski',
    'Full Stack Developer',
    'Frontend Expert',
    'React',
    'React.js',
    'Next.js',
  ],
  icons: '/favicon.ico',
  authors: {
    name: 'Bruno Dzięcielski',
    url: process.env.NEXT_PUBLIC_AUTHOR_LINKEDIN_URL,
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={ArticulatCF.className}>{children}</body>
      <Analytics />
    </html>
  );
}
