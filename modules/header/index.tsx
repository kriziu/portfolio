import { useMouseVariant } from '@/modules/customMouse';

const Header = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden p-7">
      <div>
        <p className="mb-5 text-lg text-zinc-500 sm:text-xl">
          Bruno Dzięcielski - Full-stack developer
        </p>
        <h1
          className="header"
          onMouseEnter={setMouseVariant.text}
          onMouseLeave={setMouseVariant.default}
        >
          A passionate, focused on <br />
          making <span className="text-gradient">things</span> the right way.
        </h1>

        <p className="mt-10 text-lg text-zinc-500 sm:text-xl">
          I&apos;m Bruno Dzięcielski, a Next.js developer with over two years of
          experience in <br />
          making web apps.
        </p>
      </div>
    </div>
  );
};

export default Header;
