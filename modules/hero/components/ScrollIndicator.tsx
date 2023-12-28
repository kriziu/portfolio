import { motion } from 'framer-motion';

import { itemVariant } from '../animations/scrollAnimation';

export default function ScrollIndicator() {
  return (
    <motion.div
      className="flex w-full flex-1 flex-col items-center justify-around"
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
}
