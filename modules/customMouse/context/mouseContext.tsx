import { createContext, ReactNode, useEffect, useState } from 'react';

import { MouseVariant } from '../types/mouse.type';

export const mouseContext = createContext({
  variant: MouseVariant.DEFAULT,
  text: '',
  setText: (_text: string) => {},
  setVariant: (_variant: MouseVariant) => {},
});

const MouseContextProvider = ({ children }: { children: ReactNode }) => {
  const [variant, setVariant] = useState(MouseVariant.DEFAULT);
  const [text, setText] = useState('');

  useEffect(() => {
    if (
      variant === MouseVariant.DEFAULT ||
      variant === MouseVariant.TECHNOLOGY
    ) {
      document.body.style.cursor = 'default';
    } else {
      document.body.style.cursor = 'none';
    }
  }, [variant]);

  return (
    <mouseContext.Provider value={{ variant, setVariant, text, setText }}>
      {children}
    </mouseContext.Provider>
  );
};

export default MouseContextProvider;
