import { useMouseVariant } from '../customMouse';
import AboutHeader from './components/Header';
import Skills from './components/Skills';

const About = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <div className="flex h-full w-full flex-col items-center overflow-hidden pt-36">
      <AboutHeader />

      <p
        className="header mt-96 w-1/2 text-center text-6xl"
        onMouseEnter={setMouseVariant.text}
        onMouseLeave={setMouseVariant.default}
      >
        With over 2 years of experience in web development, I use the latest
        technologies to make fascinating things.
      </p>

      <Skills />
    </div>
  );
};

export default About;
