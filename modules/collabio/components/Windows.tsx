import { useRef, useState } from 'react';

import { motion } from 'framer-motion';

import { useScrollY } from '@/common/hooks/useScrollY';
import { useWindowSize } from '@/common/hooks/useWindowSize';

import SingleWindow from './SingleWindow';

export default function Windows({
  windowLength = 1,
}: {
  windowLength?: number;
}) {
  const { height } = useWindowSize();
  const scrollY = useScrollY();

  const [client1Ctx, setClient1Ctx] = useState<CanvasRenderingContext2D>();
  const [client2Ctx, setClient2Ctx] = useState<CanvasRenderingContext2D>();

  const [userMoves, setUserMoves] = useState<{ x: number; y: number }[][]>([]);

  const startScroll = useRef(0);

  const progress = calculateProgress(
    startScroll.current,
    scrollY,
    height,
    windowLength
  );

  return (
    <motion.div
      className="sticky top-0 flex h-screen w-screen flex-col items-center justify-center gap-4 px-10 py-24"
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
      <p className="absolute text-zinc-400 xl:static">
        (try to draw something on the screen)
      </p>
      <div className="flex w-full flex-col items-center justify-center gap-10 xl:flex-row">
        <SingleWindow
          progress={progress}
          userMoves={userMoves}
          addUserMove={(move) => setUserMoves([...userMoves, move])}
          setCtx={setClient1Ctx}
          oppositeCtx={client2Ctx}
        />
        <SingleWindow
          isSecond
          progress={progress}
          userMoves={userMoves}
          addUserMove={(move) => setUserMoves([...userMoves, move])}
          setCtx={setClient2Ctx}
          oppositeCtx={client1Ctx}
        />
      </div>
    </motion.div>
  );
}

const calculateProgress = (
  startScroll: number,
  scrollY: number,
  height: number,
  windowLength: number
) =>
  startScroll &&
  Math.round(
    Math.min(
      100,
      Math.max(
        0,
        ((scrollY - startScroll) / (windowLength * height - 100)) * 100
      )
    ) * 100
  ) / 100;
