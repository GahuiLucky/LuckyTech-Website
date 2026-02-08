import React from 'react';
import { motion } from 'framer-motion';

export default function ManifestoBlock() {
  const lines = [
    'Wir denken weiter als die Steckdose.',
    'Wir gestalten Räume, die reagieren.',
    'Wir verbinden Handwerk mit Zukunft.',
    'Wir sind LuckyTech.',
  ];

  return (
    <div className="space-y-0">
      {lines.map((line, i) => (
        <motion.div
          key={i}
          className="border-b border-[#0A0A0A]/8 py-6 md:py-10 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: i * 0.12 }}
        >
          <h3 className={`text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter ${
            i === lines.length - 1 ? 'text-[#0A0A0A]' : 'text-[#0A0A0A]/25'
          }`}>
            {line}
          </h3>
        </motion.div>
      ))}
    </div>
  );
}