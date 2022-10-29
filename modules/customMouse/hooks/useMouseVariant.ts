import { useContext } from 'react';

import { mouseContext } from '../context/mouseContext';
import { MouseVariant } from '../types/mouse.type';

export const useMouseVariant = () => {
  const { variant, setVariant } = useContext(mouseContext);

  const setMouseVariant = {
    default: () => setVariant(MouseVariant.DEFAULT),
    text: () => setVariant(MouseVariant.TEXT),
    button: () => setVariant(MouseVariant.BUTTON),
  };

  return { mouseVariant: variant, setMouseVariant };
};
