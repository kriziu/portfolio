import ScrollOpacity from '@/common/components/ScrollOpacity';

import Project from './Project';

const ProjectsList = () => {
  return (
    <section
      className="mt-36 flex w-screen justify-center md:mt-0"
      id="projects"
    >
      <ScrollOpacity>
        <div className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
          <Project
            title="kriziu/shoes-ecommerce"
            description="Exemplary shop made in Next.JS and Strapi CMS containing fake products from Nike."
            github="https://github.com/kriziu/shoes-ecommerce"
            demo="https://shoes-ecommerce.herokuapp.com/"
            scrollTo
          />
          <Project
            title="kriziu/collabio"
            description="A real-time collaborative whiteboard made using Next.js and socket.io.
            Users can move on a board, draw lines, shapes, add images and
            download a drawing."
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
            description="An app where users scan QR Codes in popular places and get points that can be used to redeem some coupons. My part was to create backend and admin dashboard."
            github="https://github.com/gonciuu/scanningworld"
          />
          <Project
            title="kriziu/alcobusiness"
            description="A party drinking game similar to Monopoly but with my own rules. Players moves around the board and have to buy places to avoid drinking."
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

        <p className="mt-10 px-10 text-center text-2xl">
          For more projects checkout my{' '}
          <a
            className="text-gradient hover:hover-gradient"
            href="https://github.com/kriziu"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          .
        </p>
      </ScrollOpacity>
    </section>
  );
};

export default ProjectsList;
