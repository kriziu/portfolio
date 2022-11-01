import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import { useMouseVariant } from '../hooks/useMouseVariant';
import { MouseVariant } from '../types/mouse.type';

const CircleMouse = () => {
  const { mouseVariant, text } = useMouseVariant();

  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [touchDevice, setTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(any-hover: none)').matches) setTouchDevice(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateMousePosition);

    return () => document.removeEventListener('mousemove', updateMousePosition);
  }, []);

  if (touchDevice) return null;

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

      mixBlendMode: 'difference',
    },
    [MouseVariant.BUTTON]: {
      height: 100,
      width: 100,

      x: mousePosition.x - 50,
      y: mousePosition.y - 50,

      mixBlendMode: 'difference',
      backgroundImage:
        'linear-gradient(rgba(255,255,255, 1), rgba(255,255,255, 1))',
    },
    [MouseVariant.TECHNOLOGY]: {
      height: 150,
      width: 150,

      x: mousePosition.x - 75,
      y: mousePosition.y - 75,

      mixBlendMode: 'difference',
      backgroundImage:
        'linear-gradient(rgba(255,255,255, 1), rgba(255,255,255, 1))',
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={mouseVariant}
      className="primary-gradient pointer-events-none fixed top-0 left-0 z-50 flex h-8 w-8 items-center justify-center rounded-full text-center text-xl text-black"
      transition={{ type: 'spring', stiffness: 2000, damping: 100 }}
    >
      {mouseVariant === MouseVariant.BUTTON && 'Click'}
      {mouseVariant === MouseVariant.TECHNOLOGY && text}
    </motion.div>
  );
};

export default CircleMouse;
