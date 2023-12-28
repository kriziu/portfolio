import { motion } from 'framer-motion';
import { BsChevronUp } from 'react-icons/bs';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import ScrollOpacity from '@/common/components/ScrollOpacity';

import { useMouseVariant } from '../customMouse';

const Contact = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <section className="relative h-screen w-screen" id="contact">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <ScrollOpacity>
          <div className="flex flex-col items-center justify-center">
            <h1
              className="header -mt-10 w-full px-10 text-center sm:mt-0"
              onMouseEnter={setMouseVariant.text}
              onMouseLeave={setMouseVariant.default}
              id="contact"
            >
              Let&apos;s work together.
            </h1>

            <p className="mt-3 text-lg text-zinc-400 lg:mt-4 lg:text-xl">
              dziecielskibruno@gmail.com
            </p>
            <a
              className="primary-gradient scale-btn hover:hover-gradient mt-4 rounded-2xl p-2 px-4 text-lg transition-all duration-300 lg:mt-6 lg:p-3 lg:px-6 lg:text-xl"
              href="mailto:dziecielskibruno@gmail.com"
            >
              Contact me
            </a>
          </div>
        </ScrollOpacity>

        <motion.button
          className="absolute bottom-20 flex flex-col items-center rounded-lg bg-transparent p-2 font-sans text-lg transition-colors hover:bg-zinc-800"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <BsChevronUp />
          Back to top
        </motion.button>

        <div className="absolute bottom-0 h-20 w-full">
          <div className="flex h-full w-full items-center justify-center gap-5 text-lg text-zinc-400 lg:text-xl">
            <p>© {getCopyrightYear()} Bruno Dzięcielski</p>
            <a
              href="https://www.linkedin.com/in/bruno-dzi%C4%99cielski-1a0581211/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="scale-btn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/kriziu"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="scale-btn"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const getCopyrightYear = () => {
  const date = new Date();
  const year = date.getFullYear();

  return year;
};
