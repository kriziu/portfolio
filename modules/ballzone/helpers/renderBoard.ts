/* eslint-disable no-param-reassign */

export const renderBoard = (
  canvas: HTMLCanvasElement,
  {
    boardSize: { width, height },
    playerSize,
    lineWidth,
    goalHeight,
    small,
  }: {
    boardSize: { width: number; height: number };
    playerSize: number;
    lineWidth: number;
    goalHeight: number;
    small: boolean;
  }
) => {
  const dpi = window.devicePixelRatio;

  canvas.width = width * dpi;
  canvas.height = height * dpi;

  const ctx = canvas.getContext('2d');

  if (ctx) {
    ctx.scale(dpi, dpi);

    ctx.strokeStyle = '#54925A';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const moveAreaSize = playerSize * 2;
    const lineCount = 11;
    let bgLineWidth = (width - moveAreaSize * 2) / lineCount;
    const howManyLines = width / bgLineWidth;
    if (howManyLines % 2 === 0)
      bgLineWidth = Math.ceil(width / (howManyLines + 1));

    let darker = true;
    for (let i = 0; i < width; i += bgLineWidth) {
      if (darker) ctx.fillStyle = '#54925A';
      else ctx.fillStyle = '#5A9D61';

      ctx.fillRect(
        i + moveAreaSize,
        moveAreaSize,
        bgLineWidth,
        height - moveAreaSize * 2
      );

      darker = !darker;
    }

    ctx.strokeStyle = '#fff';
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, small ? 35 : 80, 0, Math.PI * 2);
    ctx.stroke();

    ctx.moveTo(width / 2, moveAreaSize);
    ctx.lineTo(width / 2, height - moveAreaSize);
    ctx.stroke();
    ctx.closePath();

    ctx.strokeRect(
      moveAreaSize,
      moveAreaSize,
      width - moveAreaSize * 2,
      height - moveAreaSize * 2
    );

    // GOALS
    ctx.beginPath();

    // LEFT GOAL
    ctx.moveTo(1, height / 2);
    ctx.lineTo(1, height / 2 - goalHeight);
    ctx.lineTo(moveAreaSize, height / 2 - goalHeight);

    ctx.moveTo(1, height / 2);
    ctx.lineTo(1, height / 2 + goalHeight);
    ctx.lineTo(moveAreaSize, height / 2 + goalHeight);

    // RIGHT GOAL
    ctx.moveTo(width - 1, height / 2);
    ctx.lineTo(width - 1, height / 2 - goalHeight);
    ctx.lineTo(width - moveAreaSize, height / 2 - goalHeight);

    ctx.moveTo(width - 1, height / 2);
    ctx.lineTo(width - 1, height / 2 + goalHeight);
    ctx.lineTo(width - moveAreaSize, height / 2 + goalHeight);

    ctx.stroke();
    ctx.closePath();

    // REMOVE WHITE LINES
    ctx.beginPath();
    ctx.lineWidth = lineWidth + 1;
    ctx.strokeStyle = '#5A9D61';
    ctx.lineCap = 'square';

    ctx.moveTo(moveAreaSize, height / 2 - goalHeight + lineWidth);
    ctx.lineTo(moveAreaSize, height / 2 + goalHeight - lineWidth);

    ctx.moveTo(width - moveAreaSize, height / 2 - goalHeight + lineWidth);
    ctx.lineTo(width - moveAreaSize, height / 2 + goalHeight - lineWidth);

    ctx.stroke();

    ctx.closePath();
  }
};
