'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger offset in seconds. */
  delay?: number;
  /** Disable the vertical rise (fade only). */
  fadeOnly?: boolean;
};

/**
 * Single site-wide entrance: 12px rise + fade, 350ms ease-out, plays once.
 *
 * Readability never depends on JS: before hydration and with JavaScript
 * disabled, the plain wrapper is rendered fully visible. The motion variant
 * only mounts on the client when reduced-motion is not requested, so a failed
 * or blocked script can never leave a section stuck at opacity 0.
 */
export default function Reveal({ children, className, delay = 0, fadeOnly = false }: RevealProps) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  // Intentional mount-detection: this flips exactly once so the no-JS/SSR
  // branch below renders content fully visible before hydration.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted || reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: fadeOnly ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
