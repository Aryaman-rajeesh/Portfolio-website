/**
 * ═══════════════════════════════════════════════════════════════
 *  AboutPage — Route: /about
 * ═══════════════════════════════════════════════════════════════
 *
 *  A spacious editorial page about Aryaman. Uses scroll-reveal
 *  animations and the same serif/sans typography system.
 */

import { motion } from 'framer-motion';
import { MapPin, Sparkles } from 'lucide-react';

// Reusable scroll-reveal wrapper
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
      {/* Header */}
      <Reveal>
        <p className="kicker text-paper-300/50 mb-6">About</p>
        <h1 className="headline-serif text-3xl md:text-5xl lg:text-6xl text-paper-50 mb-12 max-w-4xl">
          A multi-disciplinary designer & builder.
        </h1>
      </Reveal>

      {/* Body — two-column on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mt-16">
        {/* Left: main narrative */}
        <Reveal>
          <div className="space-y-6 text-base md:text-lg text-paper-300/80 dark:text-paper-300/70 font-light leading-relaxed">
            <p>
              I&apos;m Aryaman, a designer and developer based in Mumbai working at the intersection of physical products, immersive technology, and software systems. My practice spans UI/UX prototyping, CAD modeling, spatial design, and full-stack development.
            </p>
            <p>
              What drives me is the translation of deep research into tangible experiences whether that&apos;s an ergonomically reimagined power bank, a VR ecosystem for public speaking confidence, or a cleaner government portal. I believe the best design is invisible: it removes friction so completely that the user only notices the outcome.
            </p>
            <p>
              I&apos;m equally comfortable in Unity, Figma, Fusion 360, and React. I care about the entire pipeline from foam prototypes to final pixel and I obsess over the details that make a product feel finished.
            </p>
          </div>
        </Reveal>

        {/* Right: quick facts */}
        <Reveal delay={0.1}>
          <div className="space-y-8">
            {/* Location */}
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-paper-300/50 mt-1 flex-shrink-0" />
              <div>
                <p className="kicker text-paper-300/50 mb-1">Based in</p>
                <p className="text-lg text-paper-50 font-light">Mumbai, India</p>
              </div>
            </div>

            {/* Focus */}
            <div className="flex items-start gap-4">
              <Sparkles className="w-5 h-5 text-paper-300/50 mt-1 flex-shrink-0" />
              <div>
                <p className="kicker text-paper-300/50 mb-1">Focus</p>
                <p className="text-lg text-paper-50 font-light">
                  UI/UX, CAD, Spatial Design, Immersive Tech, Software
                </p>
              </div>
            </div>

            {/* Interests */}
            <div className="pt-4">
              <p className="kicker text-paper-300/50 mb-3">Interests</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Behavioral Psychology',
                  'Game Design',
                  'Wellness Hardware',
                  'VR / AR',
                  'Data Visualization',
                  'E-Governance',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs border border-paper-300/15 rounded-full text-paper-300/70 dark:text-paper-300/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
