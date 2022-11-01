import { motion } from 'framer-motion';
import Image from 'next/image';

import { useScrollY } from '@/common/hooks/useScrollY';
import { useMouseVariant } from '@/modules/customMouse';
import expressSVG from '@/public/svg/express.svg';
import framerMotionSVG from '@/public/svg/framermotion.svg';
import graphQLSVG from '@/public/svg/graphql.svg';
import mongoDBSVG from '@/public/svg/mongodb.svg';
import nestJSVG from '@/public/svg/nestjs.svg';
import nextSVG from '@/public/svg/nextjs.svg';
import nodeSVG from '@/public/svg/nodejs.svg';
import reactSVG from '@/public/svg/react.svg';
import socketIoSVG from '@/public/svg/socketio.svg';
import tailwindSVG from '@/public/svg/tailwindcss.svg';
import typescriptSVG from '@/public/svg/typescript.svg';
import webRTCSVG from '@/public/svg/webrtc.svg';

const Skills = () => {
  const { setMouseVariant } = useMouseVariant();

  const scrollY = useScrollY();

  return (
    <div className="mt-24">
      <motion.div
        className="mt-24 flex w-full items-center justify-center gap-16 overflow-hidden"
        style={{ x: 1700 - scrollY }}
      >
        <Image
          src={typescriptSVG}
          alt="React.js"
          width={80}
          onMouseEnter={() => setMouseVariant.technology('Typescript')}
          onMouseLeave={setMouseVariant.default}
        />
        <Image
          src={nextSVG}
          alt="React.js"
          width={180}
          onMouseEnter={() => setMouseVariant.technology('Next.js')}
          onMouseLeave={setMouseVariant.default}
        />
        <Image
          src={reactSVG}
          alt="React.js"
          height={110}
          onMouseEnter={() => setMouseVariant.technology('React')}
          onMouseLeave={setMouseVariant.default}
        />
        <Image
          src={nestJSVG}
          alt="React.js"
          width={110}
          onMouseEnter={() => setMouseVariant.technology('Nest.js')}
          onMouseLeave={setMouseVariant.default}
        />
        <Image
          src={expressSVG}
          alt="React.js"
          height={70}
          onMouseEnter={() => setMouseVariant.technology('Express.js')}
          onMouseLeave={setMouseVariant.default}
        />
        <Image
          src={nodeSVG}
          alt="React.js"
          width={160}
          onMouseEnter={() => setMouseVariant.technology('Node.js')}
          onMouseLeave={setMouseVariant.default}
        />
      </motion.div>
      <motion.div
        className="mt-24 flex w-full items-center justify-center gap-16 overflow-hidden"
        style={{ x: 1700 - scrollY }}
      >
        <Image
          src={mongoDBSVG}
          alt="React.js"
          width={280}
          onMouseEnter={() => setMouseVariant.technology('MongoDB')}
          onMouseLeave={setMouseVariant.default}
        />
        <Image
          src={graphQLSVG}
          alt="React.js"
          width={100}
          onMouseEnter={() => setMouseVariant.technology('GraphQL')}
          onMouseLeave={setMouseVariant.default}
        />
        <Image
          src={socketIoSVG}
          alt="React.js"
          width={110}
          onMouseEnter={() => setMouseVariant.technology('Socket.io')}
          onMouseLeave={setMouseVariant.default}
        />
        <Image
          src={tailwindSVG}
          alt="React.js"
          width={350}
          onMouseEnter={() => setMouseVariant.technology('TailwindCSS')}
          onMouseLeave={setMouseVariant.default}
        />
        <Image
          src={framerMotionSVG}
          alt="React.js"
          width={50}
          onMouseEnter={() => setMouseVariant.technology('Framer-motion')}
          onMouseLeave={setMouseVariant.default}
        />
        <Image
          src={webRTCSVG}
          alt="React.js"
          width={230}
          onMouseEnter={() => setMouseVariant.technology('WebRTC')}
          onMouseLeave={setMouseVariant.default}
        />
      </motion.div>
    </div>
  );
};

export default Skills;
