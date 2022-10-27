import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import { useMouseVariant } from '../hooks/useMouseVariant';
import { MouseVariant } from '../types/mouse.type';

const CircleMouse = () => {
  const { mouseVariant } = useMouseVariant();

  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateMousePosition);

    return () => document.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const variants: Record<MouseVariant, {}> = {
    [MouseVariant.DEFAULT]: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    [MouseVariant.TEXT]: {
      height: 150,
      width: 150,

      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={mouseVariant}
      className="pointer-events-none fixed top-0 left-0 z-50 h-8 w-8 rounded-full bg-violet-600 mix-blend-difference"
      transition={{ type: 'spring', stiffness: 2000, damping: 100 }}
    />
  );
};

export default CircleMouse;
