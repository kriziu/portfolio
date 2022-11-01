import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import About, { AboutHeader } from '@/modules/about';
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

        <ParallaxLayer sticky={{ start: 3, end: 4 }}>
          <div className="header flex h-full w-full items-center justify-center">
            Lorem ipsum
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
