import CircleMouse from './components/CircleMouse';
import MouseVariantProvider, { mouseContext } from './context/mouseContext';
import { useMouseVariant } from './hooks/useMouseVariant';
import { MouseVariant } from './types/mouse.type';

export default CircleMouse;

export { useMouseVariant, MouseVariantProvider, mouseContext, MouseVariant };
