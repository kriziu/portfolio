import ScrollOpacity from '@/common/components/ScrollOpacity';
import { useMouseVariant } from '@/modules/customMouse';

import Project from './Project';

const ProjectsList = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <div className="mt-36 flex h-full w-full items-start justify-center md:mt-0 md:items-center">
      <ScrollOpacity>
        <div className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
          <Project
            title="kriziu/shoes-ecommerce"
            description="Exemplary shop made in Next.JS and Strapi CMS containing fake products from Nike."
            github="https://github.com/kriziu/shoes-ecommerce"
            demo="https://shoes-ecommerce.herokuapp.com/"
          />
          <Project
            title="kriziu/collabio"
            description="Real-time collaborative whiteboard made using websockets."
            github="https://github.com/kriziu/collabio"
            demo="https://collabio-kriziu.herokuapp.com/"
          />
          <Project
            title="kriziu/ballzone"
            description="2D (top-down perspective) real-time game using WebRTC to connect. 2 teams where each players try to score a goal and win (like in soccer or hockey)."
            github="https://github.com/kriziu/ballzone"
            demo="https://ballzone.herokuapp.com/"
          />
          <Project
            title="gonciuu/scanningworld"
            description="An app where users scan QR Codes in popular places and get points for it. The points can be used to get some coupons. My part was to create backend and admin dashboard."
            github="https://github.com/gonciuu/scanningworld"
          />
          <Project
            title="kriziu/alcobusiness"
            description="A party drinking game similar to Monopoly but with my own rules. The game is played on a map of the city and the players have to buy places to avoid drinking."
            github="https://github.com/kriziu/alcobusiness"
            demo="https://alcobusiness.vercel.app/"
          />
          <Project
            title="kriziu/kripoll"
            description="Application that is similar to strawpoll.com. Create poll, vote and check results in real-time."
            github="https://github.com/kriziu/kripoll"
            demo="https://kripoll.herokuapp.com/"
          />
        </div>

        <p className="mt-10 text-center text-2xl">
          More projects on my{' '}
          <a
            className="text-gradient cursor-none"
            onMouseEnter={setMouseVariant.button}
            onMouseLeave={setMouseVariant.default}
            href="https://github.com/kriziu"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          .
        </p>
      </ScrollOpacity>
    </div>
  );
};

export default ProjectsList;
