'use client';

import { useEffect, useState } from 'react';

import { motion, useSpring } from 'framer-motion';

import { checkIsMobile } from '@/common/lib/checkIsMobile';

import { useMouseStore } from '../store/mouseStore';
import { MouseVariant } from '../types/mouse.types';

const TRANSITION = { type: 'spring', stiffness: 2000, damping: 100 };
const OFFSETS = {
  [MouseVariant.TEXT]: { x: -75, y: -75 },
  [MouseVariant.TECHNOLOGY]: { x: -75, y: -125 },
};
const VARIANTS = {
  [MouseVariant.TEXT]: {
    height: 150,
    width: 150,
  },
  [MouseVariant.TECHNOLOGY]: {
    height: 150,
    width: 150,
    backgroundImage:
      'linear-gradient(rgba(255,255,255, 1), rgba(255,255,255, 1))',
  },
};
const HIDDEN_MOUSE_VARIANTS = [MouseVariant.DEFAULT, MouseVariant.TECHNOLOGY];

export default function CircleMouse() {
  const { mouseVariant, text } = useMouseStore((store) => ({
    mouseVariant: store.variant,
    text: store.text,
  }));

  const [isTouchDevice, setIstouchDevice] = useState(false);

  const mouse = {
    x: useSpring(-100, TRANSITION),
    y: useSpring(-100, TRANSITION),
  };

  useEffect(() => {
    if (HIDDEN_MOUSE_VARIANTS.includes(mouseVariant)) {
      document.body.style.cursor = 'default';
    } else {
      document.body.style.cursor = 'none';
    }
  }, [mouseVariant]);

  useEffect(() => {
    if (checkIsMobile()) setIstouchDevice(true);

    const updateMousePosition = (e: MouseEvent) => {
      const currentOffset = OFFSETS[mouseVariant as keyof typeof OFFSETS] ?? {
        x: 0,
        y: 0,
      };

      mouse.x.set(e.clientX + currentOffset.x);
      mouse.y.set(e.clientY + currentOffset.y);
    };

    document.addEventListener('mousemove', updateMousePosition);

    return () => document.removeEventListener('mousemove', updateMousePosition);
  }, [mouseVariant, mouse.x, mouse.y]);

  if (isTouchDevice) return null;

  return (
    <motion.div
      animate={mouseVariant}
      variants={VARIANTS}
      className="primary-gradient pointer-events-none fixed left-0 top-0 z-50 flex h-0 w-0 items-center justify-center whitespace-nowrap rounded-full text-center text-xl text-black mix-blend-difference"
      style={{ ...mouse }}
      transition={TRANSITION}
    >
      {mouseVariant === MouseVariant.TECHNOLOGY && text}
    </motion.div>
  );
}
