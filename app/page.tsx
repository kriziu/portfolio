'use client';

import { useEffect } from 'react';

import { MotionConfig } from 'framer-motion';

import About from '@/modules/about';
import Ballzone from '@/modules/ballzone';
import Collabio from '@/modules/collabio';
import Contact from '@/modules/contact';
import CircleMouse from '@/modules/customMouse';
import Hero from '@/modules/hero';
import ProjectsList, { ProjectsHeader } from '@/modules/projects';

export default function HomePage() {
  useEffect(() => {
    const scrollTop = () => {
      window.scrollTo(0, 0);
    };

    window.onunload = scrollTop;
  }, []);

  return (
    <MotionConfig transition={{ ease: [0.6, 0, 0, 0.9], duration: 1 }}>
      <CircleMouse />
      <Hero />
      <About />
      <Collabio />
      <ProjectsHeader />
      <Ballzone />
      <ProjectsList />
      <Contact />
    </MotionConfig>
  );
}
