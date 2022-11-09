import { motion } from 'framer-motion';

import Header from './components/Header';
import ScrollIndicator from './components/ScrollIndicator';

const Hero = () => {
  return (
    <section
      className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden"
      id="hero"
    >
      <motion.div
        className="absolute top-8 flex items-center gap-5 font-sans text-lg md:gap-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.65 }}
      >
        <div className="h-px bg-zinc-600 sm:w-36 md:w-48 lg:w-72" />
        <button
          onClick={() =>
            document
              .getElementById('projects')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          className="scale-btn"
        >
          Projects
        </button>
        <a
          className="scale-btn"
          href="pdf/brunodziecielski.pdf"
          target="_blank"
        >
          Resume
        </a>
        <button
          onClick={() =>
            document
              .getElementById('contact')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          className="scale-btn"
        >
          Contact
        </button>
        <div className="h-px bg-zinc-600 sm:w-36 md:w-48 lg:w-72" />
      </motion.div>

      <div className="flex w-max flex-1 flex-col">
        <div className="flex h-[55%] items-end">
          <Header />
        </div>

        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
