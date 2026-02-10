import React from 'react';
import { motion } from 'framer-motion';

export default function AboutTeamGrid() {
  return (
    <section className="bg-[#0A0A0A] px-6 md:px-12 lg:px-16 py-28 md:py-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[11px] tracking-[0.3em] uppercase text-white/20 block mb-6">Gründer</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] leading-[1.1] text-white mb-6">
            Die treibende Kraft hinter <em className="italic text-white/40">LuckyTech</em>.
          </h2>
          <p className="text-sm text-white/30 leading-relaxed mb-8 max-w-md">
            LuckyTech ist aktuell ein Ein-Mann-Betrieb — mit der Überzeugung, dass Qualität wichtiger ist als Größe. Von der Idee über die Planung bis zur Umsetzung liegt alles in einer Hand.
          </p>
          <div className="space-y-3">
            <div className="text-2xl md:text-3xl font-light text-white">Max Mustermann</div>
            <div className="text-xs tracking-[0.2em] uppercase text-white/25">Gründer & Inhaber</div>
          </div>
        </motion.div>

        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="relative"
        >
          <div className="aspect-[3/4] max-w-sm mx-auto lg:mx-0 overflow-hidden bg-white/5 rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop"
              alt="Max Mustermann"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}