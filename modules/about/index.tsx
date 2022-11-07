import AboutHeader from './components/Header';
import Intro from './components/Intro';
import Skills from './components/Skills';

const AboutSkills = () => {
  return (
    <>
      <AboutHeader />
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <Skills />

        <Intro />
      </div>
    </>
  );
};

export default AboutSkills;
