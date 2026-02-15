import React from 'react';
import { motion } from 'framer-motion';

export default function FullWidthImage() {
  return (
    <section className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
      <motion.img
        src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&q=80&auto=format"
        alt="Elektro-CAD Verkabelungsplan"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-[#0A0A0A]/40" />
      <div className="absolute inset-0 flex items-end px-6 md:px-16 pb-10 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 block mb-2">/ Qualität</span>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-white max-w-2xl leading-[1.1]">
            Jedes Detail zählt — von der <em className="italic text-white/50">Planung</em> bis zur letzten Schraube.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}