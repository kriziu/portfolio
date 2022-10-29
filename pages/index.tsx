import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import CustomMouse from '@/modules/customMouse';
import Header from '@/modules/header';
import { ProjectList, ProjectsHeader } from '@/modules/projects';
import Skills from '@/modules/skills';

export default function HomePage() {
  return (
    <>
      <CustomMouse />
      <Parallax pages={10} id="__parallax">
        <ParallaxLayer>
          <Header />
        </ParallaxLayer>

        <ParallaxLayer offset={1}>
          <ProjectsHeader />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1.15, end: 3.78 }}>
          <ProjectList />
        </ParallaxLayer>

        <ParallaxLayer offset={5}>
          <Skills />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
