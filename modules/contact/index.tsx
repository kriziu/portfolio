import { FaLinkedin, FaGithub } from 'react-icons/fa';

import ScrollOpacity from '@/common/components/ScrollOpacity';

import { useMouseVariant } from '../customMouse';

const Contact = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="-mt-36 flex w-full flex-1 items-center justify-center">
        <ScrollOpacity>
          <div className="flex flex-col items-center justify-center">
            <h1
              className="header"
              onMouseEnter={setMouseVariant.text}
              onMouseLeave={setMouseVariant.default}
              id="contact"
            >
              Let&apos;s work together.
            </h1>

            <a
              className="primary-gradient mt-5 cursor-none rounded-2xl p-2 px-4 text-lg lg:mt-10 lg:p-3 lg:px-6 lg:text-xl"
              onMouseEnter={setMouseVariant.button}
              onMouseLeave={setMouseVariant.default}
              href="mailto:dziecielskibruno@gmail.com"
            >
              Contact me
            </a>

            <p className="mt-2 text-lg text-zinc-500 lg:mt-4 lg:text-xl">
              dziecielskibruno@gmail.com
            </p>
          </div>
        </ScrollOpacity>
      </div>

      <div className="h-36 w-full">
        <div className="flex h-full w-full items-center justify-center gap-5 text-lg text-zinc-500 lg:text-xl">
          <p>© 2022 Bruno Dzięcielski</p>
          <a
            onMouseEnter={setMouseVariant.button}
            onMouseLeave={setMouseVariant.default}
            href="https://www.linkedin.com/in/bruno-dzi%C4%99cielski-1a0581211/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            onMouseEnter={setMouseVariant.button}
            onMouseLeave={setMouseVariant.default}
            href="https://github.com/kriziu"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
