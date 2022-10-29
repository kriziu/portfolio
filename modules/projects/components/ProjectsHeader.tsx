import { motion } from 'framer-motion';

import { useScrollY } from '@/common/hooks/useScrollY';
import { useMouseVariant } from '@/modules/customMouse';

const ProjectsHeader = () => {
  const { setMouseVariant } = useMouseVariant();
  const scrolled = useScrollY();

  return (
    <div className="flex h-full w-full justify-center overflow-hidden">
      <motion.h2
        className="mt-2 whitespace-nowrap text-center text-6xl"
        style={{
          fontSize: `calc(max(10vw, 14vh) - ${scrolled / 10}px)`,
        }}
        onMouseEnter={setMouseVariant.text}
        onMouseLeave={setMouseVariant.default}
      >
        Projects I am <span className="text-violet-600">proud</span> of:
      </motion.h2>
    </div>
  );
};

export default ProjectsHeader;
