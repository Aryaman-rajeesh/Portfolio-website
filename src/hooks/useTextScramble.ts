/**
 * ═══════════════════════════════════════════════════════════════
 *  useTextScramble — Hook for the "code-reveal" text animation
 * ═══════════════════════════════════════════════════════════════
 *
 *  Returns a ref to attach to any text element and a `trigger` function.
 *  When triggered (e.g. on hover or on scroll), the text rapidly cycles
 *  through random characters before settling back to the original string —
 *  creating a "terminal decode" effect.
 *
 *  Usage:
 *    const { ref, trigger } = useTextScramble();
 *    <span ref={ref} onMouseEnter={trigger}>Aryaman</span>
 */

import { useRef, useCallback } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!<>-_\\/[]{}=+*^?#';

export function useTextScramble() {
  const ref = useRef<HTMLElement>(null);
  const frameRef = useRef<number>(0);
  const originalText = useRef<string>('');

  const trigger = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    // Store the original text the first time we run
    if (!originalText.current) {
      originalText.current = el.textContent || '';
    }
    const text = originalText.current;
    let iteration = 0;
    const maxIterations = text.length * 2;

    // Cancel any previous animation frame
    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    const animate = () => {
      // Build the scrambled string: reveal real chars from left to right
      el.textContent = text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          // Once index * 2 < iteration, lock in the real character
          if (index < iteration / 2) {
            return text[index];
          }
          // Otherwise show a random character
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');

      iteration += 1;

      if (iteration >= maxIterations) {
        el.textContent = text; // Restore exact original
        return;
      }
      frameRef.current = requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return { ref, trigger };
}
