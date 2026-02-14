import React from 'react';
import { motion } from 'framer-motion';

/**
 * Props:
 * - fromColor: CSS color string (start)
 * - toColor: CSS color string (end)
 * - variant: 'wave' | 'diagonal' | 'shards'
 */
export default function SectionTransition({ fromColor = 'transparent', toColor = 'rgba(245,242,235,0.95)', variant = 'wave' }) {
  const baseTransition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] };
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const motionProps = prefersReduced
    ? { initial: { opacity: 1, y: 0 }, whileInView: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: baseTransition, viewport: { once: true, amount: 0.2 } };

  const wrapperStyle = { background: fromColor };

  if (variant === 'diagonal') {
    return (
      <div className="relative h-40 md:h-56 -mb-1 -mt-1 z-20 overflow-hidden pointer-events-none" style={wrapperStyle} aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">
          <motion.polygon
            points="0,0 1440,80 1440,200 0,200"
            fill={toColor}
            {...motionProps}
          />
        </svg>
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">
          <motion.line
            x1="0" y1="0" x2="1440" y2="80"
            stroke="rgba(200,168,80,0.28)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
        </svg>
      </div>
    );
  }

    // replace the shards block with this
    if (variant === 'shards') {
    const shards = [
        // stable, non-overlapping shapes across the width
        { points: "0,160 220,60 360,160 0,200", delay: 0 },
        { points: "320,170 540,70 680,170 320,200", delay: 0.08 },
        { points: "640,160 860,60 1000,160 640,200", delay: 0.16 },
        { points: "960,150 1180,70 1440,150 1440,200 960,200", delay: 0.24 },
    ];

    return (
        <div
        className="relative h-28 md:h-44 -mb-1 -mt-1 z-20 overflow-hidden pointer-events-none"
        style={{ background: fromColor }}
        aria-hidden="true"
        >
        <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            aria-hidden="true"
        >
            {shards.map((s, i) => (
            <g key={i} style={{ willChange: 'transform, opacity' }}>
                <motion.polygon
                points={s.points}
                fill={toColor}
                initial={typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                whileInView={typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: s.delay, ease: [0.22, 1, 0.36, 1] }}
                />
                {/* very subtle inner sheen for depth without extra geometry */}
                <motion.polygon
                points={s.points}
                fill="rgba(255,255,255,0.03)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, delay: s.delay + 0.08 }}
                />
            </g>
            ))}
        </svg>

        {/* thin glow line for polish */}
        <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 pointer-events-none"
            style={{ background: `linear-gradient(90deg, transparent, rgba(59,91,219,0.28), transparent)` }}
            initial={typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.28, ease: 'easeOut' }}
            aria-hidden="true"
        />
        </div>
    );
    }



  // default: wave
  return (
    <div className="relative h-40 md:h-56 -mb-1 -mt-1 z-20 overflow-hidden pointer-events-none" style={wrapperStyle} aria-hidden="true">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">
        <motion.path
          d="M0,120 C240,40 480,160 720,80 C960,0 1200,140 1440,60 L1440,200 L0,200 Z"
          fill={toColor}
          opacity="0.4"
          {...motionProps}
        />
        <motion.path
          d="M0,140 C320,60 640,180 960,100 C1120,60 1280,120 1440,80 L1440,200 L0,200 Z"
          fill={toColor}
          opacity="0.7"
          {...(prefersReduced ? { initial: { opacity: 0.7, y: 0 } } : { initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 0.7 }, transition: { ...baseTransition, delay: 0.1 } })}
        />
        <motion.path
          d="M0,160 C360,100 720,200 1080,130 C1200,110 1320,150 1440,120 L1440,200 L0,200 Z"
          fill={toColor}
          {...(prefersReduced ? { initial: { opacity: 1, y: 0 } } : { initial: { y: 40, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: { duration: 1, delay: 0.2, ease: 'easeOut' } })}
        />
      </svg>

      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">
        <motion.path
          d="M0,160 C360,100 720,200 1080,130 C1200,110 1320,150 1440,120"
          fill="none"
          stroke="rgba(200,168,80,0.28)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
      </svg>
    </div>
  );
}
