import { motion } from 'framer-motion';

import { useScrollY } from '@/common/hooks/useScrollY';
import { useWindowSize } from '@/common/hooks/useWindowSize';
import { useMouseVariant } from '@/modules/customMouse';

const AboutHeader = () => {
  const { setMouseVariant } = useMouseVariant();
  const scrolled = useScrollY();

  const { width } = useWindowSize();

  const mobile = width < 768;

  const scale = Math.max(
    0,
    (mobile ? 1.5 : 1) - scrolled / (mobile ? 1200 : 3500)
  );

  return (
    <motion.h2
      className="h-min whitespace-nowrap text-center text-[10vw]"
      style={{
        scale,
      }}
      onMouseEnter={setMouseVariant.text}
      onMouseLeave={setMouseVariant.default}
    >
      I&apos;m Full stack <span className="text-gradient">developer</span>{' '}
      <br /> that creates amazing <br />
      <span className="text-gradient">web</span> based applications.
    </motion.h2>
  );
};

export default AboutHeader;
