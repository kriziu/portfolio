import { useState } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { useMouseVariant } from '@/modules/customMouse';
import shoesImage from '@/public/images/shoesecommerce.png';

const Project = () => {
  const { setMouseVariant } = useMouseVariant();

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl"
      onMouseEnter={() => {
        setIsHovered(true);
        setMouseVariant.button();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setMouseVariant.default();
      }}
    >
      <motion.div animate={{ scale: isHovered ? 1.03 : 1 }}>
        <Image
          src={shoesImage}
          alt="Shoes ecommerce project"
          height={(window.innerHeight / 5) * 4}
          placeholder="blur"
        />
      </motion.div>
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black/70 via-black/70 to-transparent"
      >
        <div className="absolute bottom-0 left-0 flex p-24">
          <div>
            <p className="header">Shoes ecommerce</p>
            <p className="sans w-1/2 text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              enim dicta ea laborum vero iure deserunt? Autem deleniti maiores
              sit, molestiae hic dolorum earum placeat qui obcaecati id modi
              incidunt!
            </p>
          </div>
          <div>
            <p className="text-3xl">Built using:</p>
            <ul className="sans ml-5 list-disc">
              <li>Next.js</li>
              <li>React</li>
              <li>Typescript</li>
              <li>Styled components</li>
              <li>Framer motion</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
