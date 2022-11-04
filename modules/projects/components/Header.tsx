import { useState } from 'react';

import { motion } from 'framer-motion';

import ScrollOpacity from '@/common/components/ScrollOpacity';
import { useScrollY } from '@/common/hooks/useScrollY';
import { useWindowSize } from '@/common/hooks/useWindowSize';
import { useMouseVariant } from '@/modules/customMouse';

const Header = () => {
  const scrollY = useScrollY();
  const { setMouseVariant } = useMouseVariant();

  const { height } = useWindowSize();

  const [startScroll, setStartScroll] = useState(0);

  const scale = Math.max((scrollY - startScroll) / 5000 + 0.2);

  let opacity = 1;

  if (scrollY > startScroll + height * 1.5) {
    opacity = 0.9 - (scrollY - (startScroll + height * 1.5)) / 400;
  }

  return (
    <div className="absolute z-50 flex h-full w-full flex-col items-center justify-center px-10">
      <ScrollOpacity center setStartScroll={setStartScroll}>
        <motion.p
          className="pointer-events-auto w-max text-center"
          onMouseEnter={setMouseVariant.text}
          onMouseLeave={setMouseVariant.default}
          style={{ scale, fontSize: 'max(10vw, 15vh)', opacity }}
        >
          and more.
        </motion.p>
      </ScrollOpacity>
    </div>
  );
};

export default Header;
