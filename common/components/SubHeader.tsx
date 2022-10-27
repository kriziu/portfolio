import { motion } from 'framer-motion';

import { useScrollY } from '../hooks/useScrollY';

const SubHeader = () => {
  const scrolled = useScrollY();

  return (
    <div className="z-50 flex h-screen w-full flex-col items-center overflow-hidden pt-12">
      <motion.p
        className=" whitespace-nowrap text-center text-6xl uppercase"
        style={{
          fontSize: `calc(max(10vw, 14vh) - ${scrolled / 10}px)`,
        }}
      >
        Lorem ipsum <br className="sm:hidden" />
        <span className="text-violet-600">dolor</span>{' '}
        <br className="hidden sm:block" />
        sit amet.
      </motion.p>
    </div>
  );
};

export default SubHeader;
