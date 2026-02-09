import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServiceRow({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      className="relative cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setExpanded(!expanded)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      {/* Hover bg flash */}
      <motion.div
        className="absolute inset-0 bg-[#00EAFF]/[0.03]"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      {/* Main row */}
      <div className="relative z-10 border-b border-white/[0.06] py-6 md:py-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-5 md:gap-8 flex-1 min-w-0">
            {/* Index */}
            <span
              className="text-xs md:text-sm font-mono tracking-wider transition-colors duration-300 flex-shrink-0"
              style={{ color: hovered || expanded ? '#00EAFF' : 'rgba(255,255,255,0.15)' }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Title with ghost double */}
            <div className="relative">
              <h3
                className="text-2xl md:text-5xl lg:text-6xl font-black tracking-[-0.04em] uppercase transition-colors duration-300 leading-none"
                style={{ color: hovered || expanded ? '#00EAFF' : '#F5F2EB' }}
              >
                {service.title}
              </h3>
              <motion.h3
                className="absolute top-0 left-0 text-2xl md:text-5xl lg:text-6xl font-black tracking-[-0.04em] uppercase leading-none pointer-events-none select-none"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(0,234,255,0.15)',
                }}
                animate={{
                  x: hovered || expanded ? 4 : 0,
                  y: hovered || expanded ? -3 : 0,
                  opacity: hovered || expanded ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {service.title}
              </motion.h3>
            </div>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <span className="text-[11px] tracking-[0.15em] uppercase text-white/20 font-mono">
              {service.tagline}
            </span>
            <motion.div
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300"
              style={{
                borderColor: hovered || expanded ? '#00EAFF' : 'rgba(255,255,255,0.08)',
                backgroundColor: hovered || expanded ? 'rgba(0,234,255,0.1)' : 'transparent',
              }}
              animate={{ rotate: expanded ? 45 : hovered ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Icon
                className="w-4 h-4 transition-colors duration-300"
                style={{ color: hovered || expanded ? '#00EAFF' : 'rgba(255,255,255,0.2)' }}
              />
            </motion.div>
          </div>
        </div>

        {/* Expandable content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              className="mt-6 md:mt-8 ml-0 md:ml-[calc(2rem+2.5rem)]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="pb-4">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-px h-16 bg-[#00EAFF]/20 flex-shrink-0 hidden md:block" />
                  <p className="text-sm md:text-base text-white/30 leading-relaxed max-w-xl font-light">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] tracking-[0.4em] uppercase text-[#00EAFF]/40 font-mono">
                    FEATURES
                  </span>
                  <div className="h-px flex-1 bg-[#00EAFF]/10 max-w-xs" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-w-2xl">
                  {service.features.map((f, fi) => (
                    <motion.div
                      key={f}
                      className="flex items-center gap-3 py-2.5 px-3 border border-white/[0.04] hover:border-[#00EAFF]/20 hover:bg-[#00EAFF]/[0.03] transition-all duration-300 group"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + fi * 0.03 }}
                    >
                      <span className="text-[#00EAFF] font-mono text-xs">+</span>
                      <span className="text-xs md:text-sm text-white/40 group-hover:text-white/70 transition-colors font-light tracking-wide">
                        {f}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}