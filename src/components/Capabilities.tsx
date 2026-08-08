/**
 * ═══════════════════════════════════════════════════════════════
 *  Capabilities — Simple scroll-reveal skill list
 * ═══════════════════════════════════════════════════════════════
 *
 *  Displays the list of capabilities/skills as a clean, minimal
 *  list. Each row fades in on scroll. No scramble effect.
 */

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// The full capabilities list — edit here to change skills
const CAPABILITIES = [
  'UI/UX Prototyping',
  'CAD Modeling',
  'React',
  'Unity',
  'Data Visualization',
  'QGIS',
  'Hardware Modding',
];

// ── Inner component: a single skill row that fades in on scroll ──
function SkillRow({ text, index }: { text: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-6 md:gap-12 border-b border-paper-300/10 py-4 md:py-5"
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      {/* Index number */}
      <span className="text-xs font-mono text-paper-300/40 tabular-nums w-8">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Skill name */}
      <span className="font-sans font-medium text-xl md:text-3xl text-paper-50 tracking-tight">
        {text}
      </span>
    </motion.div>
  );
}

// ── Outer component ────────────────────────────────────────────
export default function Capabilities() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32 border-t border-paper-300/10">
      {/* Section header */}
      <p className="kicker text-paper-300/60 dark:text-paper-300/50 mb-12">
        Capabilities
      </p>

      {/* Skill rows */}
      <div>
        {CAPABILITIES.map((skill, i) => (
          <SkillRow key={skill} text={skill} index={i} />
        ))}
      </div>
    </section>
  );
}
