import { useRef, ReactNode } from 'react';

import { motion } from 'framer-motion';

import { useScrollY } from '@/common/hooks/useScrollY';

const ScrollOpacity = ({ children }: { children: ReactNode }) => {
  const scrollY = useScrollY();

  const startScroll = useRef(0);

  const opacity =
    startScroll.current === 0
      ? 0
      : Math.min(Math.max((scrollY - startScroll.current) / 300, 0), 1);

  return (
    <motion.div
      style={{ opacity }}
      onViewportEnter={() => {
        if (startScroll.current === 0) {
          startScroll.current = scrollY + 200;
        }
      }}
      onViewportLeave={() => {
        if (scrollY <= startScroll.current) {
          startScroll.current = 0;
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollOpacity;
