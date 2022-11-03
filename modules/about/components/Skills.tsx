import { motion } from 'framer-motion';
import Image from 'next/image';

import { useMouseVariant } from '@/modules/customMouse';
import expressSVG from '@/public/svg/express.svg';
import framerMotionSVG from '@/public/svg/framermotion.svg';
import graphQLSVG from '@/public/svg/graphql.svg';
import mongoDBSVG from '@/public/svg/mongodb.svg';
import nestJSVG from '@/public/svg/nestjs.svg';
import nextSVG from '@/public/svg/nextjs.svg';
import nodeSVG from '@/public/svg/nodejs.svg';
import reactSVG from '@/public/svg/react.svg';
import recoilSVG from '@/public/svg/recoiljs.svg';
import socketIoSVG from '@/public/svg/socketio.svg';
import tailwindSVG from '@/public/svg/tailwindcss.svg';
import typescriptSVG from '@/public/svg/typescript.svg';
import webRTCSVG from '@/public/svg/webrtc.svg';

const svgClassName = 'h-10 md:h-12 lg:h-16 w-max';

const Skills = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <motion.div className="mb-12 flex w-full flex-wrap items-center justify-center gap-10 px-3 sm:mb-24 sm:w-4/5 sm:px-0 lg:gap-16 xl:w-3/5">
      <Image
        src={typescriptSVG}
        alt="TypeScript"
        onMouseEnter={() => setMouseVariant.technology('TypeScript')}
        onMouseLeave={setMouseVariant.default}
        className={svgClassName}
        priority
      />
      <Image
        src={nextSVG}
        alt="Next.js"
        onMouseEnter={() => setMouseVariant.technology('Next.js')}
        onMouseLeave={setMouseVariant.default}
        className={svgClassName}
        priority
      />
      <Image
        src={reactSVG}
        alt="React.js"
        onMouseEnter={() => setMouseVariant.technology('React.js')}
        onMouseLeave={setMouseVariant.default}
        className={svgClassName}
        priority
      />
      <Image
        src={recoilSVG}
        alt="Recoil.js"
        onMouseEnter={() => setMouseVariant.technology('Recoil.js')}
        onMouseLeave={setMouseVariant.default}
        className={svgClassName}
        priority
      />

      <Image
        src={nestJSVG}
        alt="Nest.js"
        onMouseEnter={() => setMouseVariant.technology('Nest.js')}
        onMouseLeave={setMouseVariant.default}
        className={svgClassName}
        priority
      />
      <Image
        src={expressSVG}
        alt="Express.js"
        onMouseEnter={() => setMouseVariant.technology('Express.js')}
        onMouseLeave={setMouseVariant.default}
        className={svgClassName}
        priority
      />
      <Image
        src={nodeSVG}
        alt="Node.js"
        onMouseEnter={() => setMouseVariant.technology('Node.js')}
        onMouseLeave={setMouseVariant.default}
        className={svgClassName}
        priority
      />

      <Image
        src={mongoDBSVG}
        alt="MongoDB"
        onMouseEnter={() => setMouseVariant.technology('MongoDB')}
        onMouseLeave={setMouseVariant.default}
        className={svgClassName}
        priority
      />
      <Image
        src={graphQLSVG}
        alt="GraphQL"
        onMouseEnter={() => setMouseVariant.technology('GraphQL')}
        onMouseLeave={setMouseVariant.default}
        className={svgClassName}
        priority
      />
      <Image
        src={socketIoSVG}
        alt="Socket.io"
        onMouseEnter={() => setMouseVariant.technology('Socket.io')}
        onMouseLeave={setMouseVariant.default}
        className={svgClassName}
        priority
      />
      <Image
        src={tailwindSVG}
        alt="Tailwind CSS"
        onMouseEnter={() => setMouseVariant.technology('TailwindCSS')}
        onMouseLeave={setMouseVariant.default}
        className="h-7 w-max lg:h-10"
        priority
      />
      <Image
        src={framerMotionSVG}
        alt="Framer-Motion"
        onMouseEnter={() => setMouseVariant.technology('Framer-motion')}
        onMouseLeave={setMouseVariant.default}
        className={svgClassName}
        priority
      />
      <Image
        src={webRTCSVG}
        alt="WebRTC"
        onMouseEnter={() => setMouseVariant.technology('WebRTC')}
        onMouseLeave={setMouseVariant.default}
        className="h-7 w-max lg:h-10"
        priority
      />
    </motion.div>
  );
};

export default Skills;
