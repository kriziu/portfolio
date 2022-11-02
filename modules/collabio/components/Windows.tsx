import { useRef, useState } from 'react';

import { motion } from 'framer-motion';

import { useScrollY } from '@/common/hooks/useScrollY';
import { useWindowSize } from '@/common/hooks/useWindowSize';

import SingleWindow from './SingleWindow';

const Windows = ({ windowLength = 1 }: { windowLength?: number }) => {
  const { height } = useWindowSize();
  const scrollY = useScrollY();

  const [client1Ctx, setClient1Ctx] = useState<CanvasRenderingContext2D>();
  const [client2Ctx, setClient2Ctx] = useState<CanvasRenderingContext2D>();

  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [userMoves, setUserMoves] = useState<{ x: number; y: number }[][]>([]);

  const startScroll = useRef(0);

  const progress =
    startScroll.current &&
    Math.round(
      Math.min(
        100,
        Math.max(
          0,
          ((scrollY - startScroll.current) / (windowLength * height - 100)) *
            100
        )
      ) * 100
    ) / 100;

  return (
    <motion.div
      className="flex h-full w-full flex-col items-center justify-center gap-10 py-24 px-10 xl:flex-row"
      onViewportEnter={() => {
        if (startScroll.current === 0) {
          startScroll.current = scrollY + height;
        }
      }}
      onViewportLeave={() => {
        if (scrollY <= startScroll.current) {
          startScroll.current = 0;
        }
      }}
    >
      <SingleWindow
        progress={progress}
        mousePosition={mousePosition}
        setMousePosition={setMousePosition}
        userMoves={userMoves}
        addUserMove={(move) => setUserMoves([...userMoves, move])}
        setCtx={setClient1Ctx}
        oppositeCtx={client2Ctx}
      />
      <SingleWindow
        second
        progress={progress}
        mousePosition={mousePosition}
        setMousePosition={setMousePosition}
        userMoves={userMoves}
        addUserMove={(move) => setUserMoves([...userMoves, move])}
        setCtx={setClient2Ctx}
        oppositeCtx={client1Ctx}
      />
    </motion.div>
  );
};

export default Windows;
