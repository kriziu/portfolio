const PLAYER_COLOR = '#3b82f6';

export const renderMovables = (
  canvas: HTMLCanvasElement,
  ball: React.MutableRefObject<{ position: { x: number; y: number } }>,
  playerPosition: React.MutableRefObject<{ x: number; y: number }>,
  ballSize: number,
  playerSize: number
) => {
  const ctx = canvas.getContext('2d');

  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    renderBall({
      ctx,
      position: ball.current.position,
      ballSize,
    });

    renderPlayer({
      ctx,
      position: playerPosition.current,
      playerSize,
    });
  }
};

const renderBall = ({
  ctx,
  position,
  ballSize,
}: {
  ctx: CanvasRenderingContext2D;
  position: { x: number; y: number };
  ballSize: number;
}) => {
  ctx.fillStyle = '#fff';
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#000';
  ctx.beginPath();
  ctx.arc(position.x, position.y, ballSize, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};

const renderPlayer = ({
  ctx,
  position,
  playerSize,
}: {
  ctx: CanvasRenderingContext2D;
  position: { x: number; y: number };
  playerSize: number;
}) => {
  ctx.fillStyle = PLAYER_COLOR;
  ctx.beginPath();
  ctx.arc(position.x, position.y, playerSize, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};
