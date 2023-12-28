import { useEffect, useRef, useState } from 'react';

import clsx from 'clsx';
import { motion, useMotionValue } from 'framer-motion';
import { BsCursorFill } from 'react-icons/bs';

import { useElementDimensions } from '@/common/hooks/useElementDimensions';
import { useMouseVariant } from '@/modules/customMouse';

import { calculateClientsPositions } from '../helpers/calculateClientsPositions';
import { drawLines } from '../helpers/drawLines';
import { drawPath } from '../helpers/drawPath';
import {
  handleDraw,
  handleDrawEnd,
  handleDrawStart,
} from '../helpers/handleDraw';

interface SingleWindowProps {
  isSecond?: boolean;
  progress: number;
  userMoves: { x: number; y: number }[][];
  addUserMove: (userMoves: { x: number; y: number }[]) => void;
  setCtx: (ctx: CanvasRenderingContext2D) => void;
  oppositeCtx: CanvasRenderingContext2D | undefined;
}

export default function SingleWindow({
  isSecond = false,
  progress,
  userMoves,
  addUserMove,
  setCtx,
  oppositeCtx,
}: SingleWindowProps) {
  const { setMouseVariant } = useMouseVariant();

  const [isDrawing, setIsDrawing] = useState(false);

  const windowRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const { width, height } = useElementDimensions(windowRef);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) setCtx(ctx);
  }, [setCtx]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const dpi = window.devicePixelRatio;

      canvas.width = width * dpi;
      canvas.height = height * dpi;

      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.scale(dpi, dpi);

        drawLines(ctx, { width, height });

        const moves1: { x: number; y: number }[] = [];
        const moves2: { x: number; y: number }[] = [];

        for (let i = 0.5; i <= progress; i += 0.5) {
          const { client1, client2 } = calculateClientsPositions(i, {
            width,
            height,
          });

          if (i >= 50) moves1.push(client1);
          if (i <= 50) moves2.push(client2);
        }

        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;

        drawPath(ctx, moves1);
        drawPath(ctx, moves2);

        userMoves.forEach((moves) => drawPath(ctx, moves));
      }
    }
  }, [width, height, progress, userMoves]);

  const { client1, client2 } = calculateClientsPositions(progress, {
    width,
    height,
  });

  return (
    <div className="pointer-events-auto relative flex h-[25vh] w-full flex-col items-center justify-center sm:h-[30vh] sm:w-2/3 xl:h-[25vw] xl:w-1/2  2xl:w-2/5">
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-lg bg-white">
        <div className="relative flex h-10 w-full flex-row items-center justify-center bg-zinc-800">
          <div className="absolute left-5 flex h-full items-center gap-1 justify-self-start">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <a
            className="pointer-events-auto ml-10 flex h-6 w-1/2 items-center justify-center overflow-hidden truncate rounded-lg bg-zinc-700 text-sm text-zinc-300 hover:underline md:ml-0"
            href="https://collabio-kriziu.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            collabio-kriziu.herokuapp.com/room
          </a>
        </div>

        <div
          className="relative flex flex-1 touch-none items-center"
          ref={windowRef}
          onMouseEnter={setMouseVariant.drawing}
          onMouseLeave={setMouseVariant.default}
          onMouseMove={(e) => {
            const rect = windowRef.current?.getBoundingClientRect();
            if (rect) {
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              mouse.x.set(x);
              mouse.y.set(y);
            }

            if (isDrawing && oppositeCtx) {
              handleDraw(e, canvasRef.current, oppositeCtx);
            }
          }}
          onMouseDown={(e) => {
            setIsDrawing(true);
            handleDrawStart(canvasRef.current);
            if (oppositeCtx) {
              handleDraw(e, canvasRef.current, oppositeCtx);
            }
          }}
          onMouseUp={() => {
            setIsDrawing(false);
            handleDrawEnd(addUserMove);
          }}
          onTouchStart={(e) => {
            setIsDrawing(true);
            handleDrawStart(canvasRef.current);
            if (oppositeCtx) {
              handleDraw(e.touches[0], canvasRef.current, oppositeCtx);
            }
          }}
          onTouchMove={(e) => {
            if (isDrawing && oppositeCtx) {
              handleDraw(e.touches[0], canvasRef.current, oppositeCtx);
            }
          }}
          onTouchEnd={() => {
            setIsDrawing(false);
            handleDrawEnd(addUserMove);
          }}
        >
          <motion.div
            style={{ ...mouse }}
            className="absolute left-0 top-0 z-10 lg:text-xl "
          >
            <BsCursorFill className="-rotate-90 fill-yellow-500" />
          </motion.div>

          <canvas
            ref={canvasRef}
            className="absolute left-0 top-0"
            style={{ width, height }}
          />
          <div className="z-10 ml-3 h-2/3 w-6 rounded-lg bg-zinc-900" />
          <motion.div
            className="absolute left-0 top-0 lg:text-xl"
            style={client2}
          >
            <BsCursorFill
              className={clsx('-rotate-90', {
                'fill-blue-500': !isSecond,
                'fill-black': isSecond,
              })}
            />
          </motion.div>

          <motion.div
            className="absolute left-0 top-0 lg:text-xl"
            style={client1}
          >
            <BsCursorFill
              className={clsx('-rotate-90', {
                'fill-red-500': isSecond,
                'fill-black': !isSecond,
              })}
            />
          </motion.div>
        </div>
      </div>

      <div
        className={clsx('absolute my-2 h-max rounded-lg px-6 py-3', {
          'top-full bg-blue-500/50 text-blue-300': isSecond,
          'bottom-full bg-red-500/50 text-red-300 xl:top-full': !isSecond,
        })}
      >
        Client {isSecond ? '2' : '1'}
      </div>
    </div>
  );
}
