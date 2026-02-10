import React from 'react';
import { motion } from 'framer-motion';

const specs = [
  'Rapid Prototyping & 3D-Druck',
  'Hardware & Software Design',
  'Elektronik-Integration',
  'Design Thinking Workshops',
  'CAD/CAM Modellierung',
  'Machbarkeitsstudien',
  'Iterative Optimierung',
  'Produktionsbegleitung',
];

export default function SpecList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {specs.map((spec, i) => (
        <motion.div
          key={spec}
          className="flex items-center gap-5 py-5 px-6 border-b border-white/[0.04] group hover:bg-white/[0.02] transition-colors"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <span
            className="text-2xl md:text-3xl font-black tracking-[-0.04em] text-transparent select-none"
            style={{ WebkitTextStroke: '1px rgba(59,91,219,0.2)' }}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="text-sm md:text-base text-white/40 group-hover:text-white/70 transition-colors font-light tracking-wide">
            {spec}
          </span>
        </motion.div>
      ))}
    </div>
  );
}