import { RefObject } from 'react';

import { IParallax } from '@react-spring/parallax';

import { useWindowSize } from '@/common/hooks/useWindowSize';

import { useMouseVariant } from '../customMouse';
import Header from './components/Header';
import ScrollIndicator from './components/ScrollIndicator';

const Hero = ({ parallaxRef }: { parallaxRef: RefObject<IParallax> }) => {
  const { width } = useWindowSize();
  const { setMouseVariant } = useMouseVariant();

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-8 flex items-center gap-5 font-sans text-lg md:gap-10">
        <div className="h-px bg-zinc-600 sm:w-36 md:w-48 lg:w-72" />
        <button
          onClick={() => parallaxRef.current?.scrollTo(width < 768 ? 8.4 : 9)}
          onMouseEnter={setMouseVariant.button}
          onMouseLeave={setMouseVariant.default}
        >
          Projects
        </button>
        <button
          onMouseEnter={setMouseVariant.button}
          onMouseLeave={setMouseVariant.default}
        >
          Resume
        </button>
        <button
          onClick={() => parallaxRef.current?.scrollTo(11)}
          onMouseEnter={setMouseVariant.button}
          onMouseLeave={setMouseVariant.default}
        >
          Contact
        </button>
        <div className="h-px bg-zinc-600 sm:w-36 md:w-48 lg:w-72" />
      </div>

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
