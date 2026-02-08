import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Beratung',
    text: 'Persönliche Beratung vor Ort. Wir analysieren Ihre Anforderungen und entwickeln gemeinsam die optimale Lösung.'
  },
  {
    number: '02',
    title: 'Planung',
    text: 'Detaillierte technische Planung mit transparentem Festpreisangebot. Keine versteckten Kosten.'
  },
  {
    number: '03',
    title: 'Umsetzung',
    text: 'Fachgerechte Installation durch erfahrene Meisterbetrieb-Handwerker. Termingerecht und sauber.'
  },
  {
    number: '04',
    title: 'Übergabe',
    text: 'Einweisung, vollständige Dokumentation und langfristiger Service auch nach Projektabschluss.'
  }
];

export default function ProcessTimeline() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
      {steps.map((step, index) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: index * 0.15 }}
          className="group relative p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#F5F2EB]/10 last:border-r-0 last:border-b-0"
        >
          {/* Step number */}
          <motion.div
            className="text-7xl md:text-8xl font-bold text-[#F5F2EB]/[0.04] mb-6 leading-none"
            whileHover={{ color: 'rgba(200,168,80,0.15)' }}
            transition={{ duration: 0.4 }}
          >
            {step.number}
          </motion.div>

          <h3 className="text-2xl font-bold text-[#F5F2EB] mb-4 group-hover:text-[#C8A850] transition-colors duration-500">
            {step.title}
          </h3>

          <p className="text-[#F5F2EB]/50 text-sm leading-relaxed">
            {step.text}
          </p>

          {/* Progress line */}
          <motion.div
            className="absolute bottom-0 left-8 right-8 md:top-8 md:bottom-auto md:left-auto md:right-0 h-px md:h-full md:w-px bg-gradient-to-r md:bg-gradient-to-b from-transparent via-[#C8A850]/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 + index * 0.15 }}
          />
        </motion.div>
      ))}
    </div>
  );
}