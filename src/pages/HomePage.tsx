/**
 * ═══════════════════════════════════════════════════════════════
 *  HomePage — The landing page at route "/"
 * ═══════════════════════════════════════════════════════════════
 *
 *  A clean, simple layout:
 *   1. Hero — large serif headline + bio (no particle effects)
 *   2. Project Showcase — grid of project cards with images
 *   3. Capabilities — simple list of skills
 */

import { motion } from 'framer-motion';
import ProjectCarousel from '@/components/ProjectCarousel';
import ParticleField from '@/components/ParticleField';
import Capabilities from '@/components/Capabilities';
import { projects } from '@/data/projects';

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════
          1. HERO SECTION
          ─ Simple centered headline and bio. No canvas effects.
         ════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* 3D particle node-mesh — reacts to cursor movement */}
        <ParticleField density={500} color="#ffffff23" opacity={0.2} />

        {/* Hero content — centered, max width for readability */}
        <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
          {/* Headline — large elegant serif */}
          <h2 className="headline-serif text-6xl md:text-7xl lg:text- 7xl text-paper-50 mb-8 max-w-4xl">
            Hello, I&apos;m Aryaman.
          </h2>

          {/* Bio — clean sans-serif, generous line height */}
          <p className="text-base md:text-lg lg:text-xl text-paper-300/80 dark:text-paper-300/70 max-w-2xl font-light leading-relaxed">
            I work as a multi-disciplinary designer specializing in UI/UX prototyping, CAD modeling, software development, and spatial design. Based in Mumbai, my portfolio brings together physical wellness hardware, immersive VR, and custom systems where deep research meets technical execution.
          </p>
        </motion.div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════
          2. PROJECT SHOWCASE
          ─ 3-card coverflow carousel. The center card is larger
            and highlighted; it auto-rotates through projects.
         ════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24 border-t border-paper-300/10">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <p className="kicker text-paper-300/60 dark:text-paper-300/50 mb-4">
            Selected Work
          </p>
          <h2 className="headline-serif text-4xl md:text-6xl text-paper-50">
            Projects
          </h2>
        </div>

        {/* The coverflow carousel — 3 cards visible, center highlighted */}
        <ProjectCarousel projects={projects} />
      </section>

      {/* ════════════════════════════════════════════════════════
          3. CAPABILITIES
          ─ Simple, clean list of skills.
         ════════════════════════════════════════════════════════ */}
      <Capabilities />
    </>
  );
}
