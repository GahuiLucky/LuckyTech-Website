import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Flowing transition between sections.
 * `fromColor` = color of the section above
 * `toColor`   = color of the section below
 * `variant`   = 'wave' | 'diagonal' | 'shards'
 */
export default function SectionTransition({ fromColor, toColor, variant = 'wave' }) {
  if (variant === 'diagonal') {
    return (
      <div className="relative h-40 md:h-56 -mb-1 -mt-1 z-20 overflow-hidden" style={{ background: fromColor }}>
        {/* Diagonal slice */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <motion.polygon
            points="0,0 1440,80 1440,200 0,200"
            fill={toColor}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </svg>
        {/* Accent line */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <motion.line
            x1="0" y1="0" x2="1440" y2="80"
            stroke="rgba(200,168,80,0.3)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'shards') {
    return (
      <div className="relative h-40 md:h-56 -mb-1 -mt-1 z-20 overflow-hidden" style={{ background: fromColor }}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          {/* Layered shards from above section reaching into below */}
          {[
            { points: "0,60 360,0 480,140 0,200", delay: 0 },
            { points: "280,20 720,0 800,160 360,200", delay: 0.08 },
            { points: "640,40 1080,0 1120,150 720,200", delay: 0.16 },
            { points: "960,10 1440,0 1440,200 1080,200", delay: 0.24 },
            { points: "0,120 240,80 360,200 0,200", delay: 0.1 },
            { points: "800,60 1200,30 1280,200 960,200", delay: 0.2 },
          ].map((shard, i) => (
            <motion.polygon
              key={i}
              points={shard.points}
              fill={toColor}
              initial={{ y: 80, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.6, 
                delay: shard.delay,
                type: "spring",
                stiffness: 80,
                damping: 14
              }}
            />
          ))}
        </svg>
        {/* Glow accent */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: `linear-gradient(90deg, transparent, rgba(59,91,219,0.4), transparent)` }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </div>
    );
  }

  // Default: wave
  return (
    <div className="relative h-40 md:h-56 -mb-1 -mt-1 z-20 overflow-hidden" style={{ background: fromColor }}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        {/* Back wave - wider, more subtle */}
        <motion.path
          d="M0,120 C240,40 480,160 720,80 C960,0 1200,140 1440,60 L1440,200 L0,200 Z"
          fill={toColor}
          opacity="0.4"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        {/* Mid wave */}
        <motion.path
          d="M0,140 C320,60 640,180 960,100 C1120,60 1280,120 1440,80 L1440,200 L0,200 Z"
          fill={toColor}
          opacity="0.7"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
        />
        {/* Front wave - sharp, full opacity */}
        <motion.path
          d="M0,160 C360,100 720,200 1080,130 C1200,110 1320,150 1440,120 L1440,200 L0,200 Z"
          fill={toColor}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />
      </svg>
      {/* Subtle gold accent line on the wave crest */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,160 C360,100 720,200 1080,130 C1200,110 1320,150 1440,120"
          fill="none"
          stroke="rgba(200,168,80,0.35)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}