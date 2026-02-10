import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function ServiceRow({ service, index }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      className="group cursor-pointer"
      onClick={() => setExpanded(!expanded)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="border-b border-white/[0.06] py-7 md:py-9 group-hover:border-white/[0.12] transition-colors duration-300">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-5 md:gap-8 flex-1 min-w-0">
            <span className="text-[11px] font-mono tracking-wider text-white/15 flex-shrink-0">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white/80 group-hover:text-white transition-colors duration-300">
              {service.title}
            </h3>
          </div>

          <div className="flex items-center gap-5 flex-shrink-0">
            <span className="hidden md:block text-[11px] tracking-widest uppercase text-white/20 font-light">
              {service.tagline}
            </span>
            <div className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center group-hover:border-[#3B5BDB]/40 group-hover:bg-[#3B5BDB]/5 transition-all duration-300">
              {expanded
                ? <Minus className="w-3.5 h-3.5 text-[#3B5BDB]" />
                : <Plus className="w-3.5 h-3.5 text-white/30 group-hover:text-[#3B5BDB] transition-colors" />
              }
            </div>
          </div>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              className="mt-6 md:mt-8 ml-0 md:ml-[calc(2rem+2.5rem)]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="pb-2 max-w-2xl">
                <p className="text-sm md:text-base text-white/30 leading-relaxed font-light mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f, fi) => (
                    <motion.span
                      key={f}
                      className="text-xs px-3 py-1.5 rounded-full border border-white/[0.06] text-white/35 font-light bg-white/[0.02]"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 + fi * 0.04 }}
                    >
                      {f}
                    </motion.span>
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