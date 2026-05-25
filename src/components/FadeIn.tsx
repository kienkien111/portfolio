import React from 'react';
import { motion } from 'motion/react';

interface FadeInProps {
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  children: React.ReactNode;
  className?: string;
}

export default function FadeIn({
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  children,
  className = '',
}: FadeInProps) {
  // Create a motion component dynamically based on the `as` prop
  const MotionComponent = React.useMemo(() => motion.create(as as any), [as]);

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </MotionComponent>
  );
}
