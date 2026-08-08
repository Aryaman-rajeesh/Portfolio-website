/**
 * ═══════════════════════════════════════════════════════════════
 *  Layout — Global wrapper: Navbar + page content + Footer
 * ═══════════════════════════════════════════════════════════════
 *
 *  Wraps every routed page so the floating header and footer are
 *  consistent across all routes. The <Outlet /> renders the matched
 *  child route from React Router.
 *
 *  Also includes a Framer Motion page-transition wrapper that
 *  animates route changes with a fade + slide.
 */

import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-ink-950 transition-colors duration-500">
      {/* Scroll progress bar — 2px line at the very top of the viewport */}
      <ScrollProgress />

      {/* Floating header — fixed, edge-to-edge */}
      <Navbar />

      {/* Page content — each route's component renders here */}
      <main className="flex-1 pt-16 md:pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global footer */}
      <Footer />
    </div>
  );
}
