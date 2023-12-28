import React, { useEffect } from 'react';

export const useSetupMovables = (
  movablesRef: React.RefObject<HTMLCanvasElement>,
  ball: React.MutableRefObject<{ position: { x: number; y: number } }>,
  playerPosition: React.MutableRefObject<{ x: number; y: number }>,
  {
    width,
    height,
  }: {
    width: number;
    height: number;
  }
) => {
  useEffect(() => {
    const canvas = movablesRef.current;

    if (canvas) {
      const dpi = window.devicePixelRatio;

      canvas.width = width * dpi;
      canvas.height = height * dpi;

      ball.current.position = {
        x: width / 2,
        y: height / 2,
      };

      playerPosition.current = {
        x: width - 100,
        y: height / 2,
      };

      const ctx = canvas.getContext('2d');

      if (ctx) ctx.scale(dpi, dpi);
    }
  }, [width, height, movablesRef, ball, playerPosition]);
};
