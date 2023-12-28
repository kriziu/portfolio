import { BsGithub, BsGlobe } from 'react-icons/bs';

interface Props {
  title: string;
  description: string;
  github?: string;
  demo?: string;
  scrollTo?: boolean;
}

export default function Project({
  title,
  demo,
  description,
  github,
  scrollTo,
}: Props) {
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
            className="project-btn"
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
            className="project-btn"
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
}
