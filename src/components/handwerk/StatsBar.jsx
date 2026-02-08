import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Abgeschlossene Projekte' },
  { value: '15+', label: 'Jahre Erfahrung' },
  { value: '24/7', label: 'Notdienst verfügbar' },
  { value: '100%', label: 'Kundenzufriedenheit' }
];

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="text-center md:border-r border-[#0A0A0A]/10 last:border-r-0 py-4"
        >
          <div className="text-5xl md:text-6xl font-bold text-[#0A0A0A] mb-2 tracking-tight">
            {stat.value}
          </div>
          <div className="text-sm text-[#0A0A0A]/40 tracking-wide uppercase">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}