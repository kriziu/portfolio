import { useEffect, useState } from 'react';

import { useScroll } from 'framer-motion';

export const useScrollY = () => {
  const [scrolled, setScrolled] = useState(0);

  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.onChange(setScrolled);

    return unsubscribe;
  }, [scrollY]);

  return scrolled;
};
