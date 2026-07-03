import { useMemo } from 'react';
import { motion } from 'framer-motion';
import type { ReactNode, ElementType } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  className?: string;
}

/**
 * Fades + slides content into view once, when it enters the viewport.
 * Wraps children in a motion element created dynamically via motion.create(),
 * so it can render as a <div>, <li>, <section>, etc.
 */
export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className,
}: FadeInProps) {
  const MotionTag = useMemo(() => motion.create(as as ElementType), [as]);

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
