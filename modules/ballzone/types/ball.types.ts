export type Ball = {
  position: { x: number; y: number };
  velocityVector: { x: number; y: number };
};

export type Settings = {
  ballSize: number;
  goalWidth: number;
  boardSize: { width: number; height: number };
  goalHeight: number;
};
