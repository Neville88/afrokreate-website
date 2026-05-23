import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Generic, restrained reveal hook.
// Selects `[data-reveal]` descendants of the returned ref and fades them up
// with a 0.08–0.12 stagger when they enter the viewport.
export default function useReveal({ stagger = 0.1, y = 28, once = true } = {}) {
  const scopeRef = useRef(null);

  useEffect(() => {
    const node = scopeRef.current;
    if (!node) return;
    const ctx = gsap.context(() => {
      const targets = node.querySelectorAll('[data-reveal]');
      if (!targets.length) return;
      gsap.fromTo(
        targets,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger,
          scrollTrigger: {
            trigger: node,
            start: 'top 78%',
            toggleActions: once ? 'play none none none' : 'play none none reverse',
          },
        }
      );
    }, node);
    return () => ctx.revert();
  }, [stagger, y, once]);

  return scopeRef;
}
