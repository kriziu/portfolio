const STARTING_POSITIONS = {
  client1: {
    x: 100,
    y: 30,
  },
  client2: {
    x: 60,
    y: 30,
  },
};

const client1 = (
  progress: number,
  { width, height }: { width: number; height: number }
) => ({
  x: (width - 130) * (progress / 100) + STARTING_POSITIONS.client1.x,
  y: (height - 75) * (progress / 100) + STARTING_POSITIONS.client1.y,
});

const client2 = (
  progress: number,
  { width, height }: { width: number; height: number }
) => ({
  x: (width - 140) * (progress / 100) + STARTING_POSITIONS.client2.x,
  y:
    Math.sin(progress / 40) * 100 +
    (height - 160) / 2 +
    STARTING_POSITIONS.client2.y,
});

export const calculateClientsPositions = (
  progress: number,
  size: { width: number; height: number }
) => {
  return {
    client1: client1(Math.min(50, Math.max(0, progress - 50)) * 2, size),
    client2: client2(Math.min(50, progress) * 2, size),
  };
};
