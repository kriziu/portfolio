import { motion } from 'framer-motion';

import { useScrollY } from '@/common/hooks/useScrollY';
import { useMouseVariant } from '@/modules/customMouse';

const AboutHeader = () => {
  const { setMouseVariant } = useMouseVariant();
  const scrolled = useScrollY();

  return (
    <motion.h2
      className="mt-2 h-min whitespace-nowrap text-center text-6xl"
      style={{
        fontSize: `calc(max(10vw, 14vh) - ${scrolled / 11}px)`,
      }}
      onMouseEnter={setMouseVariant.text}
      onMouseLeave={setMouseVariant.default}
    >
      I&apos;m Full stack <span className="text-gradient">developer</span> that{' '}
      <br />
      creates web based applications.
    </motion.h2>
  );
};

export default AboutHeader;
