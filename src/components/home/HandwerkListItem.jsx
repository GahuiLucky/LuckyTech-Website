import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';

export default function HandwerkListItem({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      className="group relative w-full border-b border-[#0A0A0A]/10 py-6 md:py-8 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      {/* Hover bg flash */}
      <motion.div
        className="absolute inset-0 bg-[#0A0A0A]/[0.03]"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      <div className="relative z-10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-5 md:gap-8 flex-1 min-w-0">
          {/* Index number */}
          <span
            className="text-xs md:text-sm font-mono tracking-wider transition-colors duration-300 flex-shrink-0"
            style={{ color: hovered ? '#0A0A0A' : 'rgba(10,10,10,0.2)' }}
          >
            {num}
          </span>

          {/* Title with ghost double */}
          <div className="relative">
            <h3
              className="text-2xl md:text-5xl lg:text-6xl font-black tracking-[-0.04em] uppercase transition-colors duration-300 leading-none"
              style={{ color: '#0A0A0A' }}
            >
              {service.title}
            </h3>
            <motion.h3
              className="absolute top-0 left-0 text-2xl md:text-5xl lg:text-6xl font-black tracking-[-0.04em] uppercase leading-none pointer-events-none select-none"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px rgba(10,10,10,0.1)',
              }}
              animate={{
                x: hovered ? 4 : 0,
                y: hovered ? -3 : 0,
                opacity: hovered ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {service.title}
            </motion.h3>
          </div>
        </div>

        {/* Right side — subtitle + icon */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <span className="text-[11px] tracking-[0.15em] uppercase text-[#0A0A0A]/30 font-mono">
            {service.subtitle}
          </span>
          <motion.div
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300"
            style={{
              borderColor: hovered ? '#0A0A0A' : 'rgba(10,10,10,0.1)',
              backgroundColor: hovered ? 'rgba(10,10,10,0.05)' : 'transparent',
            }}
            animate={{ rotate: hovered ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Icon
              className="w-4 h-4 transition-colors duration-300"
              style={{ color: hovered ? '#0A0A0A' : 'rgba(10,10,10,0.25)' }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}