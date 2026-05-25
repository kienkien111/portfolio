import React, { useRef, useState, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number; // default 150
  strength?: number; // default 3
  activeTransition?: string; // default "transform 0.3s ease-out"
  inactiveTransition?: string; // default "transform 0.6s ease-in-out"
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
}: MagnetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Mouse position
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Distance from mouse to edges of the element box
      const isWithinX = mouseX >= rect.left - padding && mouseX <= rect.right + padding;
      const isWithinY = mouseY >= rect.top - padding && mouseY <= rect.bottom + padding;

      if (isWithinX && isWithinY) {
        setIsHovered(true);
        // Calculate displacement
        const dx = mouseX - centerX;
        const dy = mouseY - centerY;

        // Strength division
        setTransform({
          x: dx / strength,
          y: dy / strength,
        });
      } else {
        setIsHovered(false);
        setTransform({ x: 0, y: 0 });
      }
    };

    const handleMouseLeaveGlobal = () => {
      setIsHovered(false);
      setTransform({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeaveGlobal);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeaveGlobal);
    };
  }, [padding, strength]);

  const style: React.CSSProperties = {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    transition: isHovered ? activeTransition : inactiveTransition,
    willChange: 'transform',
    display: 'inline-block',
  };

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      <div style={style}>
        {children}
      </div>
    </div>
  );
}
