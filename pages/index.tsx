import About from '@/modules/about';
import Ballzone from '@/modules/ballzone';
import Collabio from '@/modules/collabio';
import Contact from '@/modules/contact';
import CustomMouse from '@/modules/customMouse';
import Hero from '@/modules/hero';
import ProjectsList, { ProjectsHeader } from '@/modules/projects';

export default function HomePage() {
  return (
    <>
      <CustomMouse />

      <Hero />

      <About />

      <Collabio />

      <ProjectsHeader />

      <Ballzone />

      {/*



      <ProjectsHeader />



      <ProjectsList />

      <Contact /> */}
    </>
  );
}
