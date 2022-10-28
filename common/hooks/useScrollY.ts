import { useEffect, useState } from 'react';

export const useScrollY = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const target = document.getElementById('__parallax');

    const handleScroll = () => {
      if (target) setScrolled(target.scrollTop);
    };

    target?.addEventListener('scroll', handleScroll);

    return () => {
      target?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrolled;
};
