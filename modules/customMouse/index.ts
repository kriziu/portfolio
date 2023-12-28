import CircleMouse from './components/CircleMouse';
import { useMouseVariant } from './hooks/useMouseVariant';
import { useMouseStore } from './store/mouseStore';
import { MouseVariant } from './types/mouse.types';

export default CircleMouse;

export { useMouseVariant, MouseVariant, useMouseStore };
