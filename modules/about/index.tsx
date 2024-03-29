import AboutHeader from './components/Header';
import Intro from './components/Intro';
import Skills from './components/Skills';

export default function AboutSkills() {
  return (
    <section id="about" className="mb-48 lg:mb-0">
      <AboutHeader />
      <div className="flex flex-col items-center">
        <Skills />
        <Intro />
      </div>
    </section>
  );
}
