import { useEffect, useRef, useState } from 'react';

import { handleBallPhysics } from '../helpers/handleBallPhysics';
import { renderMovables } from '../helpers/renderMovables';
import { Ball } from '../types/ball.types';

interface Props {
  ballSize: number;
  playerSize: number;
  goalHeight: number;
}

export const useGameLoop = (
  movablesRef: React.RefObject<HTMLCanvasElement>,
  ball: React.MutableRefObject<Ball>,
  playerPosition: React.MutableRefObject<{ x: number; y: number }>,
  { ballSize, playerSize, goalHeight }: Props
) => {
  const [isRunning, setIsRunning] = useState(false);
  const [scores, setScores] = useState<[number, number]>([0, 0]);

  const animationframeId = useRef<number>();

  useEffect(() => {
    const dpi = window.devicePixelRatio;
    const canvas = movablesRef.current;

    const loopFn = () => {
      if (!isRunning || !canvas) return;

      const newBall = handleBallPhysics(
        ball.current,
        playerPosition.current,
        setScores,
        {
          ballSize,
          goalWidth: playerSize,
          boardSize: {
            width: canvas.width / dpi,
            height: canvas.height / dpi,
          },
          goalHeight,
        }
      );
      ball.current = newBall;

      renderMovables(canvas, ball, playerPosition, ballSize, playerSize);

      animationframeId.current = requestAnimationFrame(loopFn);
    };

    animationframeId.current = requestAnimationFrame(loopFn);

    return () => {
      if (animationframeId.current !== undefined) {
        cancelAnimationFrame(animationframeId.current);
      }
    };
  }, [
    ballSize,
    playerSize,
    goalHeight,
    isRunning,
    movablesRef,
    ball,
    playerPosition,
    setScores,
  ]);

  return {
    isRunning,
    setIsRunning,
    scores,
  };
};
