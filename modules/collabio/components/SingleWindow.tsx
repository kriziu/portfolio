import { useEffect, useRef, useState } from 'react';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { BsCursorFill } from 'react-icons/bs';

import { useMouseVariant } from '@/modules/customMouse';

import { calcPos } from '../helpers/calcPos';

const SingleWindow = ({
  second = false,
  progress,
  mousePosition,
  setMousePosition,
}: {
  second?: boolean;
  progress: number;
  mousePosition: { x: number; y: number };
  setMousePosition: (mousePosition: { x: number; y: number }) => void;
}) => {
  const { setMouseVariant } = useMouseVariant();

  const [{ width, height }, setDimensions] = useState({ width: 0, height: 0 });

  const windowRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      });
    });

    const node = windowRef.current;

    if (node) {
      resizeObserver.observe(node);
    }

    return () => {
      if (node) {
        resizeObserver.unobserve(node);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const dpi = window.devicePixelRatio;

      canvas.width = width * dpi;
      canvas.height = height * dpi;

      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.scale(dpi, dpi);

        ctx.strokeStyle = '#ddd';
        ctx.lineWidth = 1;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        const lineFactor = width > 450 ? 10 : 7;

        for (let i = 0; i < width; i += lineFactor) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, height);
          ctx.stroke();
          ctx.closePath();
        }

        for (let i = 0; i < height; i += lineFactor) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(width, i);
          ctx.stroke();
          ctx.closePath();
        }

        const moves1: { x: number; y: number }[] = [];
        const moves2: { x: number; y: number }[] = [];

        for (let i = 0.5; i <= progress; i += 0.5) {
          const { client1, client2 } = calcPos(i, { width, height });

          if (i >= 50) moves1.push(client1);
          if (i <= 50) moves2.push(client2);
        }

        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;

        ctx.beginPath();
        moves2.forEach((move) => {
          ctx.lineTo(move.x, move.y);
        });
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        moves1.forEach((move) => {
          ctx.lineTo(move.x, move.y);
        });
        ctx.stroke();
        ctx.closePath();
      }
    }
  }, [width, height, progress]);

  const { client1, client2 } = calcPos(progress, { width, height });

  return (
    <div className="relative flex h-[50vw] w-full flex-col items-center justify-center sm:h-[40vw] sm:w-2/3 md:h-[35vw] xl:h-[25vw] xl:w-1/2 2xl:h-[25vw] 2xl:w-2/5">
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-lg bg-white">
        <div className="relative flex h-10 w-full flex-row items-center justify-center bg-zinc-800">
          <div className="absolute left-5 flex h-full items-center gap-1 justify-self-start">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <div className="ml-10 flex h-6 w-1/2 items-center justify-center overflow-hidden truncate rounded-lg bg-zinc-700 text-sm text-zinc-300 md:ml-0">
            collabio-kriziu.herokuapp.com/room
          </div>
        </div>

        <div className="relative flex flex-1 items-center" ref={windowRef}>
          <motion.div
            style={{ ...mousePosition }}
            className="absolute top-0 left-0 lg:text-xl"
          >
            <BsCursorFill className="-rotate-90 fill-yellow-500" />
          </motion.div>

          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0"
            style={{ width, height }}
            onMouseEnter={setMouseVariant.drawing}
            onMouseLeave={setMouseVariant.default}
            onMouseMove={(e) => {
              const rect = (e.target as HTMLElement).getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              setMousePosition({ x, y });
            }}
          />
          <div className="z-10 ml-3 h-2/3 w-6 rounded-lg bg-zinc-900" />
          <motion.div
            className="absolute top-0 left-0 lg:text-xl"
            style={client2}
          >
            <BsCursorFill
              className={clsx('-rotate-90', {
                'fill-blue-500': !second,
                'fill-black': second,
              })}
            />
          </motion.div>

          <motion.div
            className="absolute top-0 left-0 lg:text-xl"
            style={client1}
          >
            <BsCursorFill
              className={clsx('-rotate-90', {
                'fill-red-500': second,
                'fill-black': !second,
              })}
            />
          </motion.div>
        </div>
      </div>

      <div
        className={clsx('absolute my-2 h-max rounded-lg py-3 px-6', {
          'top-full bg-blue-500/50 text-blue-300': second,
          'bottom-full bg-red-500/50 text-red-300 xl:top-full': !second,
        })}
      >
        Client {second ? '2' : '1'}
      </div>
    </div>
  );
};

export default SingleWindow;
