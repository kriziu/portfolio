import { useMouseVariant } from '../customMouse';
import AboutHeader from './components/Header';
import Skills from './components/Skills';

const About = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <div className="flex h-full w-full flex-col items-center overflow-hidden pt-36">
      <AboutHeader />

      <p
        className="header mt-36 block px-8 text-center sm:px-16 md:mt-48 lg:w-1/2 lg:px-0 xl:mt-96"
        onMouseEnter={setMouseVariant.text}
        onMouseLeave={setMouseVariant.default}
      >
        With over 2 years of experience, I use the latest technologies to make
        fascinating things.
      </p>

      <Skills />
    </div>
  );
};

export default About;
