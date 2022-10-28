import { motion } from 'framer-motion';

import { useScrollY } from '@/common/hooks/useScrollY';

const ProjectsHeader = () => {
  const scrolled = useScrollY();

  return (
    <div className="flex h-full w-full justify-center overflow-hidden">
      <motion.h2
        className="mt-2 whitespace-nowrap text-center text-6xl uppercase"
        style={{
          fontSize: `calc(max(10vw, 14vh) - ${scrolled / 10}px)`,
        }}
      >
        Lorem ipsum <br className="sm:hidden" />
        <span className="text-violet-600">dolor</span>{' '}
        <br className="hidden sm:block" />
        sit amet.
      </motion.h2>
    </div>
  );
};

export default ProjectsHeader;
