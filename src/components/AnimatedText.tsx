import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharacterProps {
  char: string;
  index: number;
  totalCount: number;
  scrollYProgress: MotionValue<number>;
  key?: any;
}

function Character({ char, index, totalCount, scrollYProgress }: CharacterProps) {
  // Map index to a staggered scroll range
  const start = (index / totalCount) * 0.8;
  const end = (index / totalCount) * 0.8 + 0.2;
  
  // Transform the scroll progress into opacity
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block whitespace-pre">
      {/* Invisible placeholder for exact layout dimensions */}
      <span className="invisible">{char}</span>
      {/* Absolute overlay bound to scroll progress value */}
      <motion.span style={{ opacity }} className="absolute inset-0 block select-none">
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  // Set up scroll tracking on this specific paragraph element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p ref={containerRef} className={`relative flex flex-wrap justify-center ${className}`}>
      {chars.map((char, index) => (
        <Character
          key={index}
          char={char}
          index={index}
          totalCount={chars.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
}
