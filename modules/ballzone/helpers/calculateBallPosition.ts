import { Settings } from '../types/ball.types';

const LINE_WIDTH = 2;
const OPPOSITE_MULTIPLIER = -0.85;

export const calculateBallPosition = (
  x: number,
  y: number,
  { goalWidth, ballSize, boardSize, goalHeight }: Settings
) => {
  const moveAreaSize = goalWidth * 2;
  let areaToBlock = moveAreaSize;

  if (
    y < boardSize.height / 2 + goalHeight - ballSize &&
    y > boardSize.height / 2 - goalHeight + ballSize
  ) {
    areaToBlock = 0;
  }

  const maxX = ballSize + areaToBlock + LINE_WIDTH;
  const minX = boardSize.width - ballSize - areaToBlock - LINE_WIDTH;

  const newX = Math.max(Math.min(x, minX), maxX);

  let newY = 0;
  let maxY = ballSize + moveAreaSize + LINE_WIDTH;
  let minY = boardSize.height - ballSize - moveAreaSize - LINE_WIDTH;
  if (
    newX < moveAreaSize + ballSize - LINE_WIDTH ||
    newX > boardSize.width - moveAreaSize - ballSize + LINE_WIDTH
  ) {
    maxY = boardSize.height / 2 - goalHeight + ballSize + LINE_WIDTH;
    minY = boardSize.height / 2 + goalHeight - ballSize - LINE_WIDTH;
  }

  newY = Math.max(Math.min(y, minY), maxY);

  const multiplier = { x: 1, y: 1 };
  if (newX === maxX || newX === minX) multiplier.x = OPPOSITE_MULTIPLIER;
  if (newY === maxY || newY === minY) multiplier.y = OPPOSITE_MULTIPLIER;

  return [
    {
      x: Math.round(newX * 10) / 10,
      y: Math.round(newY * 10) / 10,
    },
    multiplier,
  ];
};
