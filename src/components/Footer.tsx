

import { Link } from 'react-router-dom';
import { ArrowDown, Linkedin, Github, Phone } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

export default function Footer() {
  return (
    <footer className="border-t border-paper-300/10 bg-ink-950 transition-colors duration-500 dark:bg-ink-950">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        {/* Kicker */}
        <p className="kicker text-paper-300/60 dark:text-paper-300/50 mb-6">
          Get in touch
        </p>

      

        {/* Email as primary action — magnetic pull + animated underline */}
        <MagneticButton
          href="mailto:aryamanrjh@gmail.com"
          strength={0.2}
          className="group inline-block relative mb-8"
          ariaLabel="Email Aryaman"
        >
          <span className="headline-serif text-3xl md:text-5xl text-paper-50 transition-colors group-hover:text-white">
            aryamanrjh@gmail.com
          </span>
          {/* Animated underline — scales from left on hover */}
          <span className="absolute left-0 -bottom-1 h-px w-full bg-paper-50 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
        </MagneticButton>

    
        {/* Divider */}
        <div className="w-full h-px bg-paper-300/10 mb-8" />

        {/* Bottom row: copyright (left) + links (right) */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs uppercase tracking-kicker text-paper-300/50">
            © 2026 Aryaman
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-paper-300/70 dark:text-paper-300/60">
            <a
              href="tel:+918591467911"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 8591467911
            </a>
            <a
              href="https://www.linkedin.com/in/aryaman-rajeesh-a84522340/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
            <Link
              to="/resume"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              Resume <ArrowDown className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
