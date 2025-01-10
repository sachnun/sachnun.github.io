import { useEffect, useRef } from 'react';

export default function PageContainer({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let pageable;
    
    const initPageable = async () => {
      if (typeof window !== 'undefined' && containerRef.current) {
        const Pageable = (await import('pageable')).default;
        pageable = new Pageable(containerRef.current, {
          childSelector: "[data-anchor]",
          animation: 800,
          delay: 0,
          throttle: 50,
          orientation: "vertical",
          swipeThreshold: 50,
          freeScroll: false,
          events: {
            wheel: true,
            mouse: false,
            touch: true,
            keydown: true
          }
        });
      }
    };

    initPageable();

    return () => {
      if (pageable) {
        pageable.destroy();
      }
    };
  }, []);

  return (
    <div ref={containerRef} id="container">
      {children}
    </div>
  );
}
