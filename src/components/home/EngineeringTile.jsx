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
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative aspect-square border cursor-pointer overflow-hidden group"
      style={{
        borderColor: hovered ? 'rgba(59,91,219,0.4)' : 'rgba(255,255,255,0.06)',
        transition: 'border-color 0.3s',
      }}
      tabIndex={0}
      role="article"
      aria-label={service.title}
    >
      {/* Scanline texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59,91,219,0.3) 2px, rgba(59,91,219,0.3) 4px)'
      }} />

      {/* Hover background glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 60%, rgba(59,91,219,0.12) 0%, transparent 70%)',
        }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-3 md:p-4 text-center gap-3">
        {/* Index — top left */}
        <span
          className="absolute top-3 left-3 text-[10px] font-mono tracking-wider transition-colors duration-300"
          style={{ color: hovered ? '#3B5BDB' : 'rgba(255,255,255,0.1)' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Icon — large & centered */}
        <motion.div
          className="flex items-center justify-center rounded-lg transition-all duration-300"
          style={{
            width: 52,
            height: 52,
            backgroundColor: hovered ? 'rgba(59,91,219,0.1)' : 'rgba(255,255,255,0.03)',
            border: `1px solid ${hovered ? 'rgba(59,91,219,0.25)' : 'rgba(255,255,255,0.04)'}`,
          }}
          animate={{ scale: hovered ? 1.1 : 1, y: hovered ? -2 : 0 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
        >
          <Icon
            className="w-6 h-6 md:w-7 md:h-7 transition-colors duration-300"
            style={{ color: hovered ? '#3B5BDB' : 'rgba(255,255,255,0.35)' }}
          />
        </motion.div>

        {/* Title */}
        <div className="relative">
          <h3
            className="text-xs md:text-sm font-black uppercase tracking-wide leading-tight transition-colors duration-300"
            style={{ color: hovered ? '#F5F2EB' : 'rgba(245,242,235,0.7)' }}
          >
            {service.title}
          </h3>
          {/* Ghost double */}
          <motion.h3
            className="absolute top-0 left-1/2 -translate-x-1/2 text-xs md:text-sm font-black uppercase tracking-wide leading-tight pointer-events-none select-none whitespace-nowrap"
            style={{
              color: 'transparent',
              WebkitTextStroke: '0.5px rgba(59,91,219,0.25)',
            }}
            animate={{
              y: hovered ? -2 : 0,
              opacity: hovered ? 1 : 0,
            }}
            transition={{ duration: 0.25 }}
          >
            {service.title}
          </motion.h3>
        </div>

        {/* Description — appears on hover */}
        <motion.p
          className="text-[8px] md:text-[9px] font-mono tracking-wider leading-snug uppercase max-w-full px-1"
          style={{ color: 'rgba(59,91,219,0.5)' }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
          transition={{ duration: 0.25 }}
        >
          {desc}
        </motion.p>
      </div>

      {/* Corner accents */}
      <motion.div
        className="absolute top-0 right-0 w-4 h-4 border-t border-r"
        style={{ borderColor: '#3B5BDB' }}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-4 h-4 border-b border-l"
        style={{ borderColor: '#3B5BDB' }}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.2 }}
      />

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #3B5BDB, transparent)' }}
        animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}