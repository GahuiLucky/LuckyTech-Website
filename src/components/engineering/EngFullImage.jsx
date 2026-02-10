import React from 'react';
import { motion } from 'framer-motion';

export default function EngFullImage() {
  return (
    <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
      <motion.img
        src="https://images.unsplash.com/photo-1563770660941-20978e870e26?w=1920&q=80&auto=format"
        alt="Engineering workspace"
        className="w-full h-full object-cover"
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-[#0A0A0A]/50" />
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <motion.p
          className="text-2xl md:text-4xl lg:text-5xl font-light text-center text-white/90 tracking-[-0.02em] leading-[1.15] max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Unsere Kunden vertrauen auf schnellere Entwicklungszyklen und{' '}
          <span className="italic text-white/50">messbare Ergebnisse</span>.
        </motion.p>
      </div>
    </section>
  );
}