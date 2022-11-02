import { useMouseVariant } from '../customMouse';
import AboutHeader from './components/Header';
import Skills from './components/Skills';

export { AboutHeader };

const AboutSkills = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center md:mt-36">
      <p
        className="header block px-8 text-center sm:px-16 lg:w-2/3 lg:px-0 2xl:w-[75rem]"
        onMouseEnter={setMouseVariant.text}
        onMouseLeave={setMouseVariant.default}
      >
        With over 2 years of experience, I use the latest technologies to make
        fascinating things...
      </p>

      <Skills />
    </div>
  );
};

export default AboutSkills;
