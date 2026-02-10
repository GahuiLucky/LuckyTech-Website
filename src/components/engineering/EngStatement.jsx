import React from 'react';
import { motion } from 'framer-motion';

export default function EngStatement() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-16 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-2xl md:text-4xl lg:text-[3.5rem] font-light tracking-[-0.02em] leading-[1.15] text-white/90"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          LuckyTech Engineering entwickelt Produkte von Grund auf neu — vom ersten Konzept über funktionsfähige Prototypen bis zur Serienreife.
        </motion.h2>
      </div>
    </section>
  );
}