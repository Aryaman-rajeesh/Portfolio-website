/**
 * ═══════════════════════════════════════════════════════════════
 *  main.tsx — Entry point
 * ═══════════════════════════════════════════════════════════════
 *
 *  Wraps the App in:
 *   - BrowserRouter (enables React Router client-side routing)
 *   - ThemeProvider (global light/dark mode context)
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { ThemeProvider } from '@/context/ThemeContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* BrowserRouter enables multi-page routing without page reloads */}
    <BrowserRouter>
      {/* ThemeProvider gives every component access to light/dark state */}
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
