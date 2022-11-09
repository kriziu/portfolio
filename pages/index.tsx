import { useEffect } from 'react';

import About from '@/modules/about';
import Ballzone from '@/modules/ballzone';
import Collabio from '@/modules/collabio';
import Contact from '@/modules/contact';
import CustomMouse from '@/modules/customMouse';
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
    <>
      <CustomMouse />

      <Hero />

      <About />

      <Collabio />

      <ProjectsHeader />

      <Ballzone />

      <div className="h-[20vh] md:h-[50vh]" />

      <ProjectsList />

      <Contact />
    </>
  );
}
