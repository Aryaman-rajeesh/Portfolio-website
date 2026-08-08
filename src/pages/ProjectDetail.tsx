import { useState } from 'react'; // Added useState for the lightbox
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Added X, ChevronLeft, and ChevronRight for the lightbox controls
import { ArrowLeft, FileText, Download, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { getProjectById } from '@/data/projects';

// ── Reusable scroll-reveal wrapper ─────────────────────────────
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

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;
  
  // State to track which image is currently enlarged (null means closed)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) {
    return (
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-32 text-center">
        <h1 className="headline-serif text-5xl text-paper-50 mb-6">Project not found</h1>
        <Link
          to="/"
          className="text-paper-300/60 hover:text-white transition-colors inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
      </section>
    );
  }

  return (
    <>
      <article className="pb-24">
        {/* 1. PROJECT HEADER */}
        <section className="mx-auto max-w-[1600px] px-6 md:px-10 pt-24 md:pt-32 pb-16">
          <Reveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-paper-300/60 hover:text-white transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" /> All projects
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="headline-serif text-5xl md:text-7xl lg:text-8xl text-paper-50 mb-6">
              {project.title}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xl md:text-2xl text-paper-300/70 dark:text-paper-300/60 font-light max-w-3xl leading-relaxed">
              {project.subtitle}
            </p>
          </Reveal>
        </section>

        {/* 2. PROJECT CONTEXT */}
        <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-12 border-t border-paper-300/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <Reveal>
              <p className="kicker text-paper-300/50 mb-3">Project Type</p>
              <p className="text-base md:text-lg text-paper-50 font-light leading-relaxed">
                {project.projectType}
              </p>
            </Reveal>

            {project.myRole && (
              <Reveal delay={0.1}>
                <p className="kicker text-paper-300/50 mb-3">My Role</p>
                <p className="text-base md:text-lg text-paper-50 font-light leading-relaxed">
                  {project.myRole}
                </p>
              </Reveal>
            )}
          </div>
        </section>

        {/* 3. THE CONTEXT */}
        <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24 border-t border-paper-300/10">
          <Reveal>
            <p className="kicker text-paper-300/50 mb-6">The Context</p>
            <p className="headline-serif text-2xl md:text-4xl text-paper-50 max-w-5xl leading-snug font-light">
              {project.problemSolution}
            </p>
          </Reveal>
        </section>

        {/* 4. RESEARCH & DISCOVERY */}
        <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 border-t border-paper-300/10">
          <Reveal>
            <p className="kicker text-paper-300/50 mb-8">Research & Discovery</p>
            <div className="bg-ink-800 dark:bg-ink-800 rounded-2xl border border-paper-300/10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group hover:border-paper-300/20 transition-all duration-500">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-ink-700 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-paper-50/80" />
                </div>
                <div>
                  <p className="text-lg md:text-xl text-paper-50 font-medium">
                    {project.researchCard}
                  </p>
                  <p className="text-sm text-paper-300/50 mt-1">PDF Document</p>
                </div>
              </div>

              {project.researchFile ? (
                <a
                  href={project.researchFile}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-paper-300/70 hover:text-white transition-colors group/link"
                >
                  Download
                  <Download className="w-4 h-4 transition-transform group-hover/link:translate-y-0.5" />
                </a>
              ) : (
                <span className="flex items-center gap-2 text-sm text-paper-300/30">
                  No file available
                </span>
              )}
            </div>
          </Reveal>
        </section>

        {/* 5. PROCESS / JOURNEY / MECHANICS */}
        <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24 border-t border-paper-300/10">
          <Reveal>
            <p className="kicker text-paper-300/50 mb-12">{project.processLabel}</p>
          </Reveal>

          <div className="space-y-0">
            {project.processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-paper-300/10 last:border-b-0">
                  <div className="md:col-span-2">
                    <span className="text-sm font-mono text-paper-300/40 tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-xl md:text-2xl text-paper-50 font-medium">
                      {step.title}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-base md:text-lg text-paper-300/70 dark:text-paper-300/60 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 6. FINAL VISUALS (Now Interactive!) */}
        <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24 border-t border-paper-300/10">
          <Reveal>
            <p className="kicker text-paper-300/50 mb-8">Final Visuals</p>
            <p className="text-sm text-paper-300/50 mb-12">Click any image to enlarge.</p>
          </Reveal>

          {/* Adjusted auto-rows to allow room for labels without squishing images */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            {project.gallery?.map((item, index) => {
              let spanClasses = "";
              if (item.span === 'large') {
                spanClasses = "md:col-span-2 md:row-span-2";
              } else if (item.span === 'wide') {
                spanClasses = "md:col-span-2";
              }

              return (
                <Reveal key={index} delay={index * 0.1}>
                  <div 
                    className={`h-full flex flex-col group cursor-pointer ${spanClasses}`}
                    onClick={() => setLightboxIndex(index)}
                  >
                    <div className="overflow-hidden rounded-xl flex-grow relative">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Hover overlay icon */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                         <ZoomIn className="text-white w-8 h-8" />
                      </div>
                    </div>
                    {/* Image Label powered by the 'alt' tag */}
                    <p className="mt-3 text-sm text-paper-300/60 font-light text-center">
                      {item.alt}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* NEXT / BACK NAVIGATION */}
        <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 border-t border-paper-300/10">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 text-lg md:text-2xl text-paper-50 hover:text-white transition-colors headline-serif"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Back to all projects
          </Link>
        </section>
      </article>

      {/* ════════════════════════════════════════════════════════
          LIGHTBOX OVERLAY 
         ════════════════════════════════════════════════════════ */}
      {lightboxIndex !== null && project.gallery && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
          onClick={() => setLightboxIndex(null)} // Click outside to close
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors p-2"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevents click from closing the overlay
              setLightboxIndex((prev) => (prev === 0 ? project.gallery!.length - 1 : prev! - 1));
            }}
            className="absolute left-2 md:left-10 text-white/50 hover:text-white transition-colors p-2"
          >
            <ChevronLeft className="w-10 h-10 md:w-16 md:h-16" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevents click from closing the overlay
              setLightboxIndex((prev) => (prev === project.gallery!.length - 1 ? 0 : prev! + 1));
            }}
            className="absolute right-2 md:right-10 text-white/50 hover:text-white transition-colors p-2"
          >
            <ChevronRight className="w-10 h-10 md:w-16 md:h-16" />
          </button>

          {/* Image & Label Display */}
          <div 
            className="flex flex-col items-center max-w-6xl max-h-full"
            onClick={(e) => e.stopPropagation()} // Prevent clicking the image from closing
          >
            <img
              src={project.gallery[lightboxIndex].image}
              alt={project.gallery[lightboxIndex].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-white/80 text-lg md:text-xl mt-6 font-light text-center max-w-2xl">
              {project.gallery[lightboxIndex].alt}
            </p>
            <p className="text-white/30 text-sm mt-2 font-mono">
              {lightboxIndex + 1} / {project.gallery.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}