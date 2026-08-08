/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enables class-based dark mode toggling (we toggle `dark` on <html>)
  theme: {
    extend: {
      // ----- FONT FAMILIES -----
      // Serif used for large editorial headlines; sans used for body & UI.
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      // ----- COLOR SYSTEM -----
      // Minimal high-contrast palette: near-black + pure white + subtle neutrals.
      colors: {
        ink: {
          950: '#0a0a0a',
          900: '#0f0f0f',
          800: '#161616',
          700: '#1f1f1f',
        },
        paper: {
          50: '#fafafa',
          100: '#f4f4f4',
          200: '#e8e8e8',
          300: '#d4d4d4',
        },
      },
      // ----- TYPOGRAPHY HELPERS -----
      letterSpacing: {
        kicker: '0.2em', // For tracked-out small caps labels
      },
      // ----- CUSTOM ANIMATIONS -----
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
