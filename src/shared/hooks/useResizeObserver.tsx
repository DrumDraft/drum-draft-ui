import { useCallback, useEffect, useRef, useState } from 'react';

interface Dimensions {
  width: number;
  left: number;
}

export const useResizeObserver = () => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    left: 0,
  });
  const elementRef = useRef<HTMLDivElement>(null);

  const updateDimensions = useCallback(() => {
    const element = elementRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    setDimensions((prev) => {
      if (prev.width === rect.width && prev.left === rect.left) {
        return prev;
      }
      return {
        width: rect.width,
        left: rect.left,
      };
    });
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    updateDimensions();

    const observer = new ResizeObserver(updateDimensions);
    observer.observe(element);

    window.addEventListener("resize", updateDimensions);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateDimensions);
    };
  }, [updateDimensions]);

  return { elementRef, dimensions, updateDimensions };
};
