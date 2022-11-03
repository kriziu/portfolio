import { Ball, Settings } from '../types/ball.type';
import { makeBallPosition } from './makePosition';

const MOVE_BALL = {
  MAX_SPEED: 5,
  ACCELERATION: 0.35,
  DECELERATION: 0.12,
  SMALL_DECELERATION: 0.015,
};

export const handleBallPosition = (
  ball: Ball,
  playerPosition: { x: number; y: number },
  settings: Settings
): Ball => {
  const { playerSize, ballSize, boardSize } = settings;

  const newBall = ball;

  const { velocityVector, position } = newBall;

  const decelerationX =
    velocityVector.x > 4 || velocityVector.x < -4
      ? MOVE_BALL.DECELERATION
      : MOVE_BALL.SMALL_DECELERATION;

  if (velocityVector.x > 0) {
    velocityVector.x = Math.max(velocityVector.x - decelerationX, 0);
  } else if (velocityVector.x < 0) {
    velocityVector.x = Math.min(velocityVector.x + decelerationX, 0);
  }

  const decelerationY =
    velocityVector.y > 3 || velocityVector.y < -3
      ? MOVE_BALL.DECELERATION
      : MOVE_BALL.SMALL_DECELERATION;

  if (velocityVector.y > 0) {
    velocityVector.y = Math.max(velocityVector.y - decelerationY, 0);
  } else if (velocityVector.y < 0) {
    velocityVector.y = Math.min(velocityVector.y + decelerationY, 0);
  }

  newBall.velocityVector = velocityVector;

  // eslint-disable-next-line prefer-const
  let [newPosition, multiplier] = makeBallPosition(
    position.x + velocityVector.x,
    position.y + velocityVector.y,
    settings
  );
  newBall.velocityVector.x = velocityVector.x * multiplier.x;
  newBall.velocityVector.y = velocityVector.y * multiplier.y;

  const COLLISION_DISTANCE = playerSize + ballSize;

  const distanceX = newPosition.x - playerPosition.x;
  const distanceY = newPosition.y - playerPosition.y;
  const length = Math.sqrt(distanceX ** 2 + distanceY ** 2) || 1;

  if (length < COLLISION_DISTANCE + 1) {
    const unitX = distanceX / length;
    const unitY = distanceY / length;

    const vX = (velocityVector.x - unitX * 4) / 10;
    const vY = (velocityVector.y - unitY * 4) / 10;

    const newVX = velocityVector.x - vX;
    const newVY = velocityVector.y - vY;

    newBall.velocityVector = {
      x: newVX,
      y: newVY,
    };

    [newPosition] = makeBallPosition(
      playerPosition.x + (COLLISION_DISTANCE + 1) * unitX,
      playerPosition.y + (COLLISION_DISTANCE + 1) * unitY,
      settings
    );
  }

  if (
    newPosition.x < playerSize ||
    newPosition.x > boardSize.width - playerSize
  )
    return {
      position: {
        x: boardSize.width / 2,
        y: boardSize.height / 2,
      },
      velocityVector: {
        x: 0,
        y: 0,
      },
    };

  newBall.position = newPosition;

  return newBall;
};
