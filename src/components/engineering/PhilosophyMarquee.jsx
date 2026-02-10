import React from 'react';
import { motion } from 'framer-motion';

const words = ['INTERDISZIPLINÄR', 'AGIL', 'ZUKUNFTSORIENTIERT', 'KREATIV', 'SYSTEMATISCH', 'INNOVATIV'];

export default function PhilosophyMarquee() {
  return (
    <div className="overflow-hidden py-8 md:py-10">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        {[...words, ...words, ...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center gap-16">
            <span className="text-3xl md:text-5xl font-semibold tracking-tight text-white/[0.04]">
              {w}
            </span>
            <span className="text-white/[0.06] text-sm">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}