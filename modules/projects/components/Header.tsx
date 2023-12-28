import { useState } from 'react';

import { motion } from 'framer-motion';

import ScrollOpacity from '@/common/components/ScrollOpacity';
import { useScrollY } from '@/common/hooks/useScrollY';
import { useWindowSize } from '@/common/hooks/useWindowSize';
import { useMouseVariant } from '@/modules/customMouse';

export default function Header() {
  const scrollY = useScrollY();
  const { setMouseVariant } = useMouseVariant();

  const { height } = useWindowSize();

  const [startScroll, setStartScroll] = useState(0);

  const scale = Math.max((scrollY - startScroll) / 5000 + 0.2);

  let opacity = 1;

  if (scrollY > startScroll + height * 1.3) {
    opacity = 0.9 - (scrollY - (startScroll + height * 1.3)) / 400;
  }

  return (
    <div className="absolute mt-24 h-[200vh] md:h-[230vh]">
      <div className="sticky top-0 z-10 flex h-screen w-screen flex-col items-center justify-center overflow-x-hidden px-10">
        <ScrollOpacity center setStartScroll={setStartScroll}>
          <motion.p
            className="pointer-events-auto w-max whitespace-nowrap text-center"
            onMouseEnter={setMouseVariant.text}
            onMouseLeave={setMouseVariant.default}
            style={{ scale, fontSize: 'max(10vw, 15vh)', opacity }}
          >
            and more.
          </motion.p>
        </ScrollOpacity>
      </div>
    </div>
  );
}
