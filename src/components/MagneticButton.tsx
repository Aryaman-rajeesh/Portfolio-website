/**
 * ═══════════════════════════════════════════════════════════════
 *  MagneticButton — Button/link that subtly pulls toward the cursor
 * ═══════════════════════════════════════════════════════════════
 *
 *  Wraps any content in a magnetic field. As the mouse approaches,
 *  the element eases toward the cursor by a fraction of the distance,
 *  creating a tactile, physical pull. On mouse leave it springs back.
 *
 *  Can render as a <motion.a> (if href provided), a <Link> wrapping
 *  a <motion.span> (if to provided), or a <motion.button> (default).
 *
 *  PROPS:
 *   - children:  button content
 *   - href:      optional external URL → renders <a>
 *   - to:        optional internal route → renders <Link>
 *   - strength:  how strongly the element follows the cursor (0–1, default 0.3)
 *   - className: styling classes
 */

import { type ReactNode, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  to?: string;
  strength?: number;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export default function MagneticButton({
  children,
  href,
  to,
  strength = 0.3,
  className = '',
  onClick,
  ariaLabel,
}: MagneticButtonProps) {
  // Motion values for x/y translation, smoothed with springs
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  // On mouse move, calculate offset from the element's center
  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  // Reset position when the cursor leaves
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // The inner motion element that carries the magnetic transform.
  // We use a span so it works inside <Link>, <a>, and <button> alike.
  const magneticInner = (style?: React.CSSProperties) => (
    <motion.span
      style={{ x: springX, y: springY, display: 'inline-block', ...style }}
    >
      {children}
    </motion.span>
  );

  // Shared mouse handlers on the outer wrapper element
  const mouseProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className,
    onClick,
    'aria-label': ariaLabel,
  };

  // Render as <a> for external links
  if (href) {
    return (
      <a href={href} {...mouseProps}>
        {magneticInner()}
      </a>
    );
  }

  // Render as <Link> for internal routes
  if (to) {
    return (
      <Link to={to} {...mouseProps}>
        {magneticInner()}
      </Link>
    );
  }

  // Default: render as <button>
  return (
    <button {...mouseProps}>
      {magneticInner()}
    </button>
  );
}
