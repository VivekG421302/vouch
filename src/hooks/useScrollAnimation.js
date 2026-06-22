import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px', ...options });
  return { ref, isInView };
}

export function useParallax(speed = 0.5) {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const scrolled = window.scrollY;
      const rate = scrolled * speed;
      ref.current.style.transform = `translateY(${rate}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
}


