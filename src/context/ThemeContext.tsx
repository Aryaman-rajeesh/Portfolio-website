/**
 * ═══════════════════════════════════════════════════════════════
 *  THEME CONTEXT — Global light/dark mode management
 * ═══════════════════════════════════════════════════════════════
 *
 *  Provides `isDark` state and `toggleTheme` to the entire app.
 *  Dark mode is the default aesthetic. The toggle adds/removes the
 *  `dark` CSS class on the <html> element, which Tailwind's darkMode:
 *  'class' config picks up.
 *
 *  The ThemeSwitch component in the Navbar uses this context to
 *  animate its physical pull-switch interaction.
 */

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface ThemeContextValue {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Default to dark mode (the portfolio's primary aesthetic)
  const [isDark, setIsDark] = useState(true);

  // Sync the <html> class with the current theme state
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook — any component can read/toggle the theme
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
