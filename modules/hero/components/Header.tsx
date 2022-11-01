import { motion } from 'framer-motion';

import { useMouseVariant } from '@/modules/customMouse';

import { wordAnimation } from '../animations/headerAnimation';

const Header = () => {
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
      <motion.span variants={wordAnimation}>making</motion.span> <br />
      <motion.span variants={wordAnimation} className="text-gradient">
        things
      </motion.span>{' '}
      <motion.span variants={wordAnimation}>the</motion.span>{' '}
      <motion.span variants={wordAnimation}>right</motion.span>{' '}
      <motion.span variants={wordAnimation}>way.</motion.span>
    </motion.h1>
  );
};

export default Header;
