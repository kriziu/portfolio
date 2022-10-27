import { useContext } from 'react';

import { mouseContext } from '../context/mouseContext';

export const useMouseVariant = () => {
  const { variant, setVariant } = useContext(mouseContext);

  return { mouseVariant: variant, setMouseVariant: setVariant };
};
