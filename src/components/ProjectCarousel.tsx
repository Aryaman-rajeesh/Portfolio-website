/**
 * ═══════════════════════════════════════════════════════════════
 *  ProjectCarousel — 3-card coverflow carousel with auto-rotation
 * ═══════════════════════════════════════════════════════════════
 *
 *  Always shows 3 cards: the left sibling, the center (current)
 *  card, and the right sibling. The center card is larger, fully
 *  opaque, and highlighted. The side cards are smaller and dimmed.
 *
 *  INTERACTIVITY:
 *   - Auto-rotates every `intervalMs` (pauses on hover)
 *   - Click prev/next arrows or dot indicators to jump manually
 *   - Press ← / → arrow keys to navigate when the carousel is focused
 *   - The center card tilts in 3D toward the cursor (parallax effect)
 *
 *  PROPS:
 *   - projects: array of Project objects from the data file
 *   - intervalMs: auto-rotation speed in ms (default 4000)
 */

import { useState, useEffect, useCallback, useRef, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectCarouselProps {
  projects: Project[];
  intervalMs?: number;
}

export default function ProjectCarousel({
  projects,
  intervalMs = 4000,
}: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const count = projects.length;

  // ── 3D tilt state for the center card ─────────────────────────
  // Tracks the mouse position over the center card for a parallax tilt
  const tiltX = useRef(0);
  const tiltY = useRef(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // ── Helpers: get prev/next index with wrapping ───────────────
  const getPrev = useCallback((i: number) => (i - 1 + count) % count, [count]);
  const getNext = useCallback((i: number) => (i + 1) % count, [count]);

  // ── Auto-rotation: advance current index on a timer ──────────
  useEffect(() => {
    if (isPaused || count <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => getNext(prev));
    }, intervalMs);
    return () => clearInterval(timer);
  }, [isPaused, count, intervalMs, getNext]);

  // ── Keyboard navigation: ← / → when the stage has focus ──────
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrent((prev) => getPrev(prev));
      } else if (e.key === 'ArrowRight') {
        setCurrent((prev) => getNext(prev));
      }
    },
    [getPrev, getNext]
  );

  // Attach the keyboard listener to the window while the carousel exists
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // ── Manual navigation ────────────────────────────────────────
  const goTo = (index: number) => setCurrent(index);
  const goPrev = () => setCurrent((prev) => getPrev(prev));
  const goNext = () => setCurrent((prev) => getNext(prev));

  // Determine the three visible indices: left, center, right
  const leftIndex = getPrev(current);
  const rightIndex = getNext(current);

  // ── Card position config ─────────────────────────────────────
  const positions: Record<
    'left' | 'center' | 'right',
    { scale: number; x: string; opacity: number; z: number; blur: boolean }
  > = {
    left: { scale: 0.78, x: '-62%', opacity: 0.4, z: 1, blur: true },
    center: { scale: 1, x: '0%', opacity: 1, z: 3, blur: false },
    right: { scale: 0.78, x: '62%', opacity: 0.4, z: 1, blur: true },
  };

  // Map a project index to its position in the carousel
  function getPosition(index: number): 'left' | 'center' | 'right' | null {
    if (index === current) return 'center';
    if (index === leftIndex) return 'left';
    if (index === rightIndex) return 'right';
    return null;
  }

  // ── 3D tilt: update tilt values as the cursor moves over center card ──
  const handleTiltMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Normalize to -0.5 .. 0.5 and scale to a max of ~8 degrees
    const maxTilt = 8;
    tiltX.current = ((e.clientY - centerY) / rect.height) * -maxTilt;
    tiltY.current = ((e.clientX - centerX) / rect.width) * maxTilt;
    setTilt({ x: tiltX.current, y: tiltY.current });
  };

  // Reset tilt when the cursor leaves the center card
  const handleTiltLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        handleTiltLeave();
      }}
    >
      {/* ── Carousel stage — fixed height area for the 3 cards ── */}
      <div
        className="relative flex items-center justify-center h-[440px] md:h-[560px]"
        tabIndex={0}
        role="region"
        aria-label="Project carousel — use arrow keys to navigate"
      >
        {projects.map((project, index) => {
          const pos = getPosition(index);
          if (!pos) return null;

          const config = positions[pos];
          const isCenter = pos === 'center';

          return (
            <motion.div
              key={project.id}
              className="absolute w-[300px] md:w-[460px]"
              animate={{
                scale: config.scale,
                x: config.x,
                opacity: config.opacity,
                filter: config.blur ? 'blur(2px)' : 'blur(0px)',
                // Apply 3D tilt only to the center card
                rotateX: isCenter ? tilt.x : 0,
                rotateY: isCenter ? tilt.y : 0,
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              style={{
                zIndex: config.z,
                // Enable 3D perspective for the tilt
                transformStyle: 'preserve-3d',
                perspective: 1000,
              }}
            >
              <Link to={`/project/${project.id}`} className="group block">
                {/* Card image — with 3D tilt handler on the center card */}
                <div
                  className={`relative overflow-hidden rounded-2xl bg-ink-800 aspect-[4/3] mb-5 transition-shadow duration-500 ${
                    isCenter ? 'shadow-2xl shadow-black/50' : ''
                  }`}
                  onMouseMove={isCenter ? handleTiltMove : undefined}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isCenter ? 'group-hover:scale-105' : ''
                    }`}
                  />

                  {/* Center card: index badge */}
                  {isCenter && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-mono text-paper-50 bg-ink-950/70 backdrop-blur rounded-full tabular-nums">
                        {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card text: title + subtitle */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3
                      className={`text-lg md:text-2xl font-medium transition-colors ${
                        isCenter
                          ? 'text-paper-50 group-hover:text-white'
                          : 'text-paper-300/60'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm mt-1 font-light ${
                        isCenter ? 'text-paper-300/60' : 'text-paper-300/40'
                      }`}
                    >
                      {project.subtitle}
                    </p>
                  </div>
                  {isCenter && (
                    <ArrowUpRight className="w-5 h-5 text-paper-300/50 mt-1 flex-shrink-0 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* ── Controls: prev/next arrows + dot indicators ────────── */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={goPrev}
          className="w-10 h-10 rounded-full border border-paper-300/15 flex items-center justify-center text-paper-300/60 hover:text-white hover:border-paper-300/40 transition-all"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dot indicators — one per project */}
        <div className="flex items-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => goTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === current
                  ? 'w-8 bg-paper-50'
                  : 'w-1.5 bg-paper-300/30 hover:bg-paper-300/50'
              }`}
              aria-label={`Go to ${project.title}`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="w-10 h-10 rounded-full border border-paper-300/15 flex items-center justify-center text-paper-300/60 hover:text-white hover:border-paper-300/40 transition-all"
          aria-label="Next project"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
