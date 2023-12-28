import { useEffect, useMemo, useRef, useState } from 'react';

import { motion } from 'framer-motion';

import { useElementDimensions } from '@/common/hooks/useElementDimensions';
import { checkIsMobile } from '@/common/lib/checkIsMobile';
import { useMouseVariant } from '@/modules/customMouse';

import { STRIPS_COLOR } from '../helpers/renderBoard';
import { useGameLoop } from '../hooks/useGameLoop';
import { useRenderBoard } from '../hooks/useRenderBoard';
import { useSetupMovables } from '../hooks/useSetupMovables';
import { Ball } from '../types/ball.types';

export default function Game() {
  const { setMouseVariant } = useMouseVariant();

  const playerPosition = useRef({ x: 0, y: 0 });
  const ball = useRef<Ball>({
    position: { x: 0, y: 0 },
    velocityVector: { x: 0, y: 0 },
  });

  const windowRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const movablesRef = useRef<HTMLCanvasElement>(null);

  //! Workaround for server hydration
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(checkIsMobile());
  }, []);

  const { width, height } = useElementDimensions(windowRef);

  const { isSmall, lineWidth, playerSize, ballSize, goalHeight } =
    useMemo(() => {
      const tempIsSmall = width < 700;
      const tempLineWidth = tempIsSmall ? 2 : 4;
      const tempPlayerSize = tempIsSmall ? 12 : 18;
      const tempBallSize = tempIsSmall ? 9 : 14;
      const tempGoalHeight = height / 5;

      return {
        isSmall: tempIsSmall,
        lineWidth: tempLineWidth,
        playerSize: tempPlayerSize,
        ballSize: tempBallSize,
        goalHeight: tempGoalHeight,
      };
    }, [width, height]);

  useRenderBoard(canvasRef, {
    width,
    height,
    lineWidth,
    playerSize,
    goalHeight,
    isSmall,
  });

  useSetupMovables(movablesRef, ball, playerPosition, { width, height });

  const { setIsRunning, scores } = useGameLoop(
    movablesRef,
    ball,
    playerPosition,
    {
      playerSize,
      ballSize,
      goalHeight,
    }
  );

  const handleUserMove = ({ x, y }: { x: number; y: number }) => {
    const node = windowRef.current;

    if (node) {
      const rect = node.getBoundingClientRect();

      playerPosition.current = {
        x: x - rect.left,
        y: y - rect.top,
      };
    }
  };

  return (
    <div className="sticky top-0 z-40 flex h-screen w-screen flex-col items-center justify-center gap-4 px-6">
      <p className="text-zinc-400">
        {isMobile
          ? '(try to move ball with your finger)'
          : '(try to move ball with your mouse)'}
      </p>
      <motion.div
        className="relative flex h-[75vw] w-full flex-col items-center justify-center sm:h-[55vw] sm:w-3/4 md:h-[50vw] xl:h-[40vw] xl:w-2/3"
        onViewportEnter={() => setIsRunning(true)}
        onViewportLeave={() => setIsRunning(false)}
      >
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-lg ">
          <div className="relative flex h-10 w-full flex-row items-center justify-center bg-zinc-800">
            <div className="absolute left-5 flex h-full items-center gap-1 justify-self-start">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <a
              className="ml-10 flex h-6 w-1/2 items-center justify-center overflow-hidden truncate rounded-lg bg-zinc-700 text-sm text-zinc-300 hover:underline md:ml-0"
              href="https://ballzone.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              ballzone.herokuapp.com/room
            </a>
          </div>

          <div className="flex w-full items-center justify-center gap-5 bg-black pt-1 text-2xl sm:text-3xl md:gap-14 lg:gap-24 lg:text-5xl">
            <p className="w-10 text-center text-red-500">{scores[0]}</p>
            <p className="w-10 text-center text-[#3b82f6]">{scores[1]}</p>
          </div>

          <div
            className="relative flex flex-1 touch-none items-center overflow-hidden rounded-lg"
            style={{
              backgroundColor: STRIPS_COLOR.light,
            }}
            ref={windowRef}
            onMouseMove={(e) => handleUserMove({ x: e.clientX, y: e.clientY })}
            onTouchMove={(e) =>
              handleUserMove({
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
              })
            }
          >
            <canvas
              ref={movablesRef}
              className="absolute left-0 top-0 z-10"
              style={{ width, height }}
              onMouseEnter={setMouseVariant.game}
              onMouseLeave={setMouseVariant.default}
            />

            <canvas
              ref={canvasRef}
              className="absolute left-0 top-0"
              style={{ width, height }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
