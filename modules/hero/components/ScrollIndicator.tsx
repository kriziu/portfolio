import { motion } from 'framer-motion';

import { itemVariant } from '../animations/scrollAnimation';

const ScrollIndicator = () => {
  return (
    <motion.div
      className="mt-16 flex flex-col items-center gap-16"
      transition={{
        staggerChildren: 0.1,
        delayChildren: 0.5,
      }}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="h-[3px] w-[80%] bg-zinc-500"
        variants={itemVariant}
      />
      <motion.div
        className="h-[3px] w-[50%] bg-zinc-500"
        variants={itemVariant}
      />
      <motion.div
        className="h-[3px] w-[35%] bg-zinc-500"
        variants={itemVariant}
      />
      <motion.div
        className="h-[3px] w-[25%] bg-zinc-500"
        variants={itemVariant}
      />
      <motion.div
        className="h-[3px] w-[18%] bg-zinc-500"
        variants={itemVariant}
      />
      <motion.div
        className="h-[3px] w-[12%] bg-zinc-500"
        variants={itemVariant}
      />
      <motion.div
        className="h-[3px] w-[7%] bg-zinc-500"
        variants={itemVariant}
      />
      <motion.div
        className="h-[3px] w-[4%] bg-zinc-500"
        variants={itemVariant}
      />
    </motion.div>
  );
};

export default ScrollIndicator;
