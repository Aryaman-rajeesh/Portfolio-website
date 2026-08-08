/**
 * ═══════════════════════════════════════════════════════════════
 *  Navbar — Floating edge-to-edge header with brand + nav links
 * ═══════════════════════════════════════════════════════════════
 *
 *  - Left: "Aryaman" brand with text-scramble hover animation
 *  - Right: About / Work / Resume / Contact (React Router navigation)
 *  - Far right: ThemeSwitch pull-switch
 *
 *  The header is solid black (dark mode) or solid white (light mode),
 *  edge-to-edge, with a subtle blur backdrop and bottom border.
 */

import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTextScramble } from '@/hooks/useTextScramble';
import ThemeSwitch from '@/components/ThemeSwitch';

// Navigation links — each routes to a separate page via React Router
const NAV_LINKS = [
  { label: 'About', path: '/about' },
  { label: 'Work', path: '/work' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  // Text scramble hook for the brand name hover effect
  const { ref: brandRef, trigger: scrambleBrand } = useTextScramble();
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-paper-300/10 bg-ink-950/80 dark:bg-ink-950/80 backdrop-blur-md transition-colors duration-500">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10">
        {/* ── LEFT: Brand name with scramble-on-hover ─────────── */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-paper-50 hover:text-white transition-colors"
          
        >
          <span ref={brandRef as React.Ref<HTMLSpanElement>}>Home</span>
        </Link>

        {/* ── RIGHT: Nav links + theme switch ──────────────────── */}
        <div className="flex items-center gap-8">
          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-white ${
                      isActive
                        ? 'text-white'
                        : 'text-paper-300/70 dark:text-paper-300/70'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Theme toggle — physical pull switch */}
          <ThemeSwitch />
        </div>
      </nav>

      {/* ── Mobile nav row (below the main bar) ───────────────── */}
      <div className="flex md:hidden items-center justify-center gap-6 px-6 pb-3">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `text-xs font-medium transition-colors ${
                isActive ? 'text-white' : 'text-paper-300/60'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
