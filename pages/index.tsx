import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import About, { AboutHeader } from '@/modules/about';
import Game, { BallzoneHeader } from '@/modules/ballzone';
import Windows, { CollabioHeader } from '@/modules/collabio';
import CustomMouse from '@/modules/customMouse';
import Hero from '@/modules/hero';
import { ProjectsHeader } from '@/modules/projects';

export default function HomePage() {
  return (
    <>
      <CustomMouse />

      <Parallax pages={10} id="__parallax">
        <ParallaxLayer>
          <Hero />
        </ParallaxLayer>

        <ParallaxLayer offset={1}>
          <AboutHeader />
        </ParallaxLayer>

        <ParallaxLayer offset={2}>
          <About />
        </ParallaxLayer>

        <ParallaxLayer offset={3} className="pointer-events-none">
          <CollabioHeader />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 3.5, end: 5 }}
          className="pointer-events-none"
        >
          <Windows windowLength={1.5} />
        </ParallaxLayer>

        <ParallaxLayer offset={5.8}>
          <BallzoneHeader />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 6.3, end: 7.8 }}>
          <ProjectsHeader />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 6.3, end: 7 }}>
          <Game />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
