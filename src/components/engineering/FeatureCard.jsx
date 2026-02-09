import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureCard({ num, title, description, index }) {
  return (
    <motion.div
      className="group relative border border-white/[0.06] p-6 md:p-8 hover:border-[#3B5BDB]/40 transition-all duration-500 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-[#3B5BDB]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <span className="text-5xl md:text-6xl font-black leading-none tracking-[-0.06em] text-transparent block mb-4"
          style={{ WebkitTextStroke: '1.5px rgba(59,91,219,0.25)' }}
        >
          {num}
        </span>
        <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-[#3B5BDB] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-white/30 font-light leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}