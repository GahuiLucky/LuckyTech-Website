import React from 'react';
import { motion } from 'framer-motion';

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
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative aspect-square border border-white/[0.06] flex flex-col justify-between p-4 md:p-5 cursor-pointer overflow-hidden group"
      tabIndex={0}
      role="article"
      aria-label={service.title}
    >
      {/* Scanline texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59,91,219,0.3) 2px, rgba(59,91,219,0.3) 4px)'
      }} />

      {/* Hover bg */}
      <motion.div
        className="absolute inset-0 bg-[#3B5BDB]/[0.04]"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      />

      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Top: index + icon */}
        <div className="flex items-start justify-between">
          <span
            className="text-[10px] font-mono tracking-wider transition-colors duration-300"
            style={{ color: hovered ? '#3B5BDB' : 'rgba(255,255,255,0.12)' }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <motion.div
            animate={{ rotate: hovered ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Icon
              className="w-5 h-5 md:w-6 md:h-6 transition-colors duration-300"
              style={{ color: hovered ? '#3B5BDB' : 'rgba(255,255,255,0.2)' }}
            />
          </motion.div>
        </div>

        {/* Bottom: title + description */}
        <div>
          <div className="relative mb-1">
            <h3
              className="text-sm md:text-base font-black uppercase tracking-[-0.02em] leading-tight transition-colors duration-300"
              style={{ color: hovered ? '#3B5BDB' : '#F5F2EB' }}
            >
              {service.title}
            </h3>
            {/* Ghost double */}
            <motion.h3
              className="absolute top-0 left-0 text-sm md:text-base font-black uppercase tracking-[-0.02em] leading-tight pointer-events-none select-none"
              style={{
                color: 'transparent',
                WebkitTextStroke: '0.5px rgba(59,91,219,0.2)',
              }}
              animate={{
                x: hovered ? 2 : 0,
                y: hovered ? -2 : 0,
                opacity: hovered ? 1 : 0,
              }}
              transition={{ duration: 0.25 }}
            >
              {service.title}
            </motion.h3>
          </div>
          <motion.p
            className="text-[9px] md:text-[10px] font-mono tracking-wider text-white/20 leading-snug transition-colors duration-300 uppercase"
            animate={{ color: hovered ? 'rgba(59,91,219,0.5)' : 'rgba(255,255,255,0.2)' }}
          >
            {desc}
          </motion.p>
        </div>
      </div>

      {/* Corner accent on hover */}
      <motion.div
        className="absolute top-0 right-0 w-3 h-3 border-t border-r"
        style={{ borderColor: '#3B5BDB' }}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-3 h-3 border-b border-l"
        style={{ borderColor: '#3B5BDB' }}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}