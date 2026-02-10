import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function EngServiceCard({ icon: Icon, label, headline, description, imgSrc, features, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="group relative border border-white/[0.06] hover:border-[#3B5BDB]/20 transition-all duration-500 cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Image */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <img
          src={imgSrc}
          alt={label}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
        <div className="absolute top-5 left-5">
          <div className="w-10 h-10 border border-[#3B5BDB]/30 bg-[#3B5BDB]/10 flex items-center justify-center backdrop-blur-sm">
            <Icon className="w-4 h-4 text-[#3B5BDB]" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#3B5BDB]/40 font-mono block mb-3">
          {label}
        </span>
        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-3 leading-tight group-hover:text-[#3B5BDB] transition-colors duration-300">
          {headline}
        </h3>
        <p className="text-sm text-white/30 font-light leading-relaxed mb-4">
          {description}
        </p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] tracking-[0.4em] uppercase text-[#3B5BDB]/40 font-mono">FEATURES</span>
                  <div className="h-px flex-1 bg-[#3B5BDB]/10" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {features.map((f, fi) => (
                    <motion.div
                      key={f}
                      className="flex items-center gap-2 py-2 px-3 border border-white/[0.04] hover:border-[#3B5BDB]/20 hover:bg-[#3B5BDB]/[0.03] transition-all"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: fi * 0.04 }}
                    >
                      <span className="text-[#3B5BDB] font-mono text-xs">+</span>
                      <span className="text-xs text-white/40 font-light tracking-wide">{f}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-2 mt-4 text-[#3B5BDB] text-xs font-mono tracking-wider group-hover:gap-3 transition-all">
          <span>{expanded ? 'WENIGER' : 'MEHR ERFAHREN'}</span>
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </motion.div>
  );
}