import { createContext, ReactNode, useEffect, useState } from 'react';

import { MouseVariant } from '../types/mouse.type';

export const mouseContext = createContext({
  variant: MouseVariant.DEFAULT,
  setVariant: (_variant: MouseVariant) => {},
});

const MouseContextProvider = ({ children }: { children: ReactNode }) => {
  const [variant, setVariant] = useState(MouseVariant.DEFAULT);

  useEffect(() => {
    if (variant === MouseVariant.TEXT) {
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = 'default';
    }
  }, [variant]);

  return (
    <mouseContext.Provider value={{ variant, setVariant }}>
      {children}
    </mouseContext.Provider>
  );
};

export default MouseContextProvider;
