import { useEffect, useRef, useState } from 'react';

import { useMouseVariant } from '@/modules/customMouse';

const MOVE_AREA_SIZE = 30;

const Game = () => {
  const { setMouseVariant } = useMouseVariant();

  const [{ width, height }, setDimensions] = useState({ width: 0, height: 0 });

  const windowRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ballRef = useRef<HTMLCanvasElement>(null);

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

        ctx.strokeStyle = '#54925A';
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        const lineFactor = width > 450 ? 100 : 70;

        ctx.lineWidth = lineFactor / 2;

        for (let i = 0; i < width; i += lineFactor) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, height);
          ctx.stroke();
          ctx.closePath();
        }

        const small = width < 700;

        ctx.strokeStyle = '#fff';
        ctx.lineWidth = small ? 2 : 4;
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, small ? 35 : 75, 0, Math.PI * 2);
        ctx.stroke();

        ctx.moveTo(width / 2, MOVE_AREA_SIZE);
        ctx.lineTo(width / 2, height - MOVE_AREA_SIZE);
        ctx.stroke();
        ctx.closePath();

        ctx.strokeRect(
          MOVE_AREA_SIZE,
          MOVE_AREA_SIZE,
          width - MOVE_AREA_SIZE * 2,
          height - MOVE_AREA_SIZE * 2
        );
      }
    }
  }, [width, height]);

  useEffect(() => {
    const canvas = ballRef.current;

    if (canvas) {
      const dpi = window.devicePixelRatio;

      canvas.width = width * dpi;
      canvas.height = height * dpi;

      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.scale(dpi, dpi);

        // BALL
        ctx.fillStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#000';
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, 14, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
      }
    }
  }, [width, height]);

  return (
    <div className="flex h-full w-full items-center justify-center px-3">
      <div className="relative flex h-[68vw] w-full flex-col items-center justify-center sm:h-[50vw] sm:w-3/4 md:h-[45vw] xl:h-[40vw] xl:w-2/3">
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-lg bg-[#5A9D61]">
          <div className="relative flex h-10 w-full flex-row items-center justify-center bg-zinc-800">
            <div className="absolute left-5 flex h-full items-center gap-1 justify-self-start">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <div className="ml-10 flex h-6 w-1/2 items-center justify-center overflow-hidden truncate rounded-lg bg-zinc-700 text-sm text-zinc-300 md:ml-0">
              ballzone.herokuapp.com/room
            </div>
          </div>

          <div className="relative flex flex-1 items-center" ref={windowRef}>
            <canvas
              ref={ballRef}
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
      </div>
    </div>
  );
};

export default Game;
