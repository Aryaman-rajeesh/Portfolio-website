/**
 * ═══════════════════════════════════════════════════════════════
 *  ThemeSwitch — Physical-feeling "pull switch" for light/dark
 * ═══════════════════════════════════════════════════════════════
 *
 *  A vertical line with a glowing orb at the end. Clicking or
 *  dragging the orb toggles between dark mode (orb up) and light
 *  mode (orb down). The transition is spring-animated via Framer
 *  Motion to give it a tactile, mechanical feel.
 */

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeSwitch() {
  const { isDark, toggleTheme } = useTheme();

  // The orb's vertical position: 0 = top (dark), 1 = bottom (light)
  const trackLength = 28; // px — how far the orb travels

  return (
    <div className="flex items-center gap-2" aria-label="Toggle theme">
      {/* Sun/Moon icon hint — small, subtle */}
      <span className="text-[10px] uppercase tracking-kicker text-paper-300/60 dark:text-paper-300/40">
        {isDark ? 'Dark' : 'Light'}
      </span>

      {/* The pull-switch track */}
      <button
        onClick={toggleTheme}
        className="relative flex items-center justify-center"
        style={{ width: 20, height: trackLength + 16 }}
        aria-pressed={isDark}
      >
        {/* Vertical line */}
        <div
          className="absolute w-px bg-paper-300/30 dark:bg-paper-300/20"
          style={{ height: trackLength }}
        />

        {/* Glowing orb — animates up/down based on theme state */}
        <motion.div
          className="absolute w-3 h-3 rounded-full"
          animate={{
            y: isDark ? 0 : trackLength,
            backgroundColor: isDark ? '#ffffff' : '#1a1a1a',
            boxShadow: isDark
              ? '0 0 12px 2px rgba(255,255,255,0.6)'
              : '0 0 8px 1px rgba(0,0,0,0.3)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      </button>
    </div>
  );
}
