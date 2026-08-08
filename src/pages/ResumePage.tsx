/**
 * ═══════════════════════════════════════════════════════════════
 *  ResumePage — Route: /resume
 * ═══════════════════════════════════════════════════════════════
 *
 *  A clean, editorial resume page with experience, education, and
 *  skills sections. Includes a large "Download PDF" CTA.
 */

import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';

// Import your PDF directly (ensure the file is in this exact location)
import resumePdf from '@/pic/Aryaman-resume.pdf';

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

// ── RESUME DATA ────────────────────────────────────────────────
const EXPERIENCE = [
  {
    role: 'Design Intern',
    org: 'Aarna Foundation',
    period: '2026 — 2027',
    summary:
      'Web Design & Architecture: Designed and developed two comprehensive web projects, including a complete structural redesign of the primary Aarna Foundation website and the creation of a new, user-friendly website for their educational initiative, ABC Little Preschool. Branding & Graphic Design: Executed multiple visual communication deliverables by designing cohesive logos, a comprehensive informational booklet, promotional posters, and banners to drive the NGO’s audience engagement and brand consistency.',
  }
];

const EDUCATION = [
  {
    degree: 'B.Des in Humanizing Technology',
    org: 'NMIMS School of Design',
    period: '2023 — 2027',
    summary:
      'Multidisciplinary course highlighting the importance of creating human-centric solutions.',
  },
  {
    degree: '12th Grade HSC Certification',
    org: 'Friends Junior College',
    period: '2022 — 2023',
    summary: '',
  },
  {
    degree: '10th Grade ICSE Certification',
    org: 'Smt Sulochanadevi Singhania School',
    period: '2020 — 2021',
    summary: '',
  }
];

const SKILLS = [
  'UI/UX & Interactive Prototyping',
  'Design Thinking & Strategy',
  'VR & XR Development',
  'CAD & 3D Modeling',
  'Front-End Web Development',
  'Behavioral Game Design',
  'Physical Product & Hardware Design',
  'Data Visualization & Dashboarding',
  'GIS Mapping',
  'Graphic Design & Branding',
  'Digital Photography & Editing',
  'Figma',
  'Unity 3D',
  'Autodesk Fusion 360',
  'Power BI',
  'QGIS',
  'Affinity',
  'Microsoft Excel',
  'React, HTML, CSS & JavaScript'
];

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
      {/* ── Header ─────────────────────────────────────────────── */}
      <Reveal>
        <p className="kicker text-paper-300/50 mb-6">Resume</p>
        <h1 className="headline-serif text-5xl md:text-7xl text-paper-50 mb-6">
          Aryaman Rajeesh
        </h1>
        
       

        {/* Download CTA — large, with animated underline */}
        <a
          href={resumePdf}
          download="Aryaman_Rajeesh_Resume.pdf"
          className="group inline-flex items-center gap-3 mb-20"
        >
          <span className="text-lg md:text-xl text-paper-50 font-light">
            Download Full Resume
          </span>
          <span className="relative">
            <ArrowDown className="w-5 h-5 text-paper-50 transition-transform group-hover:translate-y-0.5" />
          </span>
          <span className="absolute left-0 -bottom-1 h-px w-full max-w-[260px] bg-paper-50 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
        </a>
      </Reveal>

      {/* ── Experience ─────────────────────────────────────────── */}
      <div className="border-t border-paper-300/10 py-12">
        <Reveal>
          <p className="kicker text-paper-300/50 mb-8">Experience</p>
        </Reveal>
        <div className="space-y-12">
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={exp.role} delay={i * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                <div className="md:col-span-3">
                  <p className="text-sm font-mono text-paper-300/40">{exp.period}</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-xl md:text-2xl text-paper-50 font-medium mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-paper-300/60 mb-3">{exp.org}</p>
                  <p className="text-base text-paper-300/70 dark:text-paper-300/60 font-light leading-relaxed max-w-3xl">
                    {exp.summary}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Education ──────────────────────────────────────────── */}
      <div className="border-t border-paper-300/10 py-12">
        <Reveal>
          <p className="kicker text-paper-300/50 mb-8">Education</p>
        </Reveal>
        <div className="space-y-12">
          {EDUCATION.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                <div className="md:col-span-3">
                  <p className="text-sm font-mono text-paper-300/40">{edu.period}</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-xl md:text-2xl text-paper-50 font-medium mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-paper-300/60 mb-3">{edu.org}</p>
                  {edu.summary && (
                    <p className="text-base text-paper-300/70 dark:text-paper-300/60 font-light leading-relaxed max-w-3xl">
                      {edu.summary}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Skills ─────────────────────────────────────────────── */}
      <div className="border-t border-paper-300/10 py-12">
        <Reveal>
          <p className="kicker text-paper-300/50 mb-8">Skills & Tools</p>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm border border-paper-300/15 rounded-full text-paper-50 font-light hover:border-paper-300/30 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}