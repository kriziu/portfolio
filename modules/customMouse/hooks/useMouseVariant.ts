import { useContext } from 'react';

import { mouseContext } from '../context/mouseContext';
import { MouseVariant } from '../types/mouse.type';

export const useMouseVariant = () => {
  const { variant, setVariant, text, setText } = useContext(mouseContext);

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

  return { mouseVariant: variant, setMouseVariant, text };
};
