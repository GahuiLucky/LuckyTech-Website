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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {specs.map((spec, i) => (
        <motion.div
          key={spec}
          className="flex items-center gap-4 py-4 px-5 bg-white/[0.015] border border-white/[0.04] rounded-lg group hover:bg-white/[0.03] hover:border-[#3B5BDB]/15 transition-all duration-300"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <span className="text-[11px] font-mono tracking-wider text-[#3B5BDB]/30 flex-shrink-0">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="text-sm text-white/40 group-hover:text-white/65 transition-colors font-light">
            {spec}
          </span>
        </motion.div>
      ))}
    </div>
  );
}