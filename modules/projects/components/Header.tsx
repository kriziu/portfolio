import { useState } from 'react';

import { motion } from 'framer-motion';

import ScrollOpacity from '@/common/components/ScrollOpacity';
import { useScrollY } from '@/common/hooks/useScrollY';
import { useMouseVariant } from '@/modules/customMouse';

const Header = () => {
  const scrollY = useScrollY();
  const { setMouseVariant } = useMouseVariant();

  const [startScroll, setStartScroll] = useState(0);

  const scale = Math.max((scrollY - startScroll) / 5000 + 0.2);

  return (
    <div className="absolute z-50 flex h-full w-full flex-col items-center justify-center px-10">
      <ScrollOpacity center setStartScroll={setStartScroll}>
        <motion.p
          className="w-max text-center"
          onMouseEnter={setMouseVariant.text}
          onMouseLeave={setMouseVariant.default}
          style={{ scale, fontSize: 'max(10vw, 12vh)' }}
        >
          and more.
        </motion.p>
      </ScrollOpacity>
    </div>
  );
};

export default Header;
