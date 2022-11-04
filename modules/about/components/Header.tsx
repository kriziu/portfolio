import { motion } from 'framer-motion';

import ScrollOpacity from '@/common/components/ScrollOpacity';
import { useMouseVariant } from '@/modules/customMouse';

const AboutHeader = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <div className="flex h-full w-full items-center justify-center">
      <ScrollOpacity>
        <motion.h2
          className="header h-min px-5 text-center"
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
