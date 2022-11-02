export const drawPath = (
  ctx: CanvasRenderingContext2D,
  path: { x: number; y: number }[]
) => {
  if (path.length === 0) return;

  ctx.strokeStyle = '#000';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.lineWidth = 2;

  ctx.beginPath();
  if (path.length === 1) {
    ctx.arc(path[0].x, path[0].y, ctx.lineWidth / 4, 0, 2 * Math.PI);
    ctx.fill();
  } else {
    ctx.moveTo(path[0].x, path[0].y);

    for (let i = 1; i < path.length; i += 1) ctx.lineTo(path[i].x, path[i].y);

    ctx.stroke();
  }
  ctx.stroke();
  ctx.closePath();
};
