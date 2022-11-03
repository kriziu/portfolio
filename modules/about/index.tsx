import AboutHeader from './components/Header';
import Intro from './components/Intro';
import Skills from './components/Skills';

export { AboutHeader };

const AboutSkills = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Skills />

      <Intro />
    </div>
  );
};

export default AboutSkills;
