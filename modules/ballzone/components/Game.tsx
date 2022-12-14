import { useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

import { useElementDimensions } from '@/common/hooks/useElementDimensions';
// import { isMobile } from '@/common/lib/isMobile';
import { useMouseVariant } from '@/modules/customMouse';

import { handleBallPosition } from '../helpers/handleBall';
import { renderBoard } from '../helpers/renderBoard';
import { Ball } from '../types/ball.type';

const Game = () => {
  const { setMouseVariant } = useMouseVariant();

  const [run, setRun] = useState(false);
  const [scores, setScores] = useState<[number, number]>([0, 0]);

  const playerPosition = useRef({ x: 0, y: 0 });
  const ball = useRef<Ball>({
    position: { x: 0, y: 0 },
    velocityVector: { x: 0, y: 0 },
  });

  const windowRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const movablesRef = useRef<HTMLCanvasElement>(null);

  const { width, height } = useElementDimensions(windowRef);

  const small = width < 700;
  const lineWidth = small ? 2 : 4;
  const playerSize = small ? 12 : 18;
  const ballSize = small ? 9 : 14;
  const goalHeight = height / 5;

  // BOARD RENDERING
  useEffect(() => {
    if (canvasRef.current)
      renderBoard(canvasRef.current, {
        boardSize: { width, height },
        lineWidth,
        goalHeight,
        playerSize,
        small,
      });
  }, [width, height, lineWidth, playerSize, small, goalHeight]);

  // MOVABLES SETUP
  useEffect(() => {
    const canvas = movablesRef.current;

    if (canvas) {
      const dpi = window.devicePixelRatio;

      canvas.width = width * dpi;
      canvas.height = height * dpi;

      ball.current.position = {
        x: width / 2,
        y: height / 2,
      };

      playerPosition.current = {
        x: width - 100,
        y: height / 2,
      };

      const ctx = canvas.getContext('2d');

      if (ctx) ctx.scale(dpi, dpi);
    }
  }, [width, height]);

  useEffect(() => {
    const dpi = window.devicePixelRatio;
    const canvas = movablesRef.current;

    if (!canvas || !run) return () => {};

    const interval = setInterval(() => {
      const newBall = handleBallPosition(
        ball.current,
        playerPosition.current,
        setScores,
        {
          ballSize,
          playerSize,
          boardSize: {
            width: canvas.width / dpi,
            height: canvas.height / dpi,
          },
          goalHeight,
        }
      );
      ball.current = newBall;

      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // BALL
        ctx.fillStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#000';
        ctx.beginPath();
        ctx.arc(
          ball.current.position.x,
          ball.current.position.y,
          ballSize,
          0,
          Math.PI * 2
        );
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // PLAYER
        ctx.fillStyle = '#3b82f6';
        ctx.beginPath();
        ctx.arc(
          playerPosition.current.x,
          playerPosition.current.y,
          playerSize,
          0,
          Math.PI * 2
        );
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
      }
    }, 1000 / 64);

    return () => clearInterval(interval);
  }, [ballSize, playerSize, goalHeight, run]);

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
        {/* {isMobile()
          ? '(try to move ball with your finger)'
          : '(try to move ball with your mouse)'} */}
      </p>
      <motion.div
        className="relative flex h-[75vw] w-full flex-col items-center justify-center sm:h-[55vw] sm:w-3/4 md:h-[50vw] xl:h-[40vw] xl:w-2/3"
        onViewportEnter={() => setRun(true)}
        onViewportLeave={() => setRun(false)}
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
            className="relative flex flex-1 touch-none items-center overflow-hidden rounded-lg bg-[#5A9D61]"
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
              className="absolute top-0 left-0 z-10"
              style={{ width, height }}
              onMouseEnter={setMouseVariant.game}
              onMouseLeave={setMouseVariant.default}
            />

            <canvas
              ref={canvasRef}
              className="absolute top-0 left-0"
              style={{ width, height }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Game;
