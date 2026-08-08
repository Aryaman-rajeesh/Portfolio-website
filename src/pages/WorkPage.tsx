/**
 * ═══════════════════════════════════════════════════════════════
 *  WorkPage — Route: /work
 * ═══════════════════════════════════════════════════════════════
 *
 *  Reuses the ProjectGrid component to show all projects with
 *  images in a clean grid layout.
 */

import { motion } from 'framer-motion';
import ProjectCarousel from '@/components/ProjectCarousel';
import { projects } from '@/data/projects';

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="kicker text-paper-300/50 mb-6">Work</p>
        <h1 className="headline-serif text-5xl md:text-7xl text-paper-50 mb-12 max-w-4xl">
          Selected projects across disciplines.
        </h1>
        <p className="text-base md:text-lg text-paper-300/60 dark:text-paper-300/50 max-w-2xl font-light mb-16">
          Click any project to explore the full case study.
        </p>
      </motion.div>

      {/* The coverflow carousel — 3 cards visible, center highlighted */}
      <ProjectCarousel projects={projects} />
    </section>
  );
}
