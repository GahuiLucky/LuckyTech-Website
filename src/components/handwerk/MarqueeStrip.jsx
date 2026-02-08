import React from 'react';
import { motion } from 'framer-motion';

const items = [
  'Smarthome', 'Wallbox', 'KNX', 'Loxone', 'E-Check', 'LED', 'PV-Anlage',
  'Drehstrom', 'Netzwerk', 'Glasfaser', 'Sprachsteuerung', 'Lastmanagement',
  'Gebäudeautomation', 'Sicherheitstechnik', 'Energiemanagement',
];

export default function MarqueeStrip() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-6 border-y border-[#C8A850]/20">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-sm md:text-base uppercase tracking-[0.25em] text-[#C8A850]/60 font-medium flex items-center gap-12"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A850]/30" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}