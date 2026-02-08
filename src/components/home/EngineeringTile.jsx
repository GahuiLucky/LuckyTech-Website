import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const descriptions = {
  Prototyping: 'Rapid Prototyping & 3D-Druck',
  Development: 'Hard- & Software Entwicklung',
  Innovation: 'Creative Thinking & Ideation',
  Consulting: 'Technische Beratung & Konzepte',
  Testing: 'Validierung & Qualitätssicherung',
  '3D Design': 'CAD-Modellierung & Rendering',
};

export default function EngineeringTile({ service, index }) {
  const [hovered, setHovered] = React.useState(false);
  const desc = descriptions[service.title] || '';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: service.delay, type: "spring", stiffness: 150, damping: 12 }}
      whileHover={{ scale: 1.12, y: -10, borderColor: 'rgba(59,91,219,0.6)' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative aspect-square bg-white/5 border border-white/20 p-4 md:p-6 flex flex-col justify-end cursor-pointer backdrop-blur-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0A0A0A] overflow-hidden"
      tabIndex={0}
      role="article"
      aria-label={service.title}
    >
      {/* Icon with spring bounce on view */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.3 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: service.delay + 0.15,
          type: "spring",
          stiffness: 260,
          damping: 10,
          mass: 0.8,
        }}
        animate={{ rotate: hovered ? [0, -12, 12, -6, 0] : 0 }}
      >
        <service.icon className="w-8 h-8 md:w-10 md:h-10 mb-2 text-[#3B5BDB]" />
      </motion.div>
      <div className="text-sm md:text-base font-bold text-white">{service.title}</div>

      {/* Hover detail overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute inset-0 bg-[#3B5BDB]/90 flex flex-col items-center justify-center p-4 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05, type: "spring", stiffness: 200, damping: 14 }}
            >
              <service.icon className="w-8 h-8 md:w-10 md:h-10 mb-3 text-white" />
            </motion.div>
            <div className="text-sm md:text-base font-bold text-white mb-1">{service.title}</div>
            <div className="text-xs md:text-sm text-white/80 leading-snug">{desc}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}