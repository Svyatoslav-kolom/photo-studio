// technical.ts
import { useEffect, useState, RefObject } from 'react';

export function useNormalModeObserver(ref: RefObject<HTMLElement>): boolean {
  const [isNormalMode, setIsNormalMode] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNormalMode(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 } // Настраиваем пересечение на 10%
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isNormalMode;
}
