import { motion } from 'framer-motion';

import { useScrollY } from '@/common/hooks/useScrollY';
import { MouseVariant, useMouseVariant } from '@/modules/customMouse';

const scrollSpeed = 2;

const ProjectList = () => {
  const { setMouseVariant } = useMouseVariant();
  const scrollY = useScrollY();

  if (typeof window === 'undefined') {
    return null;
  }

  const goodScroll = Math.max(
    (scrollY - window.innerHeight * 1.15) * scrollSpeed,
    0
  );

  return (
    <>
      <motion.div
        style={{ width: '400vh', x: -goodScroll }}
        className="relative z-50 flex h-full items-center justify-between bg-black pl-20"
      >
        <div className="h-2/3 w-[40rem] rounded-lg bg-zinc-800" />

        <div className="h-2/3 w-[40rem] rounded-lg bg-zinc-800" />

        <div className="h-2/3 w-[40rem] rounded-lg bg-zinc-800" />

        <div className="h-2/3 w-[40rem] rounded-lg bg-zinc-800" />
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2
          className="-mb-6 text-5xl sm:text-extra"
          onMouseEnter={() => setMouseVariant(MouseVariant.TEXT)}
          onMouseLeave={() => setMouseVariant(MouseVariant.DEFAULT)}
        >
          Want to see more? <span className="text-violet-600">Checkout</span> my{' '}
        </h2>
        <a
          href="https://github.com/kriziu"
          target="_black"
          rel="noreferrer"
          className="cursor-none text-extra underline"
          onMouseEnter={() => setMouseVariant(MouseVariant.BUTTON)}
          onMouseLeave={() => setMouseVariant(MouseVariant.DEFAULT)}
        >
          Github.
        </a>
      </div>
    </>
  );
};

export default ProjectList;
