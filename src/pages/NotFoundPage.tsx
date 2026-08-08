/**
 * ═══════════════════════════════════════════════════════════════
 *  NotFoundPage — Fallback for unmatched routes
 * ═══════════════════════════════════════════════════════════════
 */

import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-32 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <p className="kicker text-paper-300/50 mb-6">404</p>
      <h1 className="headline-serif text-5xl md:text-7xl text-paper-50 mb-6">
        Page not found.
      </h1>
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-paper-300/60 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to home
      </Link>
    </section>
  );
}
