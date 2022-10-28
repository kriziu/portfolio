import { motion } from 'framer-motion';

import { useScrollY } from '@/common/hooks/useScrollY';

const scrollSpeed = 2;

const ProjectList = () => {
  const scrollY = useScrollY();

  if (typeof window === 'undefined') {
    return null;
  }

  const goodScroll = Math.max(
    (scrollY - window.innerHeight * 1.35) * scrollSpeed,
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
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-extra">
        Lorem, ipsum <span className="text-violet-600">dolor </span>sit amet.
      </h2>
    </>
  );
};

export default ProjectList;
