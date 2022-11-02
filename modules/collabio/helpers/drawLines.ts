export const drawLines = (
  ctx: CanvasRenderingContext2D,
  { width, height }: { width: number; height: number }
) => {
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
};
