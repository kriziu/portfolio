import { motion } from 'framer-motion';

import { useScrollY } from '@/common/hooks/useScrollY';
import { useWindowSize } from '@/common/hooks/useWindowSize';
import { useMouseVariant } from '@/modules/customMouse';
import ScrollOpacity from '@/common/components/ScrollOpacity';

const AboutHeader = () => {
  const { setMouseVariant } = useMouseVariant();
  const scrolled = useScrollY();

  const { width } = useWindowSize();

  const mobile = width < 768;

  // const scale = Math.max(
  //   0,
  //   (mobile ? 1.3 : 1) - scrolled / (mobile ? 1400 : 3500)
  // );

  return (
    <div className="flex h-full w-full items-center justify-center">
      <ScrollOpacity>
        <motion.h2
          className="header h-min text-center"
          onMouseEnter={setMouseVariant.text}
          onMouseLeave={setMouseVariant.default}
        >
          I&apos;m Bruno, <br />a Full stack{' '}
          <span className="text-gradient">Developer</span> <br /> that creates
          interactive <br />
          <span className="text-gradient">web</span> applications.
        </motion.h2>
      </ScrollOpacity>
    </div>
  );
};

export default AboutHeader;
