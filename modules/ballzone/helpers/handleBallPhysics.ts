/* eslint-disable no-param-reassign */
import { Dispatch, SetStateAction } from 'react';

import { calculateBallPosition } from './calculateBallPosition';
import { Ball, Settings } from '../types/ball.types';

const BALL_MOVEMENT_CONFIG = {
  MAX_SPEED: 5,
  ACCELERATION: 0.35,
  DECELERATION: 0.12,
  SMALL_DECELERATION: 0.015,
};

type Vector = {
  x: number;
  y: number;
};

export const handleBallPhysics = (
  ball: Ball,
  playerPosition: Vector,
  setScores: Dispatch<SetStateAction<[number, number]>>,
  settings: Settings
) => {
  let newBall = { ...ball };

  newBall.velocityVector = applyDeceleration(newBall.velocityVector);

  const velocityUpdate = updateVelocity(
    newBall.velocityVector,
    newBall.position,
    settings
  );
  newBall.velocityVector = velocityUpdate.velocityVector;
  newBall.position = velocityUpdate.position;

  newBall = checkForCollision(newBall, playerPosition, settings);

  updateScores(newBall.position, setScores, settings);

  newBall = {
    ...newBall,
    ...resetBallIfGoal(newBall.position, settings),
  };

  return newBall;
};

const applyDeceleration = (velocityVector: Vector) => {
  const decelerate = (
    velocity: number,
    threshold: number,
    largeDecel: number,
    smallDecel: number
  ): number => {
    const deceleration =
      Math.abs(velocity) > threshold ? largeDecel : smallDecel;
    return velocity > 0
      ? Math.max(velocity - deceleration, 0)
      : Math.min(velocity + deceleration, 0);
  };

  return {
    x: decelerate(
      velocityVector.x,
      4,
      BALL_MOVEMENT_CONFIG.DECELERATION,
      BALL_MOVEMENT_CONFIG.SMALL_DECELERATION
    ),
    y: decelerate(
      velocityVector.y,
      3,
      BALL_MOVEMENT_CONFIG.DECELERATION,
      BALL_MOVEMENT_CONFIG.SMALL_DECELERATION
    ),
  };
};

const updateVelocity = (
  velocityVector: Vector,
  position: Vector,
  settings: Settings
) => {
  const [newPosition, multiplier] = calculateBallPosition(
    position.x + velocityVector.x,
    position.y + velocityVector.y,
    settings
  );

  return {
    velocityVector: {
      x: velocityVector.x * multiplier.x,
      y: velocityVector.y * multiplier.y,
    },
    position: newPosition,
  };
};

const checkForCollision = (
  ball: Ball,
  playerPosition: Vector,
  settings: Settings
): Ball => {
  const { goalWidth, ballSize } = settings;
  const COLLISION_DISTANCE = goalWidth + ballSize;
  const distanceX = ball.position.x - playerPosition.x;
  const distanceY = ball.position.y - playerPosition.y;
  const length = Math.sqrt(distanceX ** 2 + distanceY ** 2) || 1;

  if (length < COLLISION_DISTANCE + 1) {
    const unitX = distanceX / length;
    const unitY = distanceY / length;

    const impactStrengthX = 4;
    const impactStrengthY = 4;
    const dampingFactor = 10;

    const vX =
      (ball.velocityVector.x - unitX * impactStrengthX) / dampingFactor;
    const vY =
      (ball.velocityVector.y - unitY * impactStrengthY) / dampingFactor;

    ball.velocityVector.x -= vX;
    ball.velocityVector.y -= vY;

    const [newPosition] = calculateBallPosition(
      playerPosition.x + (COLLISION_DISTANCE + 1) * unitX,
      playerPosition.y + (COLLISION_DISTANCE + 1) * unitY,
      settings
    );

    ball.position = newPosition;
  }

  return ball;
};

const updateScores = (
  position: Vector,
  setScores: Dispatch<SetStateAction<[number, number]>>,
  settings: Settings
) => {
  const { goalWidth, boardSize } = settings;

  if (position.x < goalWidth) {
    setScores((scores) => [scores[0], scores[1] + 1]);
  }

  if (position.x > boardSize.width - goalWidth) {
    setScores((scores) => [scores[0] + 1, scores[1]]);
  }
};

const resetBallIfGoal = (position: Vector, settings: Settings) => {
  const { goalWidth, boardSize } = settings;
  if (position.x < goalWidth || position.x > boardSize.width - goalWidth) {
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
  }

  return {};
};
