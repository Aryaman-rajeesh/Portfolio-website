/**
 * ═══════════════════════════════════════════════════════════════
 *  ContactPage — Route: /contact
 * ═══════════════════════════════════════════════════════════════
 *
 *  A spacious contact page with large email CTA, personal hook,
 *  and social links. Similar in spirit to the footer but as a
 *  full standalone page.
 */

import { motion } from 'framer-motion';
import { Linkedin, Github, Phone, ArrowUpRight } from 'lucide-react';

// Reusable scroll-reveal wrapper
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32 min-h-[70vh] flex flex-col justify-center">
      {/* Kicker */}
      <Reveal>
        <p className="kicker text-paper-300/50 mb-6">Contact</p>
      </Reveal>

      {/* Headline */}
      <Reveal delay={0.05}>
        <h1 className="headline-serif text-5xl md:text-7xl lg:text-8xl text-paper-50 mb-12 max-w-4xl">
          Let&apos;s build something impactful.
        </h1>
      </Reveal>

      {/* Email — large with animated underline */}
      <Reveal delay={0.1}>
        <a
          href="mailto:Aryamanrjh@gmail.com"
          className="group inline-block relative mb-8"
        >
          <span className="headline-serif text-3xl md:text-5xl text-paper-50 transition-colors group-hover:text-white">
            Aryamanrjh@gmail.com
          </span>
          <span className="absolute left-0 -bottom-1 h-px w-full bg-paper-50 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
        </a>
      </Reveal>

      {/* Personal hook */}
      <Reveal delay={0.15}>
        <p className="text-base md:text-lg text-paper-300/70 dark:text-paper-300/60 max-w-2xl font-light leading-relaxed mb-16">
          Fascinated by behavioral psychology and game design? Let&apos;s talk mechanics.
        </p>
      </Reveal>

      {/* Contact links grid */}
      <Reveal delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paper-300/10 border border-paper-300/10 rounded-2xl overflow-hidden max-w-3xl">
          {/* Phone */}
          <a
            href="tel:+918591467911"
            className="group flex items-center justify-between p-6 md:p-8 bg-ink-950 hover:bg-ink-800 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-paper-300/50" />
              <div>
                <p className="kicker text-paper-300/40 mb-1">Phone</p>
                <p className="text-base text-paper-50 font-light">+91 8591467911</p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-paper-300/40 transition-all group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aryaman-rajeesh-a84522340/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 md:p-8 bg-ink-950 hover:bg-ink-800 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Linkedin className="w-5 h-5 text-paper-300/50" />
              <div>
                <p className="kicker text-paper-300/40 mb-1">LinkedIn</p>
                <p className="text-base text-paper-50 font-light">/aryaman</p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-paper-300/40 transition-all group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 md:p-8 bg-ink-950 hover:bg-ink-800 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Github className="w-5 h-5 text-paper-300/50" />
              <div>
                <p className="kicker text-paper-300/40 mb-1">GitHub</p>
                <p className="text-base text-paper-50 font-light">/aryaman-rajeesh</p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-paper-300/40 transition-all group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Location */}
          <div className="flex items-center justify-between p-6 md:p-8 bg-ink-950">
            <div className="flex items-center gap-4">
              <div className="w-5 h-5 text-paper-300/50 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-paper-50/60 animate-glow-pulse" />
              </div>
              <div>
                <p className="kicker text-paper-300/40 mb-1">Location</p>
                <p className="text-base text-paper-50 font-light">Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
