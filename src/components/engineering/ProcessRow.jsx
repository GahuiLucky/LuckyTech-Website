import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function ProcessRow({ step, index }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.4, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-40, 0]);
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      className="relative cursor-pointer"
      style={{ opacity, x }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Hover flash */}
      <motion.div
        className="absolute inset-0 bg-[#00EAFF]/[0.02]"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      />

      {/* Main row */}
      <div className="relative z-10 border-b border-white/[0.06] py-8 md:py-10">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-5 md:gap-10 flex-1 min-w-0">
            {/* Giant number */}
            <motion.span
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-[-0.06em] select-none transition-all duration-300 flex-shrink-0"
              style={{
                color: 'transparent',
                WebkitTextStroke: hovered || expanded ? '2px rgba(0,234,255,0.7)' : '1.5px rgba(255,255,255,0.06)',
              }}
              animate={{ x: hovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {step.num}
            </motion.span>

            {/* Title with ghost double */}
            <div className="relative flex-1 min-w-0">
              <h3
                className="text-2xl md:text-5xl lg:text-6xl font-black tracking-[-0.04em] uppercase leading-none transition-colors duration-300"
                style={{ color: hovered || expanded ? '#00EAFF' : '#F5F2EB' }}
              >
                {step.title}
              </h3>
              <motion.h3
                className="absolute top-0 left-0 text-2xl md:text-5xl lg:text-6xl font-black tracking-[-0.04em] uppercase leading-none pointer-events-none select-none"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(0,234,255,0.12)',
                }}
                animate={{
                  x: hovered || expanded ? 5 : 0,
                  y: hovered || expanded ? -3 : 0,
                  opacity: hovered || expanded ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {step.title}
              </motion.h3>
            </div>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-5 flex-shrink-0">
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-white/15">
              {step.subtitle}
            </span>
            <motion.div
              className="w-10 h-10 border flex items-center justify-center transition-all duration-300"
              style={{
                borderColor: hovered || expanded ? 'rgba(0,234,255,0.5)' : 'rgba(255,255,255,0.06)',
                backgroundColor: hovered || expanded ? 'rgba(0,234,255,0.05)' : 'transparent',
              }}
              animate={{ rotate: hovered ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Icon
                className="w-4 h-4 transition-colors duration-300"
                style={{ color: hovered || expanded ? '#00EAFF' : 'rgba(255,255,255,0.12)' }}
              />
            </motion.div>
          </div>
        </div>

        {/* Expandable detail */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              className="mt-6 md:mt-8 ml-0 md:ml-[calc(5rem+2.5rem)]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-start gap-4 pb-2">
                <div className="w-px h-16 bg-[#00EAFF]/20 flex-shrink-0 hidden md:block" />
                <div>
                  <span className="text-[10px] font-mono tracking-[0.3em] text-[#00EAFF]/40 uppercase block mb-2">
                    {step.cmd}
                  </span>
                  <p className="text-sm md:text-base text-white/30 leading-relaxed max-w-xl font-light">
                    {step.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}