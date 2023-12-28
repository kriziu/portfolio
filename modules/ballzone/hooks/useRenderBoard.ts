import { useEffect } from 'react';

import { renderBoard } from '../helpers/renderBoard';

interface Props {
  width: number;
  height: number;
  lineWidth: number;
  goalHeight: number;
  playerSize: number;
  isSmall: boolean;
}

export const useRenderBoard = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  { width, height, lineWidth, goalHeight, playerSize, isSmall }: Props
) => {
  useEffect(() => {
    if (!canvasRef.current) return;

    renderBoard(canvasRef.current, {
      boardSize: { width, height },
      lineWidth,
      goalHeight,
      playerSize,
      isSmall,
    });
  }, [width, height, lineWidth, playerSize, isSmall, goalHeight, canvasRef]);
};
