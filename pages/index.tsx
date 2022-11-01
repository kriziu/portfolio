import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import About from '@/modules/about';
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

        <ParallaxLayer offset={1} factor={2}>
          <About />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
