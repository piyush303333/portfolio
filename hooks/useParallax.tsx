import { useEffect, useRef } from 'react';

/**
 * A custom hook to apply a parallax scrolling effect to an element.
 * @param speed - The speed of the parallax effect. A negative value moves the element up as you scroll down, and a positive value moves it down. Recommended values are between -0.2 and 0.2.
 * @returns A ref object to be attached to the target DOM element.
 */
const useParallax = <T extends HTMLElement>(speed: number) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        const distanceFromCenter = viewportCenter - elementCenter;
        
        const move = distanceFromCenter * speed;
        ref.current.style.transform = `translateY(${move}px)`;
      }
    };

    // Run on mount and on scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
};

export default useParallax;
