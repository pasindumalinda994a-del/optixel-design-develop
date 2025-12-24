'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation, useMotionValue, useTransform, MotionValue, Transition } from 'framer-motion';

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: 'slowDown' | 'speedUp' | 'pause' | 'goBonkers';
  className?: string;
  // Positioning props
  position?: 'absolute' | 'relative' | 'fixed' | 'static';
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  zIndex?: number;
  wrapperClassName?: string;
}

const getRotationTransition = (duration: number, from: number, loop: boolean = true) => ({
  from,
  to: from + 360,
  ease: 'linear' as const,
  duration,
  type: 'tween' as const,
  repeat: loop ? Infinity : 0
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: 'spring' as const,
    damping: 20,
    stiffness: 300
  }
});

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = 'speedUp',
  className = '',
  position = 'relative',
  top,
  bottom,
  left,
  right,
  zIndex,
  wrapperClassName = ''
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation: MotionValue<number> = useMotionValue(0);
  const counterRotation = useTransform(rotation, (r) => -r);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  }, [spinDuration, text, onHover, controls, rotation]);

  const handleHoverStart = () => {
    const start = rotation.get();

    if (!onHover) return;

    let transitionConfig: ReturnType<typeof getTransition> | Transition;
    let scaleVal = 1;

    switch (onHover) {
      case 'slowDown':
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case 'speedUp':
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case 'pause':
        transitionConfig = {
          rotate: { type: 'spring', damping: 20, stiffness: 300 },
          scale: { type: 'spring', damping: 20, stiffness: 300 }
        };
        break;
      case 'goBonkers':
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  };

  const wrapperStyle: React.CSSProperties = {
    ...(position !== 'relative' && position !== 'static' && { position }),
    ...(top !== undefined && { top }),
    ...(bottom !== undefined && { bottom }),
    ...(left !== undefined && { left }),
    ...(right !== undefined && { right }),
    ...(zIndex !== undefined && { zIndex })
  };

  const positionClass = position === 'absolute' ? 'absolute' : position === 'fixed' ? 'fixed' : '';

  return (
    <div 
      className={`${positionClass} ${wrapperClassName}`.trim()}
      style={Object.keys(wrapperStyle).length > 0 ? wrapperStyle : undefined}
    >
      <motion.div
        className={`m-0 mx-auto rounded-full w-[200px] h-[200px] relative font-light text-center cursor-pointer origin-center ${className}`}
        style={{ rotate: rotation }}
        initial={{ rotate: 0 }}
        animate={controls}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const factor = Math.PI / letters.length;
        const x = factor * i;
        const y = factor * i;
        const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;

        return (
          <span
            key={i}
            className="absolute inline-block inset-0 text-xs transition-all leading-25 duration-500 ease-[cubic-bezier(0,0,0,1)]"
            style={{ 
              transform, 
              WebkitTransform: transform,
              fontFamily: 'var(--font-ibm-plex-mono), monospace',
              fontWeight: 300
            }}
          >
            {letter}
          </span>
        );
      })}
      {/* Play icon in center - counter-rotated to stay fixed */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ rotate: counterRotation }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-black"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </motion.div>
      </motion.div>
    </div>
  );
};

export default CircularText;

