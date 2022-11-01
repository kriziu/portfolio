import { useMouseVariant } from '../customMouse';
import AboutHeader from './components/Header';
import Skills from './components/Skills';

const About = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <div className="flex h-full w-full flex-col items-center overflow-hidden pt-36">
      <AboutHeader />

      <p
        className="header mt-72 block px-8 text-center sm:px-16 md:mt-96 lg:w-2/3 lg:px-0 2xl:w-[75rem]"
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
