import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EngProcessStep({ step, index }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const Icon = step.icon;

  return (
    <motion.div
      className="relative cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setExpanded(!expanded)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="absolute inset-0 bg-[#3B5BDB]/[0.02]"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      />

      <div className="relative z-10 border-b border-white/[0.06] py-8 md:py-10">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-5 md:gap-10 flex-1 min-w-0">
            <motion.span
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-none tracking-[-0.06em] select-none flex-shrink-0 transition-all duration-300"
              style={{
                color: 'transparent',
                WebkitTextStroke: hovered || expanded ? '2px rgba(59,91,219,0.6)' : '1.5px rgba(255,255,255,0.06)',
              }}
            >
              {step.num}
            </motion.span>

            <div className="relative flex-1 min-w-0">
              <h3
                className="text-xl md:text-4xl lg:text-5xl font-black tracking-[-0.04em] uppercase leading-none transition-colors duration-300"
                style={{ color: hovered || expanded ? '#3B5BDB' : '#F5F2EB' }}
              >
                {step.title}
              </h3>
              <motion.h3
                className="absolute top-0 left-0 text-xl md:text-4xl lg:text-5xl font-black tracking-[-0.04em] uppercase leading-none pointer-events-none select-none"
                style={{ color: 'transparent', WebkitTextStroke: '1px rgba(59,91,219,0.12)' }}
                animate={{
                  x: hovered || expanded ? 4 : 0,
                  y: hovered || expanded ? -3 : 0,
                  opacity: hovered || expanded ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {step.title}
              </motion.h3>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-5 flex-shrink-0">
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-white/15">{step.subtitle}</span>
            <motion.div
              className="w-10 h-10 border flex items-center justify-center transition-all duration-300"
              style={{
                borderColor: hovered || expanded ? 'rgba(59,91,219,0.5)' : 'rgba(255,255,255,0.06)',
                backgroundColor: hovered || expanded ? 'rgba(59,91,219,0.05)' : 'transparent',
              }}
              animate={{ rotate: hovered ? 90 : 0 }}
            >
              <Icon className="w-4 h-4 transition-colors duration-300" style={{ color: hovered || expanded ? '#3B5BDB' : 'rgba(255,255,255,0.12)' }} />
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              className="mt-6 ml-0 md:ml-[calc(4rem+2.5rem)]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-start gap-4 pb-2">
                <div className="w-px h-16 bg-[#3B5BDB]/20 flex-shrink-0 hidden md:block" />
                <p className="text-sm md:text-base text-white/30 leading-relaxed max-w-xl font-light">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}