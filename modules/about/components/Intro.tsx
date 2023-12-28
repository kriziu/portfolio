import { useRef, Fragment } from 'react';

import { motion } from 'framer-motion';

import { useScrollY } from '@/common/hooks/useScrollY';
import { useWindowSize } from '@/common/hooks/useWindowSize';
import { useMouseVariant } from '@/modules/customMouse';

const TEXT = 'Using the latest technologies, I develop things like...';
const TEXT_ARR = TEXT.split(' ');
const PROGRESS_PER_WORD = 100 / TEXT_ARR.length;

export default function Intro() {
  const { setMouseVariant } = useMouseVariant();
  const scrollY = useScrollY();
  const { height } = useWindowSize();

  const startScroll = useRef(0);

  const progress = calculateProgress(startScroll.current, scrollY, height);

  return (
    <motion.p
      className="header block px-8 text-center sm:px-16 lg:w-2/3 lg:px-0 2xl:w-[75rem]"
      onMouseEnter={setMouseVariant.text}
      onMouseLeave={setMouseVariant.default}
      onViewportEnter={() => {
        if (startScroll.current === 0) {
          startScroll.current = scrollY + height / 4;
        }
      }}
      onViewportLeave={() => {
        if (scrollY <= startScroll.current) {
          startScroll.current = 0;
        }
      }}
    >
      {TEXT_ARR.map((char, index) => {
        return (
          <Fragment key={index}>
            <motion.span
              animate={
                progress >= PROGRESS_PER_WORD * index + 1
                  ? { y: 0, opacity: 1 }
                  : { y: 20, opacity: 0 }
              }
              transition={{ duration: 0.3 }}
            >
              {char}
            </motion.span>{' '}
          </Fragment>
        );
      })}
    </motion.p>
  );
}

const calculateProgress = (
  startScroll: number,
  scrollY: number,
  height: number
) =>
  startScroll &&
  (Math.round(
    Math.min(100, Math.max(0, ((scrollY - startScroll) / (height / 3)) * 100))
  ) *
    100) /
    100;
