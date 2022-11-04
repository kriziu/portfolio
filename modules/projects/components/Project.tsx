import { BsGithub, BsGlobe } from 'react-icons/bs';

import { useMouseVariant } from '@/modules/customMouse';

interface Props {
  title: string;
  description: string;
  github?: string;
  demo?: string;
  scrollTo?: boolean;
}

const Project = ({ title, demo, description, github, scrollTo }: Props) => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <div
      className="flex h-max w-72 flex-col rounded-3xl bg-[#1f1f1f] p-5 md:h-64 lg:h-[21rem] lg:w-96 lg:p-10"
      id={scrollTo ? 'projects' : undefined}
    >
      <p className="text-lg lg:text-2xl">{title}</p>

      <div className="my-4 h-px w-full bg-zinc-500 lg:my-5" />

      <p className="flex-1 font-sans text-sm text-zinc-400 lg:text-base">
        {description}
      </p>

      <div className="mt-3 flex gap-3 md:mt-0">
        {github && (
          <a
            className="flex cursor-none items-center justify-center gap-2 rounded-2xl bg-zinc-500 px-6 py-2 font-sans font-bold text-black"
            onMouseEnter={setMouseVariant.button}
            onMouseLeave={setMouseVariant.default}
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
            Github
          </a>
        )}

        {demo && (
          <a
            className="flex cursor-none items-center justify-center gap-2 rounded-2xl bg-zinc-500 px-6 py-2 font-sans font-bold text-black"
            onMouseEnter={setMouseVariant.button}
            onMouseLeave={setMouseVariant.default}
            href={demo}
            target="_blank"
            rel="noreferrer"
          >
            <BsGlobe />
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
