import { RefObject } from 'react';

import { IParallax } from '@react-spring/parallax';
import { motion } from 'framer-motion';

import { useWindowSize } from '@/common/hooks/useWindowSize';

import Header from './components/Header';
import ScrollIndicator from './components/ScrollIndicator';

const Hero = ({ parallaxRef }: { parallaxRef: RefObject<IParallax> }) => {
  const { width } = useWindowSize();

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <motion.div
        className="absolute top-8 flex items-center gap-5 font-sans text-lg md:gap-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.65 }}
      >
        <div className="h-px bg-zinc-600 sm:w-36 md:w-48 lg:w-72" />
        <button
          onClick={() => parallaxRef.current?.scrollTo(width < 768 ? 8.4 : 9)}
          className="scale-btn"
        >
          Projects
        </button>
        <a
          className="scale-btn"
          href="pdf/brunodziecielski.pdf"
          target="_blank"
        >
          Resume
        </a>
        <button
          onClick={() => parallaxRef.current?.scrollTo(11)}
          className="scale-btn"
        >
          Contact
        </button>
        <div className="h-px bg-zinc-600 sm:w-36 md:w-48 lg:w-72" />
      </motion.div>

      <div className="flex w-max flex-1 flex-col">
        <div className="flex h-[55%] items-end">
          <Header />
        </div>

        <ScrollIndicator />
      </div>
    </div>
  );
};

export default Hero;
