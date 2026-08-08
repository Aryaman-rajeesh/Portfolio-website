/**
 * ═══════════════════════════════════════════════════════════════
 *  ScrollProgress — Thin top-of-page scroll progress bar
 * ═══════════════════════════════════════════════════════════════
 *
 *  A 2px bar fixed to the very top of the viewport that fills as
 *  the user scrolls down the page. Uses Framer Motion's useSpring
 *  for a smooth, lagging fill effect.
 */

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  // useScroll gives us the vertical scroll progress as a 0–1 value
  const { scrollYProgress } = useScroll();

  // Smooth the raw scroll value with a spring for a polished feel
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-paper-50 origin-left z-[60]"
      style={{ scaleX }}
    />
  );
}
