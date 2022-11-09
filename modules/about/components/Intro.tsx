import { useRef, Fragment } from 'react';

import { motion } from 'framer-motion';

import { useScrollY } from '@/common/hooks/useScrollY';
import { useWindowSize } from '@/common/hooks/useWindowSize';
import { useMouseVariant } from '@/modules/customMouse';

const text = 'Using the latest technologies, I develop things like...';
const textArr = text.split(' ');
const progressPerWord = 100 / textArr.length;

const Intro = () => {
  const { setMouseVariant } = useMouseVariant();
  const scrollY = useScrollY();

  const { height } = useWindowSize();

  const startScroll = useRef(0);

  const progress =
    startScroll.current &&
    (Math.round(
      Math.min(
        100,
        Math.max(0, ((scrollY - startScroll.current) / (height / 3)) * 100)
      )
    ) *
      100) /
      100;

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
      {textArr.map((char, index) => {
        return (
          <Fragment key={index}>
            <motion.span
              animate={
                progress >= progressPerWord * index + 1
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
};

export default Intro;
