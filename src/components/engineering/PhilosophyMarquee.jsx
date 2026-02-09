import React from 'react';
import { motion } from 'framer-motion';

const words = ['INTERDISZIPLINÄR', 'AGIL', 'ZUKUNFTSORIENTIERT', 'KREATIV', 'SYSTEMATISCH', 'INNOVATIV'];

export default function PhilosophyMarquee() {
  return (
    <div className="overflow-hidden border-y border-white/[0.04] py-5">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {[...words, ...words, ...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="text-sm md:text-base font-black tracking-[0.3em] uppercase text-white/[0.06]">
              {w}
            </span>
            <span className="text-[#3B5BDB]/20 text-xs">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}