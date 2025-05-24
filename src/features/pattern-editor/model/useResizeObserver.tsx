import { useEffect, useRef, useState } from 'react';

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

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const updateDimensions = () => {
      const rect = element.getBoundingClientRect();
      setDimensions({
        width: rect.width,
        left: rect.left,
      });
    };

    // Initial dimensions
    updateDimensions();

    // Element resize observer
    const observer = new ResizeObserver(updateDimensions);
    observer.observe(element);

    // Window resize listener
    window.addEventListener("resize", updateDimensions);

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return { elementRef, dimensions };
};
