import { useMouseStore } from '../store/mouseStore';
import { MouseVariant } from '../types/mouse.types';

export const useMouseVariant = () => {
  const { setVariant, setText } = useMouseStore((store) => ({
    setVariant: store.setVariant,
    setText: store.setText,
  }));

  const setMouseVariant = {
    default: () => setVariant(MouseVariant.DEFAULT),
    text: () => setVariant(MouseVariant.TEXT),
    technology: (newText: string) => {
      setVariant(MouseVariant.TECHNOLOGY);
      setText(newText);
    },
    drawing: () => setVariant(MouseVariant.DRAWING),
    game: () => setVariant(MouseVariant.GAME),
  };

  return { setMouseVariant };
};
