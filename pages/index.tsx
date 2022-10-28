import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import CustomMouse from '@/modules/customMouse';
import Header from '@/modules/header';
import { ProjectList, ProjectsHeader } from '@/modules/projects';

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

        <ParallaxLayer sticky={{ start: 1.35, end: 3.35 }}>
          <ProjectList />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
