import { drawPath } from './drawPath';

let path: { x: number; y: number }[] = [];
let tempImageData: ImageData | undefined;

const drawCtx = (ctx: CanvasRenderingContext2D) => {
  if (tempImageData) {
    ctx.putImageData(tempImageData, 0, 0);
  }

  drawPath(ctx, path);
};

const handleDraw = (
  { clientX, clientY }: { clientX: number; clientY: number },
  canvas: HTMLCanvasElement | null,
  secondCtx: CanvasRenderingContext2D | null
) => {
  if (canvas) {
    const ctx = canvas.getContext('2d');

    if (ctx && secondCtx) {
      const { x, y } = canvas.getBoundingClientRect();

      const mouseX = clientX - x;
      const mouseY = clientY - y;

      path.push({ x: mouseX, y: mouseY });

      drawCtx(ctx);
      drawCtx(secondCtx);
    }
  }
};

const handleDrawEnd = (
  callback: (path: { x: number; y: number }[]) => void
) => {
  callback(path);
  path = [];
};

const handleDrawStart = (canvas: HTMLCanvasElement | null) => {
  if (canvas) {
    const ctx = canvas.getContext('2d');

    if (ctx) {
      tempImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    }
  }
};

export class Draw {
  static handleDraw = handleDraw;

  static handleDrawEnd = handleDrawEnd;

  static handleDrawStart = handleDrawStart;
}
