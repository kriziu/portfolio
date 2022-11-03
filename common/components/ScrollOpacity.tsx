import { useRef, ReactNode } from 'react';

import { motion } from 'framer-motion';

import { useScrollY } from '@/common/hooks/useScrollY';

import { useWindowSize } from '../hooks/useWindowSize';

const ScrollOpacity = ({
  children,
  center = false,
  setStartScroll,
}: {
  children: ReactNode;
  center?: boolean;
  setStartScroll?: (startScroll: number) => void;
}) => {
  const { height } = useWindowSize();
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
          startScroll.current = scrollY + (center ? height / 2 : 0) + 200;
          if (setStartScroll) setStartScroll(startScroll.current);
        }
      }}
      onViewportLeave={() => {
        if (scrollY <= startScroll.current) {
          startScroll.current = 0;
          if (setStartScroll) setStartScroll(startScroll.current);
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollOpacity;
