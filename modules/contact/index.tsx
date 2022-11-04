import { RefObject } from 'react';

import { IParallax } from '@react-spring/parallax';
import { motion } from 'framer-motion';
import { BsChevronUp } from 'react-icons/bs';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import ScrollOpacity from '@/common/components/ScrollOpacity';

import { useMouseVariant } from '../customMouse';

const Contact = ({ parallaxRef }: { parallaxRef: RefObject<IParallax> }) => {
  const { setMouseVariant } = useMouseVariant();

  return (
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
            className="primary-gradient mt-4 cursor-none rounded-2xl p-2 px-4 text-lg lg:mt-6 lg:p-3 lg:px-6 lg:text-xl"
            onMouseEnter={setMouseVariant.button}
            onMouseLeave={setMouseVariant.default}
            href="mailto:dziecielskibruno@gmail.com"
          >
            Contact me
          </a>
        </div>
      </ScrollOpacity>

      <motion.button
        className="absolute bottom-20 flex flex-col items-center font-sans text-lg"
        onMouseEnter={setMouseVariant.button}
        onMouseLeave={setMouseVariant.default}
        onClick={() => parallaxRef.current?.scrollTo(0)}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <BsChevronUp />
        Back to top
      </motion.button>

      <div className="absolute bottom-0 h-20 w-full">
        <div className="flex h-full w-full items-center justify-center gap-5 text-lg text-zinc-400 lg:text-xl">
          <p>© 2022 Bruno Dzięcielski</p>
          <a
            onMouseEnter={setMouseVariant.button}
            onMouseLeave={setMouseVariant.default}
            href="https://www.linkedin.com/in/bruno-dzi%C4%99cielski-1a0581211/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            onMouseEnter={setMouseVariant.button}
            onMouseLeave={setMouseVariant.default}
            href="https://github.com/kriziu"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
