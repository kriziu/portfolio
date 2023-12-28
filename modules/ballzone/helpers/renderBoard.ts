/* eslint-disable no-param-reassign */

export const STRIPS_COLOR = {
  light: '#5A9D61',
  dark: '#54925A',
};

interface RenderBoardProps {
  boardSize: { width: number; height: number };
  playerSize: number;
  lineWidth: number;
  goalHeight: number;
  isSmall: boolean;
}

export const renderBoard = (
  canvas: HTMLCanvasElement,
  {
    boardSize: { width, height },
    playerSize,
    lineWidth,
    goalHeight,
    isSmall,
  }: RenderBoardProps
) => {
  const dpi = window.devicePixelRatio;

  canvas.width = width * dpi;
  canvas.height = height * dpi;

  const ctx = canvas.getContext('2d');

  if (ctx) {
    ctx.scale(dpi, dpi);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    const moveAreaSize = playerSize * 2;

    const props = {
      ctx,
      height,
      width,
      moveAreaSize,
      lineWidth,
      goalHeight,
      isSmall,
    };

    renderGrass(props);
    renderLines(props);
    renderGoals(props);
    removeWhiteLines(props);
  }
};

interface RenderComponentProps {
  ctx: CanvasRenderingContext2D;
  height: number;
  width: number;
  goalHeight: number;
  moveAreaSize: number;
  lineWidth: number;
  isSmall: boolean;
}

const renderGrass = ({
  ctx,
  height,
  width,
  moveAreaSize,
}: RenderComponentProps) => {
  ctx.strokeStyle = STRIPS_COLOR.dark;
  const lineCount = 11;
  let bgLineWidth = (width - moveAreaSize * 2) / lineCount;
  const howManyLines = width / bgLineWidth;
  if (howManyLines % 2 === 0)
    bgLineWidth = Math.ceil(width / (howManyLines + 1));

  let darker = true;
  for (let i = 0; i < width; i += bgLineWidth) {
    if (darker) ctx.fillStyle = STRIPS_COLOR.dark;
    else ctx.fillStyle = STRIPS_COLOR.light;

    ctx.fillRect(
      i + moveAreaSize,
      moveAreaSize,
      bgLineWidth,
      height - moveAreaSize * 2
    );

    darker = !darker;
  }
};

const renderLines = ({
  ctx,
  height,
  width,
  moveAreaSize,
  lineWidth,
  isSmall,
}: RenderComponentProps) => {
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  ctx.arc(width / 2, height / 2, isSmall ? 35 : 80, 0, Math.PI * 2);
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
};

const renderGoals = ({
  ctx,
  height,
  width,
  moveAreaSize,
  goalHeight,
}: RenderComponentProps) => {
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
};

const removeWhiteLines = ({
  ctx,
  height,
  width,
  moveAreaSize,
  lineWidth,
  goalHeight,
}: RenderComponentProps) => {
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
};
