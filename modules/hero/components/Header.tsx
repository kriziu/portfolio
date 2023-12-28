import { motion } from 'framer-motion';

import { useMouseVariant } from '@/modules/customMouse';

import { wordAnimation } from '../animations/headerAnimation';

export default function Header() {
  const { setMouseVariant } = useMouseVariant();

  return (
    <motion.h1
      className="header text-center"
      onMouseEnter={setMouseVariant.text}
      onMouseLeave={setMouseVariant.default}
      initial="hidden"
      animate="visible"
      transition={{
        staggerChildren: 0.05,
      }}
    >
      <motion.span variants={wordAnimation}>A</motion.span>{' '}
      <motion.span variants={wordAnimation}>passionate</motion.span>{' '}
      <motion.span variants={wordAnimation}>dev,</motion.span>{' '}
      <br className="block md:hidden" />
      <motion.span variants={wordAnimation}>making</motion.span>{' '}
      <br className="hidden md:block" />
      <motion.span variants={wordAnimation} className="text-gradient">
        things
      </motion.span>{' '}
      <br className="block md:hidden" />
      <motion.span variants={wordAnimation}>the</motion.span>{' '}
      <motion.span variants={wordAnimation}>right</motion.span>{' '}
      <motion.span variants={wordAnimation}>way.</motion.span>
    </motion.h1>
  );
}
