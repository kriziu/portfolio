import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import About, { AboutHeader } from '@/modules/about';
import Windows, { CollabioHeader } from '@/modules/collabio';
import CustomMouse from '@/modules/customMouse';
import Hero from '@/modules/hero';

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

        <ParallaxLayer offset={3}>
          <CollabioHeader />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 3.5, end: 5 }}>
          <Windows />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
